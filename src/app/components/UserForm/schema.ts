import * as Yup from "yup";

const UserFormSchema = Yup.object().shape({
  username: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  password: Yup.string().min(8, "Mínimo de 6 caracteres"),
});

export default UserFormSchema;
