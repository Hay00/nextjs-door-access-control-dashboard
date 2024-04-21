// Header component
"use client";

import React from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
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

      <Box
      // display={{ base: isOpen ? "block" : "none" }}
      // mt={{ base: 4, md: 0 }}
      >
        <Button
          variant='solid'

          // _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
