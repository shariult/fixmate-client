"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FormGroup from "@/components/ui/form/FormGroup";
import {
  isValidEmail,
  isValidHttpsUrl,
  isValidPassword,
  isValidStr,
} from "@/lib/utils";
import authClient from "@/lib/authClient";
import { PiDeviceMobileBold, PiWrenchBold } from "react-icons/pi";
import { updateNewUserAction } from "@/lib/user/userActions";

type UserFormProps = {
  type: "signin" | "signup";
  className?: string;
} & ComponentPropsWithoutRef<"form">;

type UserFormFieldErrors = {
  name?: string;
  username?: string;
  image?: string;
  email?: string;
  role?: string;
  address?: string;
  phone?: string;
  bio?: string;
  password?: string;
  confirmPassword?: string;
};

const INITIAL_FORM_VALUES = {
  name: "",
  username: "",
  image: "",
  email: "",
  role: "customer",
  address: "",
  phone: "",
  bio: "",
  password: "",
  confirmPassword: "",
};

function UserForm({ type, className, ...rest }: UserFormProps) {
  const router = useRouter();
  const isSignUp = type === "signup";

  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<UserFormFieldErrors>({});

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSignIn() {
    setFieldErrors({});
    setIsLoading(true);

    const { error } = await authClient.signIn.email({
      email: formValues.email.trim(),
      password: formValues.password,
    });
    setIsLoading(false);

    if (error) {
      toast.error(error.message ?? "Something went wrong!");
      return;
    }

    toast.success("Sign in successful!");
    router.push("/");
    router.refresh();
  }

  async function handleSignUp() {
    setIsLoading(true);
    const payload = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      image: formValues.image.trim(),
      email: formValues.email.trim(),
      role: formValues.role as "technician" | "customer",
      bio: formValues.bio,
      address: formValues.address,
      phone: formValues.phone,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
    };

    const validationErrors: UserFormFieldErrors = {
      name: isValidStr(payload.name, 1) ? undefined : "Enter a valid name",
      username: isValidStr(payload.username, 1)
        ? undefined
        : "Enter a valid username",
      image:
        payload.image === "" || isValidHttpsUrl(payload.image)
          ? undefined
          : "Enter a valid https:// image URL",
      email: isValidEmail(payload.email) ? undefined : "Email is invalid",
      role: ["admin", "technician", "customer"].includes(payload.role)
        ? undefined
        : "Enter a valid role",
      password: isValidPassword(payload.password)
        ? undefined
        : "Password is invalid",
      confirmPassword:
        payload.password === payload.confirmPassword
          ? undefined
          : "Passwords do not match",
    };

    const hasValidationErrors = Object.values(validationErrors).some(Boolean);
    setFieldErrors(validationErrors);
    if (hasValidationErrors) {
      setIsLoading(false);
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: payload.name,
      username: payload.username,
      email: payload.email,
      password: payload.password,
      image: payload.image || undefined,
      role: payload.role,
      address: payload.address,
      phone: payload.phone,
      bio: payload.bio,
    });
    setIsLoading(false);

    if (error) {
      toast.error(error.message ?? "Something went wrong!");
      return;
    }

    await updateNewUserAction();

    toast.success("Account created!");
    router.push("/");
    router.refresh();
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSignUp) {
      await handleSignUp();
    } else {
      await handleSignIn();
    }
  }

  return (
    <form
      className={`space-y-4 ${className ?? ""}`}
      {...rest}
      onSubmit={handleSubmit}
    >
      {isSignUp && (
        <>
          <fieldset>
            <legend className="fieldset-legend">I want to join as</legend>
            <div className="mt-1 grid grid-cols-2 gap-3">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  className="peer sr-only"
                  onChange={handleInputChange}
                  value="customer"
                  disabled={isLoading}
                  defaultChecked
                />
                <div className="h-full rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <PiDeviceMobileBold className="text-2xl" />
                  </span>
                  <p className="mt-3 font-title font-medium">Customer</p>
                  <p className="mt-0.5 text-xs/5 text-muted">
                    I need something repaired
                  </p>
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  className="peer sr-only"
                  onChange={handleInputChange}
                  value="technician"
                  disabled={isLoading}
                />
                <div className="h-full rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <PiWrenchBold className="text-2xl" />
                  </span>
                  <p className="mt-3 font-title font-medium">Technician</p>
                  <p className="mt-0.5 text-xs/5 text-muted">
                    I repair and list services
                  </p>
                </div>
              </label>
            </div>
          </fieldset>

          <FormGroup labelText="Name" errorText={fieldErrors.name}>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Abdur Rahman"
              value={formValues.name}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup labelText="Username" errorText={fieldErrors.username}>
            <input
              type="text"
              name="username"
              className="input w-full"
              placeholder="Ex: abdur12"
              value={formValues.username}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormGroup>

          {/* <FormGroup
            labelText="Profile Image URL"
            errorText={fieldErrors.image}
          >
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="https://picsum.photos/200"
              value={formValues.image}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </FormGroup> */}
        </>
      )}

      <FormGroup labelText="Email" errorText={fieldErrors.email}>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="you@example.com"
          value={formValues.email}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormGroup>

      <FormGroup
        labelText="Password"
        errorText={fieldErrors.password}
        labelExtraEl={
          !isSignUp && (
            <Link href="#" className="link link-hover text-xs text-gray-700">
              Forgot Password?
            </Link>
          )
        }
      >
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="input input-bordered w-full"
          value={formValues.password}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        {isSignUp && (
          <p className="text-xs text-gray-500">
            Min 6 characters with one Uppercase and one Lowercase letter.
          </p>
        )}
      </FormGroup>

      {isSignUp && (
        <FormGroup
          labelText="Confirm Password"
          errorText={fieldErrors.confirmPassword}
        >
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            className="input input-bordered w-full"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </FormGroup>
      )}

      <button
        type="submit"
        className="btn bg-primary text-primary-content hover:bg-primary-hover w-full"
        disabled={isLoading}
      >
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
}

export default UserForm;
