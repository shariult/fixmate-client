"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { isValidStr } from "@/lib/utils";
import FormGroup from "@/components/ui/form/FormGroup";
import { type AuthUser } from "@/lib/authClient";
import LoadingSpinner from "@/components/ui/common/LoadingSpinner";
import { TService } from "@/types";
import { PiXBold } from "react-icons/pi";
import { storeBookingAction } from "@/lib/bookingActions";

type BookingModalProps = {
  user: AuthUser;
  service: TService;
  modalRef?: React.RefObject<HTMLDialogElement | null>;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"dialog">;

type BookingFormFieldErrors = {
  customerPhone?: string;
  preferredDate?: string;
  address?: string;
  problemDescription?: string;
};

function BookingModal(props: BookingModalProps) {
  const { service, user, modalRef, className, children, ...rest } = props;
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];

  const initialFormValues = {
    customerPhone: user?.phone ?? "",
    preferredDate: "",
    address: user.address,
    problemDescription: "",
    serviceId: service._id,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<BookingFormFieldErrors>({});

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setFormValues(initialFormValues);
    setFieldErrors({});
  }

  function handleCancel() {
    resetForm();
    modalRef?.current?.close();
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      customerPhone: formValues.customerPhone.replace(/[\s-]/g, ""),
      preferredDate: formValues.preferredDate,
      address: formValues.address.trim(),
      problemDescription: formValues.problemDescription.trim(),
      serviceId: service._id,
      price: service.basePrice,
    };

    const validationErrors: BookingFormFieldErrors = {
      customerPhone:
        payload.customerPhone === "" || isValidStr(payload.customerPhone, 10)
          ? undefined
          : "Enter a valid phone number, e.g. 01XXXXXXXXX.",
      preferredDate:
        payload.preferredDate === ""
          ? "Please choose a date."
          : payload.preferredDate < today
            ? "Date can't be in the past."
            : undefined,
      address: isValidStr(payload.address, 1)
        ? undefined
        : "Please enter your address.",
      problemDescription: isValidStr(payload.problemDescription, 20)
        ? undefined
        : "Describe the problem in at least 20 characters.",
    };

    const hasValidationErrors = Object.values(validationErrors).some(Boolean);
    setFieldErrors(validationErrors);
    if (hasValidationErrors) {
      setIsLoading(false);
      return;
    }

    const resData = await storeBookingAction(payload);
    if (!resData.isSuccess) {
      setIsLoading(false);
      toast.error(resData.error.message || "Could not book Service!");
      return;
    }

    setIsLoading(false);
    toast.success("Repair request sent!");
    resetForm();
    modalRef?.current?.close();
    router.push("/dashboard/customer/my-bookings");
    router.refresh();
  }

  return (
    <dialog
      ref={modalRef}
      className={`modal modal-bottom sm:modal-middle ${className ? className : ""}`}
      {...rest}
    >
      <div className="modal-box max-w-lg">
        <form method="dialog">
          <button
            className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
            aria-label="Close"
          >
            <PiXBold className="text-xl" />
          </button>
        </form>

        <h3 className="heading-3">Request a repair</h3>
        <p className="mt-1 text-sm text-muted">
          iPhone Screen Replacement · from $49
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormGroup labelText="Name">
              <input
                type="text"
                className="input w-full bg-base-200"
                value={user.name}
                readOnly
              />
            </FormGroup>
            <FormGroup labelText="Email">
              <input
                type="email"
                className="input w-full bg-base-200"
                value={user.email}
                readOnly
              />
            </FormGroup>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormGroup labelText="Phone" errorText={fieldErrors.customerPhone}>
              <input
                type="tel"
                name="customerPhone"
                className="input w-full"
                placeholder="01XXXXXXXXX"
                autoComplete="tel"
                value={formValues.customerPhone}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </FormGroup>
            <FormGroup
              labelText="Preferred date"
              errorText={fieldErrors.preferredDate}
            >
              <input
                type="date"
                name="preferredDate"
                className="input w-full"
                min={today}
                value={formValues.preferredDate}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </FormGroup>
          </div>

          <FormGroup labelText="Address" errorText={fieldErrors.address}>
            <input
              type="text"
              name="address"
              className="input w-full"
              placeholder="House, road, area"
              autoComplete="street-address"
              value={formValues.address}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup
            labelText="Problem description"
            errorText={fieldErrors.problemDescription}
          >
            <textarea
              name="problemDescription"
              className="textarea h-28 w-full"
              placeholder="What is wrong with the device? (at least 20 characters)"
              value={formValues.problemDescription}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormGroup>

          <div className="modal-action mt-6">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-primary text-primary-content hover:bg-primary-hover"
              disabled={isLoading}
            >
              {isLoading && <LoadingSpinner />}
              Send request
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default BookingModal;
