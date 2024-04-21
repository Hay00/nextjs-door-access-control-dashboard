"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";

import UserFormSchema from "./schema";
import { FieldProps, UserFormProps } from "./types";

export default function UserForm({
  initialValues,
  onSubmit,
}: Readonly<UserFormProps>) {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        username: initialValues?.username ?? "",
        email: initialValues?.email ?? "",
        password: "",
      }}
      validationSchema={UserFormSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ isSubmitting }: FormikProps<any>) => (
        <Form>
          <Field name='username'>
            {({ field, form, meta }: FieldProps) => (
              <FormControl
                isInvalid={meta.touched && !!meta.error}
                margin='8px'
              >
                <FormLabel>Nome</FormLabel>
                <Input type='text' {...field} />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
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
          {/* Only show password field when no initial values are received */}
          {!initialValues && (
            <Field name='password'>
              {({ field, form, meta }: FieldProps) => (
                <FormControl
                  isInvalid={meta.touched && !!meta.error}
                  margin='8px'
                >
                  <FormLabel>Senha</FormLabel>
                  <Input type='password' {...field} />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          )}
          <Button
            margin='8px'
            type='submit'
            colorScheme='green'
            isLoading={isSubmitting}
          >
            Salvar
          </Button>
          <Button margin='8px' onClick={() => router.back()} colorScheme='red'>
            Cancelar
          </Button>
        </Form>
      )}
    </Formik>
  );
}
