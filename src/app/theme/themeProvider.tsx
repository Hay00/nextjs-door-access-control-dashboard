"use client";

import { ChakraProvider } from "@chakra-ui/react";

interface PageThemeProps {
  children: React.ReactNode;
}

const ChakraTheme = ({ children }: PageThemeProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraTheme;
