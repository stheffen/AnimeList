import React from "react";
import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign in";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionUrl}
        className="bg-color-dark text-color-accent py-1 px-12"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
// tugas disesi ke 8 ,buat validasi agar tidak dapat masuk dashboard ketika tidak login
