"use client";

import { useRouter } from "next/navigation";

import UserForm from "@/app/components/UserForm";
import createUser from "@/app/services/users/createUser";
import { CreateUser } from "@/app/services/users/types";

export default function CreateForm() {
  const router = useRouter();

  function handleSubmit(user: CreateUser) {
    createUser(user)
      .catch((error) => {
        console.error(error);
        alert(error);
      })
      .finally(() => {
        router.push("/usuarios");
        router.refresh();
      });
  }

  return <UserForm onSubmit={handleSubmit} />;
}
