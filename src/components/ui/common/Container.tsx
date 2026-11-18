import React, { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  children: React.ReactNode;
  el?: T;
  elClassName?: string;
  className?: string;
  spaceX?: string;
  spaceY?: string;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>(props: ContainerProps<C>) {
  const { children, el, elClassName, className, spaceX, spaceY, ...rest } =
    props;
  const El = el || "section";

  return (
    <El className={`${elClassName ? elClassName : ""}`} {...rest}>
      <div
        className={`max-w-330 mx-auto ${spaceX ?? "px-6"} ${spaceY ?? "py-20"} ${className ? className : ""}`}
      >
        {children}
      </div>
    </El>
  );
}

export default Container;
