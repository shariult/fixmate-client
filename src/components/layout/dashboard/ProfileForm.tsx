"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FormGroup from "../../ui/form/FormGroup";
import { isValidStr } from "@/lib/utils";
import { PiUploadSimpleBold } from "react-icons/pi";
import { TUserInput } from "@/types";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB

type ProfileFormProps = {
  user: TUserInput;
  className?: string;
} & ComponentPropsWithoutRef<"form">;

type ProfileFormFieldErrors = {
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
  image?: string;
};

async function uploadImageToImgBB(dataUrl: string): Promise<string> {
  const body = new FormData();
  body.append("image", dataUrl.split(",")[1]); // strip "data:image/...;base64,"

  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    { method: "POST", body },
  );
  const json = await res.json();

  if (!res.ok || !json?.data?.url) {
    throw new Error(json?.error?.message ?? "Image upload failed");
  }
  return json.data.url as string;
}

function ProfileForm({ user, className, ...rest }: ProfileFormProps) {
  const router = useRouter();

  const initialFormValues = {
    name: user.name ?? "",
    phone: user.phone ?? "",
    address: user.address ?? "",
    bio: user.bio ?? "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [pickedImage, setPickedImage] = useState<string | null>(null); // new photo preview (data URL)
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ProfileFormFieldErrors>({});

  const displayedImage = pickedImage ?? user.image ?? null;

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFieldErrors((prev) => ({ ...prev, image: undefined }));

    if (!file) {
      setPickedImage(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setPickedImage(null);
      setFieldErrors((prev) => ({ ...prev, image: "File must be an image." }));
      e.target.value = "";
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setPickedImage(null);
      setFieldErrors((prev) => ({
        ...prev,
        image: "Image must be 5 MB or smaller.",
      }));
      e.target.value = "";
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result as string);
    fileReader.readAsDataURL(file);
  }

  function handleReset() {
    setFormValues(initialFormValues);
    setPickedImage(null);
    setFieldErrors({});
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      name: formValues.name.trim(),
      phone: formValues.phone.trim(),
      address: formValues.address.trim(),
      bio: formValues.bio.trim(),
    };

    const validationErrors: ProfileFormFieldErrors = {
      name: isValidStr(payload.name, 1) ? undefined : "Please enter your name.",
      phone:
        payload.phone === "" ||
        /^01\d{9}$/.test(payload.phone.replace(/[\s-]/g, ""))
          ? undefined
          : "Enter a valid phone number, e.g. 01XXXXXXXXX.",
      image: fieldErrors.image, // set by handleImageChange
    };

    const hasValidationErrors = Object.values(validationErrors).some(Boolean);
    setFieldErrors(validationErrors);
    if (hasValidationErrors) {
      setIsLoading(false);
      return;
    }

    try {
      // Upload only when a new photo was picked; otherwise keep the current one
      const image = pickedImage
        ? await uploadImageToImgBB(pickedImage)
        : (user.image ?? undefined);

      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          phone: payload.phone.replace(/[\s-]/g, ""),
          image,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message ?? "Something went wrong!");
      }
    } catch (err) {
      setIsLoading(false);
      toast.error(err instanceof Error ? err.message : "Something went wrong!");
      return;
    }

    setIsLoading(false);
    setPickedImage(null);
    toast.success("Profile updated!");
    router.refresh();
  }

  return (
    <form
      className={`lg:col-span-2 space-y-5 rounded-2xl border border-base-300 bg-base-50 p-6 sm:p-8 ${className ?? ""}`}
      {...rest}
      onSubmit={handleSubmit}
    >
      <FormGroup labelText="Profile photo" errorText={fieldErrors.image}>
        <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-base-300 bg-base-100 p-4 transition-colors hover:border-primary">
          {displayedImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={displayedImage}
              alt="Profile photo preview"
              className="size-12 shrink-0 rounded-lg object-cover"
            />
          ) : (
            <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-base-200 text-muted">
              <PiUploadSimpleBold className="text-2xl" />
            </span>
          )}
          <span>
            <span className="block text-sm font-medium">
              Click to choose a new photo
            </span>
            <span className="block text-xs text-muted">
              JPG or PNG, up to 5 MB
            </span>
          </span>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="sr-only"
            onChange={handleImageChange}
            disabled={isLoading}
          />
        </label>
      </FormGroup>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormGroup labelText="Full name" errorText={fieldErrors.name}>
          <input
            type="text"
            name="name"
            className="input w-full"
            autoComplete="name"
            value={formValues.name}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup labelText="Phone" errorText={fieldErrors.phone}>
          <input
            type="tel"
            name="phone"
            className="input w-full"
            placeholder="01XXXXXXXXX"
            autoComplete="tel"
            value={formValues.phone}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </FormGroup>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormGroup labelText="Email">
          <input
            type="email"
            className="input w-full bg-base-200"
            value={user.email}
            readOnly
          />
          <p className="label">Read-only</p>
        </FormGroup>

        <FormGroup labelText="Role">
          <input
            type="text"
            className="input w-full bg-base-200 capitalize"
            value={user.role}
            readOnly
          />
          <p className="label">Read-only</p>
        </FormGroup>
      </div>

      <FormGroup labelText="address" errorText={fieldErrors.address}>
        <input
          type="text"
          name="address"
          className="input w-full"
          placeholder="City / address, e.g. Mirpur, Dhaka"
          value={formValues.address}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormGroup>

      <FormGroup labelText="Bio" errorText={fieldErrors.bio}>
        <textarea
          name="bio"
          className="textarea h-28 w-full"
          placeholder="A short introduction. Technicians: mention your skills and experience."
          value={formValues.bio}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormGroup>

      <div className="flex flex-wrap justify-end gap-3 border-t border-base-300 pt-6">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={handleReset}
          disabled={isLoading}
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn bg-primary text-primary-content hover:bg-primary-hover"
          disabled={isLoading}
        >
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          Save changes
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
