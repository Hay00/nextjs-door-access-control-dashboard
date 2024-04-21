export interface UserFormProps{
  initialValues?: {
    username: string;
    email: string;
  };
  onSubmit: (values: any) => void;
}

export interface FieldProps {
  field: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  form: {
    errors: {
      [key: string]: string;
    };
    touched: {
      [key: string]: boolean;
    };
  };
  meta: {
    touched: boolean;
    error: string;
  };
}
