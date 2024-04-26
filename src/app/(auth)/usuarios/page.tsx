import { Box } from "@chakra-ui/react";

import getUsers from "@/app/services/users/getAllUsers";
import UsersTable from "./usersTable";

export default async function UsersPage() {
  const { users } = await getUsers();

  return (
    <Box>
      <UsersTable users={users} />
    </Box>
  );
}
