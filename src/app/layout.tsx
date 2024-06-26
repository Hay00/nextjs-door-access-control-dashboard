import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import ChakraTheme from "./theme/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <ChakraTheme>
          <Grid
            templateAreas={`
              "header header"
              "nav bread"
              "nav main"
              `}
            gap={4}
          >
            <GridItem area='header'>
              <Header />
            </GridItem>
            <GridItem
              padding={{ base: 0, md: 4 }}
              colSpan={2}
              area='main'
              display={"flex"}
              justifyContent='center'
            >
              <Box width='100%' maxW='1200px'>
                {children}
              </Box>
            </GridItem>
          </Grid>
        </ChakraTheme>
      </body>
    </html>
  );
}
