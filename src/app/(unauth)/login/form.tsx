"use client";

import login from "@/app/services/auth/login";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  async function handleSubmit({ email, password }: any) {
    login(email, password)
      .then((response) => {
        router.push("/usuarios");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ isSubmitting }: FormikProps<any>) => (
        <Form style={{ padding: "12px", paddingRight: "28px" }}>
          <Field name='email'>
            {({ field, form, meta }: FieldProps) => (
              <FormControl
                isInvalid={meta.touched && !!meta.error}
                margin='8px'
              >
                <FormLabel>Email</FormLabel>
                <Input type='email' {...field} />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='password'>
            {({ field, form, meta }: FieldProps) => (
              <FormControl
                isInvalid={meta.touched && !!meta.error}
                margin='8px'
              >
                <FormLabel>Password</FormLabel>
                <Input type='password' {...field} />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Box margin='16px 8px' width='100%'>
            <Button
              width='100%'
              colorScheme='green'
              type='submit'
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
