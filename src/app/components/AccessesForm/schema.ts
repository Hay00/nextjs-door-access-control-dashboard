import * as Yup from "yup";

const TIME_REGEX = /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/;

const hourSchema = Yup.string().matches(TIME_REGEX, "Hora inválida");

const AccessesFormSchema = Yup.object().shape({
  sunday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
  monday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
  tuesday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
  wednesday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
  thursday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
  friday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
  saturday: Yup.object().shape({
    start: hourSchema,
    end: hourSchema,
  }),
});

export default AccessesFormSchema;
