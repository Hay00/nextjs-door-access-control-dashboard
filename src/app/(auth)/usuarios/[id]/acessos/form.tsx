"use client";

import { useRouter } from "next/navigation";

import AccessesForm from "@/app/components/AccessesForm";
import { InitialValues } from "@/app/components/AccessesForm/types";

import createAccess from "@/app/services/accesses/createAccess";
import deleteAccess from "@/app/services/accesses/deleteAccess";
import { Access, CreateAccess } from "@/app/services/accesses/types";
import updateAccess from "@/app/services/accesses/updateAccess";

export default function AccessForm({
  id,
  accesses,
}: Readonly<{ id: string; accesses: Access[] }>) {
  const router = useRouter();

  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  function isEmpty(value: string) {
    return value === "";
  }

  function toAdd(accesses: Access[], formValues: CreateAccess[]) {
    return formValues.filter(
      (form) =>
        !isEmpty(form.start) &&
        !isEmpty(form.end) &&
        !accesses.some((current) => current.day_of_week === form.day_of_week)
    );
  }

  function toUpdate(accesses: Access[], formValues: CreateAccess[]) {
    return formValues.filter(
      (form) =>
        !isEmpty(form.start) &&
        !isEmpty(form.end) &&
        accesses.some(
          (current) =>
            current.day_of_week === form.day_of_week &&
            (current.start !== form.start || current.end !== form.end)
        )
    );
  }

  function toDelete(accesses: Access[], formValues: CreateAccess[]) {
    return formValues.filter(
      (form) =>
        isEmpty(form.start) &&
        isEmpty(form.end) &&
        accesses.some((current) => current.day_of_week === form.day_of_week)
    );
  }

  function handleSubmit(values: InitialValues) {
    const valuesToList = Object.entries(values).map(([day, { start, end }]) => {
      const dayOfWeek = daysOfWeek.indexOf(day);
      return { day_of_week: dayOfWeek + 1, start, end };
    });

    const accessesToAdd = toAdd(accesses, valuesToList);
    const accessesToUpdate = toUpdate(accesses, valuesToList);
    const accessesToDelete = toDelete(accesses, valuesToList);

    accessesToAdd.forEach((access) => createAccess(id, access));

    accessesToUpdate.forEach(({ day_of_week, start, end }) =>
      updateAccess(id, day_of_week, { start, end })
    );

    accessesToDelete.forEach(({ day_of_week }) =>
      deleteAccess(id, day_of_week)
    );

    router.push("/usuarios");
    router.refresh();
  }

  return <AccessesForm accesses={accesses} onSubmit={handleSubmit} />;
}
