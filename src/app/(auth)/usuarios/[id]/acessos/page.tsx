import { Box } from "@chakra-ui/react";

import getAllAccesses from "@/app/services/accesses/getAllAccesses";

import AccessForm from "./form";

export default async function UserAccesses({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const { accesses } = await getAllAccesses(id);

  return (
    <Box display='flex' border='1px' borderColor='gray.200' borderRadius='lg'>
      <Box p='4'>
        <h1>Acessos do Usuário</h1>
        <Box>
          <AccessForm id={id} accesses={accesses} />
        </Box>
      </Box>
    </Box>
  );
}
