import { Box, Heading, Text } from "@chakra-ui/react";

import getUser from "@/app/services/users/getUser";

export default async function ViewUserPage({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const user = await getUser(id);

  return (
    <Box display='flex' border='1px' borderColor='gray.200' borderRadius='lg'>
      <Box p='4'>
        <Heading as='h2' size='lg'>
          {user.username}
        </Heading>
        <Text>
          <strong>Email:</strong> {user.email}
        </Text>
        <Text>
          <strong>Criado em:</strong>{" "}
          {new Date(user.created_at).toLocaleDateString("pt-BR")}
        </Text>
        <Text>
          <strong>Administrador:</strong> {user.is_admin ? "Sim" : "Não"}
        </Text>
        <Text>
          <strong>Ativo:</strong> {user.is_active ? "Sim" : "Não"}
        </Text>
      </Box>
    </Box>
  );
}
