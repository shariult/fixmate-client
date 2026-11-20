import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { TUserInput } from "@/types";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import Image from "next/image";

type ProfileAsideProps = {
  user: TUserInput;
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function ProfileAside(props: ProfileAsideProps) {
  const { user, className, ...rest } = props;

  return (
    <aside
      className={`h-fit rounded-2xl border border-base-300 bg-base-50 p-6 text-center xl:col-span-1 ${className ? className : ""}`}
      {...rest}
    >
      <div className="avatar">
        <div className="w-28 rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-base-50">
          {user.image ? (
            <Image
              alt={user.name.slice(0, 15)}
              src={user.image}
              width="40"
              height="40"
              className="w-full h-full object-cover"
            />
          ) : (
            <UserDemoImg
              name={user.name ?? "U"}
              size="w-full h-full text-6xl"
            />
          )}
        </div>
      </div>
      <p className="mt-4 font-title text-xl font-medium">{user.name}</p>
      <p className="text-sm text-muted">{user.email}</p>
      <span className="badge badge-soft badge-primary mt-3">{user.role}</span>
      <p className="mt-5 border-t border-base-300 pt-5 text-xs/5 text-muted">
        Email and role can't be changed here. Contact an admin if either needs
        updating.
      </p>
    </aside>
  );
}

export default ProfileAside;
