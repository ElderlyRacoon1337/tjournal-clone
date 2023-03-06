import { ArrowBackIosOutlined } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegisterSchema } from '@/utils/validations';
import { CreateUserDto } from '@/utils/api/types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Api } from '@/utils/api';
import { setUserData } from '@/redux/slices/user';
import { setCookie } from 'nookies';

const RegisterForm = ({ setFormType, setOpen }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const [errorMessage, setErrorMessage] = useState<any>(null);
  const dispatch = useDispatch();

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await Api().user.register(dto);
      // @ts-ignore
      dispatch(setUserData(data));
      setOpen(false);
      setCookie(null, 'access_token', data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } catch (error: any) {
      console.warn('Authorization error');
      if (error) {
        console.log(error);
        setErrorMessage(error?.response?.data?.message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 10000);
      }
    }
  };

  return (
    <>
      <Stack
        onClick={() => setFormType('main')}
        direction={'row'}
        alignItems={'center'}
        sx={{ mb: '20px', cursor: 'pointer' }}
      >
        <ArrowBackIosOutlined sx={{ fontSize: '14px', mr: '10px' }} />
        <Typography
          variant="h6"
          alignSelf={'start'}
          fontSize="14px"
          fontWeight={'500'}
        >
          К авторизации
        </Typography>
      </Stack>
      <Typography variant="h6" alignSelf={'start'} fontWeight={'500'}>
        Регистрация через почту
      </Typography>
      <Typography mb="25px" alignSelf={'start'} fontSize={'14px'}>
        или
        <Link
          onClick={() => setFormType('login')}
          sx={{ textDecoration: 'none', cursor: 'pointer', ml: '5px' }}
        >
          войти в аккаунт
        </Link>
      </Typography>
      <Stack sx={{ width: '100%' }}>
        {/* @ts-ignore */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('fullName')}
            fullWidth
            helperText={errors.fullName?.message?.toString()}
            error={errors.fullName?.toString() ? true : false}
            autoFocus
            variant="outlined"
            size="small"
            label="Имя и фамилия"
            sx={{ mb: '20px' }}
          />
          <TextField
            {...register('email')}
            fullWidth
            helperText={errors.email?.message?.toString()}
            error={errors.email?.toString() ? true : false}
            variant="outlined"
            size="small"
            label="Почта"
            type={'email'}
            sx={{ mb: '20px' }}
          />
          <TextField
            {...register('password')}
            fullWidth
            helperText={errors.password?.message?.toString()}
            error={errors.password?.toString() ? true : false}
            variant="outlined"
            size="small"
            label="Пароль"
            type={'password'}
            sx={{ mb: '20px' }}
          />
          {errorMessage ? (
            <Alert severity="error" sx={{ mt: '0px', mb: '20px' }}>
              {errorMessage}
            </Alert>
          ) : (
            ''
          )}
          <Box>
            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
          </Box>
        </form>
      </Stack>
      <Box
        sx={{
          p: '10px',
          borderTop: '1px solid',
          borderColor: 'divider',
          mt: '30px',
        }}
      >
        <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
          Регистрируясь, вы соглашаетесь с правилами пользования сайтом и даете
          согласие на обработку персональных данных
        </Typography>
      </Box>
      <Stack />
    </>
  );
};

export default RegisterForm;
