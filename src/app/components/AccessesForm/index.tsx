import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";

import { useRouter } from "next/navigation";
import AccessesFormSchema from "./schema";
import { AccessesFormProps, InitialValues } from "./types";

export default function AccessesForm({
  accesses,
  onSubmit,
}: Readonly<AccessesFormProps>) {
  const router = useRouter();

  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // Map the accesses to the correct day of the week, on server days start at 1 on Sunday
  const currentAccesses = accesses.reduce(
    (obj, key) => ({
      ...obj,
      [daysOfWeek[key.day_of_week - 1]]: { start: key.start, end: key.end },
    }),
    {}
  );

  const initialValues: InitialValues = {
    sunday: { start: "", end: "" },
    monday: { start: "", end: "" },
    tuesday: { start: "", end: "" },
    wednesday: { start: "", end: "" },
    thursday: { start: "", end: "" },
    friday: { start: "", end: "" },
    saturday: { start: "", end: "" },
    ...currentAccesses,
  };

  function hoursInput({ field, form, meta }: FieldProps) {
    return (
      <FormControl
        isInvalid={meta.touched && !!meta.error}
        margin='8px'
        minHeight='50px'
      >
        <Input
          type='text'
          maxLength={8}
          pattern='^((\d+:)?\d+:)?\d*$'
          maxWidth='110px'
          {...field}
        />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AccessesFormSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ isSubmitting }: FormikProps<any>) => (
        <Form>
          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Domingo
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='sunday.start'>{hoursInput}</Field>
              <Field name='sunday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Segunda
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='monday.start'>{hoursInput}</Field>
              <Field name='monday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Terça
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='tuesday.start'>{hoursInput}</Field>
              <Field name='tuesday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Quarta
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='wednesday.start'>{hoursInput}</Field>
              <Field name='wednesday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Quinta
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='thursday.start'>{hoursInput}</Field>
              <Field name='thursday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Sexta
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='friday.start'>{hoursInput}</Field>
              <Field name='friday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Heading as='h3' size='md'>
              Sábado
            </Heading>
            <Box display='flex' flexDirection='row'>
              <Field name='saturday.start'>{hoursInput}</Field>
              <Field name='saturday.end'>{hoursInput}</Field>
            </Box>
          </Box>

          <ButtonGroup>
            <Button
              margin='8px'
              type='submit'
              colorScheme='green'
              isLoading={isSubmitting}
            >
              Salvar
            </Button>
            <Button
              margin='8px'
              onClick={() => router.back()}
              colorScheme='red'
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  );
}
