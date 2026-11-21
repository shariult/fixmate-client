"use client";

import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FormGroup from "@/components/ui/form/FormGroup";
import { isValidStr, uploadImageToImgBB } from "@/lib/utils";
import { PiUploadSimpleBold } from "react-icons/pi";
import Image from "next/image";
import { categories, serviceModes } from "@/data/appData";
import authClient from "@/lib/authClient";
import Loading from "@/components/ui/common/Loading";
import LoadingSpinner from "@/components/ui/common/LoadingSpinner";
import { serviceStoreAction } from "@/lib/service/serviceActions";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
const MY_SERVICES_PATH = "/dashboard/technician/my-services"; // TODO: adjust to your route

type ServiceFormProps = {
  className?: string;
} & ComponentPropsWithoutRef<"form">;

type ServiceFormFieldErrors = {
  title?: string;
  category?: string;
  basePrice?: string;
  description?: string;
  serviceMode?: string;
  serviceArea?: string;
  estimatedDuration?: string;
  image?: string;
  imageDeleteUrl?: string;
};

const INITIAL_FORM_VALUES = {
  title: "",
  category: "",
  basePrice: "",
  description: "",
  serviceMode: "home-visit",
  serviceArea: "",
  estimatedDuration: "",
  image: "",
  imageDeleteUrl: "",
};

