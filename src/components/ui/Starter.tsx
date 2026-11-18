import React, { ComponentPropsWithoutRef } from "react";

type StarterProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function Starter(props: StarterProps) {
  const { className, children, ...rest } = props;

  return (
    <div className={`flex flex-col ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
}

export default Starter;
