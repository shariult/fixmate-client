"use client";

import React, { ChangeEvent, ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { AuthUser } from "@/lib/authClient";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import { updateUserRoleAction } from "@/lib/user/userActions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type UsersTableProps = {
  users: (AuthUser & { _id: string })[];
  usersCount: { customer: number; technician: number; admin: number };
  currentUser: AuthUser;
  className?: string;
} & ComponentPropsWithoutRef<"table">;

function UsersTable(props: UsersTableProps) {
  const { users, usersCount, currentUser, className, ...rest } = props;
  const router = useRouter();

  async function changeUserRoleHandler(
    e: ChangeEvent<HTMLSelectElement>,
    uId: string,
  ) {
    const resData = await updateUserRoleAction(uId, e.target.value);
    if (!resData.isSuccess) {
      toast.error("Updating user role failed!");
      return;
    }

    toast.success("User role updated!");
    router.refresh();
  }

  return (
    <table className={`table ${className}`} {...rest}>
      <thead>
        <tr className="text-muted">
          <th>User</th>
          <th>Email</th>
          <th>Role</th>
          <th>Joined</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => {
          return (
            <tr key={item.email}>
              <td>
                <div className="flex items-center gap-3">
                  {item.image ? (
                    <Image
                      alt={item.name.slice(0, 15)}
                      src={item.image}
                      width="40"
                      height="40"
                    />
                  ) : (
                    <UserDemoImg name={item.name ?? "U"} />
                  )}
                  <p className="font-medium">
                    {item.name}
                    {item.email === currentUser.email && (
                      <span className="badge badge-sm badge-outline ml-1">
                        You
                      </span>
                    )}
                  </p>
                </div>
              </td>
              <td className="text-muted">{item.email}</td>
              <td>
                <select
                  className="select select-sm w-36"
                  defaultValue={item.role}
                  onChange={(e) => changeUserRoleHandler(e, item._id)}
                  disabled={item.email === currentUser.email}
                >
                  <option value="customer">Customer</option>
                  <option value="technician">Technician</option>
                  <option value="admin">Admin</option>
                </select>
                {item.email === currentUser.email && (
                  <p className="mt-1 text-xs text-muted">
                    You can't change your own role
                  </p>
                )}
              </td>
              <td className="whitespace-nowrap">
                {new Date(item.createdAt).toDateString()}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UsersTable;
