"use client";

import { DeleteIcon, EditIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { User } from "@/app/services/users/types";

export default function UsersTable({ users }: Readonly<{ users: User[] }>) {
  const { push } = useRouter();

  function tableData() {
    return users.map(({ id, username, email, created_at, is_active }) => (
      <Tr key={id}>
        <Td>
          <Link
            color='blue.500'
            as={NextLink}
            href={`/usuarios/${id}/visualizar`}
          >
            {username}
          </Link>
        </Td>
        <Td display={{ base: "none", md: "table-cell" }}>{email}</Td>
        <Td display={{ base: "none", md: "table-cell" }}>
          {is_active ? (
            <Badge colorScheme='green'>Ativo</Badge>
          ) : (
            <Badge colorScheme='red'>Inativo</Badge>
          )}
        </Td>
        <Td>
          <ButtonGroup
            display={{ base: "flex", md: "block" }}
            flexDirection={{ base: "column", md: "row" }}
            spacing={{ base: 0, md: "0.5rem" }}
          >
            <IconButton
              aria-label='Acessos do Usuário'
              size='sm'
              colorScheme='blue'
              icon={<TimeIcon />}
              onClick={() => push(`/usuarios/${id}/acessos`)}
            />
            <IconButton
              aria-label='Editar Usuário'
              size='sm'
              colorScheme='yellow'
              icon={<EditIcon />}
              onClick={() => push(`/usuarios/${id}/editar`)}
            />
            <IconButton
              aria-label='Desativar Usuário'
              size='sm'
              colorScheme='red'
              icon={<DeleteIcon />}
            />
          </ButtonGroup>
        </Td>
      </Tr>
    ));
  }

  return (
    <Box>
      <Box display='flex' justifyContent='flex-end'>
        <Button
          margin='8px 0'
          colorScheme='green'
          onClick={() => push(`/usuarios/criar`)}
        >
          Novo usuário
        </Button>
      </Box>
      <Box margin='8px 0' border='1px' borderColor='gray.200' borderRadius='lg'>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Usuário</Th>
                <Th display={{ base: "none", md: "table-cell" }}>Email</Th>
                <Th display={{ base: "none", md: "table-cell" }}>Status</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>{tableData()}</Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
