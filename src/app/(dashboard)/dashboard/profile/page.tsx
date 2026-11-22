import React from "react";
import ProfileForm from "@/components/layout/dashboard/ProfileForm";
import { getCurrentUser } from "@/lib/authActions";
import EmptyData from "@/components/ui/common/EmptyData";
import ProfileAside from "./_components/ProfileAside";

async function ProfilePage() {
  const cUser = await getCurrentUser();

  if (!cUser) {
    return <EmptyData message="No user found!" />;
  }

  const userData = {
    name: cUser.user.name,
    phone: cUser.user.phone,
    email: cUser.user.email,
    role: cUser.user.role,
    address: cUser.user.address,
    bio: cUser.user.bio,
    image: cUser.user.image,
  };

  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Update Profile</h1>
        <p className="mt-1 text-muted">
          Your name and photo update in the top bar as soon as you save. No need
          to sign out.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <ProfileAside user={userData} />
        <ProfileForm user={userData} />
      </div>
    </main>
  );
}

export default ProfilePage;
