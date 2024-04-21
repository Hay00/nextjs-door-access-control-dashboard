"use client";

import { useRouter } from "next/navigation";

import { EditUser, User } from "@/app/services/users/types";
import updateUser from "@/app/services/users/updateUser";

import UserForm from "@/app/components/UserForm";

export default function EditForm({ user }: Readonly<{ user: User }>) {
  const { id } = user;
  const router = useRouter();

  function handleSubmit(user: EditUser) {
    updateUser({ id, user })
      .catch((error) => {
        console.error(error);
        alert(error);
      })
      .finally(() => {
        router.push("/usuarios");
        router.refresh();
      });
  }

  return <UserForm initialValues={user} onSubmit={handleSubmit} />;
}
