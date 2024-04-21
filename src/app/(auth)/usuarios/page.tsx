import { Box } from "@chakra-ui/react";

import getUsers from "@/app/services/users/getAllUsers";
import UsersTable from "./usersTable";

const UsersPage = async () => {
  const { users } = await getUsers();

  return (
    <Box >
      <UsersTable users={users} />
    </Box>
  );
};

export default UsersPage;
