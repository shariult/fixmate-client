import React, { ComponentPropsWithoutRef } from "react";

type UserDemoImgProps = {
  name: string;
  size?: string;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function UserDemoImg(props: UserDemoImgProps) {
  const { name, size, className, ...rest } = props;

  return (
    <p
      className={`flex justify-center items-center ${size ? size : "w-10 h-10 text-lg"} rounded-full bg-primary text-primary-content  ${className ? className : ""}`}
      {...rest}
    >
      {name ? name[0].toUpperCase() : "U"}
    </p>
  );
}

export default UserDemoImg;
