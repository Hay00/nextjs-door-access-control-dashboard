"use client";

import { Box, Button, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    setAuthToken(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth_token=")) ?? null
    );
  }, [authToken]);

  function logout() {
    document.cookie =
      "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    router.push("/login");
  }

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      bg='#0040ff'
      color='white'
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={"tighter"}>
          GCA
        </Heading>
      </Flex>

      <Stack
        direction='row'
        display='flex'
        // width={{ base: "full", md: "auto" }}
        alignItems='center'
        flexGrow={1}
        mt={0}
      >
        <Link as={NextLink} href='/usuarios'>
          Usuários
        </Link>
        <Link as={NextLink} href='/logs'>
          Logs
        </Link>
      </Stack>

      {authToken && (
        <Box>
          <Button onClick={() => logout()} variant='solid'>
            Logout
          </Button>
        </Box>
      )}
    </Flex>
  );
}
