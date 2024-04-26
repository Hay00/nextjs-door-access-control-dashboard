import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export default function LoadingPage() {
  return (
    <Box display='flex' justifyContent='center' margin="10rem 0px">
      <Spinner size='xl' />
    </Box>
  );
}
