import EditForm from "./form";

import getUser from "@/app/services/users/getUser";

export default async function EditUser({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const user = await getUser(id);

  return <EditForm user={user} />;
}
