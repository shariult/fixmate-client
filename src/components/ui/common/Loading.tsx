import React, { ComponentPropsWithoutRef } from "react";

type LoadingProps = {
  className?: string;
  loadingText?: string;
} & ComponentPropsWithoutRef<"div">;

function Loading(props: LoadingProps) {
  const { className, loadingText, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <div className="h-8 w-8 rounded-full border-2 border-gray-500 border-t-gray-300 animate-spin"></div>

      <p className="text-sm font-medium text-muted">
        {loadingText ?? "Loading..."}
      </p>
    </div>
  );
}

export default Loading;
