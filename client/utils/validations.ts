import * as yup from 'yup';

export const LoginSchema = yup.object({
  email: yup.string().email('Неверный формат почты').required('Введите почту'),
  password: yup
    .string()
    .min(8, 'Минимальная длина пароля 8 символов')
    .required('Введите пароль'),
});

export const RegisterSchema = yup
  .object({
    fullName: yup.string().required('Введите имя и фамилию'),
  })
  .concat(LoginSchema);