function ServiceForm(props: ServiceFormProps) {
  const { className, ...rest } = props;
  const router = useRouter();

  const { data, error, isPending } = authClient.useSession();

  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ServiceFormFieldErrors>({});

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      setPickedImage(null);
      return;
    }
    setImageFile(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      title: formValues.title.trim(),
      category: formValues.category,
      basePrice: Number(formValues.basePrice),
      description: formValues.description.trim(),
      serviceMode: formValues.serviceMode,
      serviceArea: formValues.serviceArea.trim(),
      estimatedDuration: formValues.estimatedDuration.trim(),
      image: "",
      imageDeleteUrl: "",
    };
    console.log(payload);

    const validationErrors: ServiceFormFieldErrors = {
      title: isValidStr(payload.title, 1) ? undefined : "Please enter a title.",
      category: categories.some((item) => item.slug === payload.category)
        ? undefined
        : "Please choose a category.",
      basePrice:
        Number.isFinite(payload.basePrice) && payload.basePrice > 0
          ? undefined
          : "Enter a price greater than 0.",
      description: isValidStr(payload.description, 1)
        ? undefined
        : "Please describe the service.",
      serviceMode: serviceModes.some(
        (item) => item.slug === payload.serviceMode,
      )
        ? undefined
        : "Please choose a service mode.",
      serviceArea: isValidStr(payload.serviceArea, 1)
        ? undefined
        : "Please enter the area you cover.",
      estimatedDuration: isValidStr(payload.estimatedDuration, 1)
        ? undefined
        : "Please add an estimated duration.",
      image: !imageFile
        ? "Please upload an image."
        : !imageFile.type.startsWith("image/")
          ? "File must be an image."
          : imageFile.size > MAX_IMAGE_SIZE
            ? "Image must be 5 MB or smaller."
            : undefined,
    };

    const hasValidationErrors = Object.values(validationErrors).some(Boolean);
    setFieldErrors(validationErrors);
    if (hasValidationErrors || !imageFile) {
      setIsLoading(false);
      return;
    }

    const imageData = await uploadImageToImgBB(imageFile as File);
    if (imageData.isSuccess) {
      payload.image = imageData.data.data.url;
      payload.imageDeleteUrl = imageData.data.data.delete_url;
    } else {
      setIsLoading(false);
      toast.error("Image upload failed. Please try again!");
      return;
    }

    const res = await serviceStoreAction(payload);

    if (!res.isSuccess) {
      setIsLoading(false);
      toast.error(res.error.message || "Could not create Service!");
      return;
    }

    setIsLoading(false);
    toast.success("Service submitted. It's waiting for admin approval.");
    router.push(MY_SERVICES_PATH);
    router.refresh();
  }

  return (
    <form
      className={`lg:col-span-2 space-y-5 rounded-2xl border border-base-300 bg-base-50 p-6 sm:p-8 ${className ?? ""}`}
      {...rest}
      onSubmit={handleSubmit}
    >
      <FormGroup labelText="Service title" errorText={fieldErrors.title}>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="e.g. iPhone Screen Replacement"
          value={formValues.title}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormGroup>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormGroup labelText="Category" errorText={fieldErrors.category}>
          <select
            name="category"
            className="select w-full"
            value={formValues.category}
            onChange={handleInputChange}
            disabled={isLoading}
          >
            <option value="" disabled>
              Choose a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.title}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup
          labelText="Base price (USD)"
          errorText={fieldErrors.basePrice}
        >
          <label className="input w-full">
            <span className="text-muted">$</span>
            <input
              type="number"
              name="basePrice"
              min="1"
              step="0.01"
              placeholder="49"
              value={formValues.basePrice}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </label>
        </FormGroup>
      </div>

      <fieldset>
        <legend className="fieldset-legend">Service mode</legend>
        <div className="mt-1 grid gap-3 sm:grid-cols-2">
          {serviceModes.map((item) => {
            const Icon = item.icon;
            return (
              <label className="cursor-pointer" key={item.id}>
                <input
                  type="radio"
                  name="serviceMode"
                  value={item.slug}
                  className="peer sr-only"
                  onChange={handleInputChange}
                  disabled={isLoading}
                  defaultChecked={formValues.serviceMode === item.slug}
                />
                <div className="flex h-full items-start gap-3 rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="text-2xl" />
                  </span>
                  <div>
                    <p className="font-title font-medium">{item.title}</p>
                    <p className="text-xs/5 text-muted">{item.details}</p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        {fieldErrors.serviceMode && (
          <p className="mt-1 text-xs text-error">{fieldErrors.serviceMode}</p>
        )}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormGroup labelText="Service area" errorText={fieldErrors.serviceArea}>
          <input
            type="text"
            name="serviceArea"
            className="input w-full"
            placeholder="e.g. Dhanmondi, Dhaka"
            value={formValues.serviceArea}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup
          labelText="Estimated duration"
          errorText={fieldErrors.estimatedDuration}
        >
          <input
            type="text"
            name="estimatedDuration"
            className="input w-full"
            placeholder="e.g. 2-3 hours"
            value={formValues.estimatedDuration}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </FormGroup>
      </div>

      <FormGroup labelText="Service image" errorText={fieldErrors.image}>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-base-300 bg-base-100 px-4 py-8 text-center transition-colors hover:border-primary">
          <PiUploadSimpleBold className="text-3xl text-muted" />
          <span className="text-sm font-medium">
            {imageFile ? imageFile.name : "Click to upload an image"}
          </span>
          <span className="text-xs text-muted">JPG or PNG, up to 5 MB</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="sr-only"
            onChange={handleImageChange}
            disabled={isLoading}
          />
        </label>
        {pickedImage && (
          <Image
            src={pickedImage}
            alt="Image preview"
            width={100}
            height={100}
            className="mt-3 aspect-video w-full rounded-xl object-cover"
          />
        )}
      </FormGroup>

      <FormGroup labelText="Description" errorText={fieldErrors.description}>
        <textarea
          name="description"
          className="textarea h-32 w-full"
          placeholder="What does the service include? Mention parts, checks and what the customer should prepare."
          value={formValues.description}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormGroup>

      <div className="grid gap-5 sm:grid-cols-2">
        {isPending && <Loading className="flex items-center gap-3" />}

        {!isPending && !error && (
          <>
            <FormGroup labelText="Technician name">
              <input
                type="text"
                className="input w-full bg-base-200"
                value={data?.user.name}
                readOnly
              />
            </FormGroup>
            <FormGroup labelText="Technician email">
              <input
                type="email"
                className="input w-full bg-base-200"
                value={data?.user.email}
                readOnly
              />
            </FormGroup>
          </>
        )}
      </div>

      <div className="flex flex-wrap justify-end gap-3 border-t border-base-300 pt-6">
        <Link href={MY_SERVICES_PATH} className="btn btn-ghost">
          Cancel
        </Link>
        <button
          type="submit"
          className="btn bg-primary text-primary-content hover:bg-primary-hover"
          disabled={isLoading}
        >
          {isLoading && <LoadingSpinner />}
          Submit for approval
        </button>
      </div>
    </form>
  );
}

export default ServiceForm;
