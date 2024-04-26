import { Box } from "@chakra-ui/react";
import LoginForm from "./form";

export default function LoginPage() {
  return (
    <Box display='flex' justifyContent='center'>
      <Box
        width='100%'
        maxWidth='400px'
        border='1px'
        borderColor='gray.200'
        borderRadius='lg'
        margin='2rem'
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
