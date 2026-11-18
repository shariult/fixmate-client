import React, { ComponentPropsWithoutRef } from "react";

type FormElProps = {
  action: () => void;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"form">;

function FormEl(props: FormElProps) {
  const { action, className, children, ...rest } = props;
  return (
    <form className={`${className ? className : ""}`} action={action} {...rest}>
      {children}
    </form>
  );
}

export default FormEl;
