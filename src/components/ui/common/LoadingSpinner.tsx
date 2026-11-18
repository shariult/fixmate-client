import React, { ComponentPropsWithoutRef } from "react";

type LoadingSpinnerProps = {
  className?: string;
} & ComponentPropsWithoutRef<"span">;

function LoadingSpinner(props: LoadingSpinnerProps) {
  const { className, ...rest } = props;

  return (
    <span
      className={`loading loading-spinner loading-xs ${className ? className : ""}`}
      {...rest}
    ></span>
  );
}

export default LoadingSpinner;
