import { ArrowBackIosOutlined } from '@mui/icons-material';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/utils/validations';

const LoginForm = ({ setFormType }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

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
        Войти через почту
      </Typography>
      <Typography mb="25px" alignSelf={'start'} fontSize={'14px'}>
        или
        <Link
          onClick={() => setFormType('register')}
          sx={{ textDecoration: 'none', cursor: 'pointer', ml: '5px' }}
        >
          зарегистрироваться
        </Link>
      </Typography>
      <Stack sx={{ width: '100%' }}>
        <form onSubmit={handleSubmit(() => console.log('e'))}>
          <TextField
            {...register('email')}
            fullWidth
            helperText={errors.email?.message?.toString()}
            error={errors.email?.toString() ? true : false}
            autoFocus
            type="email"
            variant="outlined"
            size="small"
            label="Почта"
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
          <Stack
            direction={'row'}
            justifyContent="space-between"
            alignItems={'center'}
          >
            <Button disabled={!isValid} type="submit" variant="contained">
              Войти
            </Button>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'text.secondary',
                borderBottom: '1px solid',
                borderColor: 'text.secondary',
                cursor: 'pointer',
              }}
            >
              Я забыл пароль
            </Typography>
          </Stack>
        </form>
        <Box
          sx={{
            p: '10px',
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: '30px',
          }}
        >
          <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
            Авторизуясь, вы соглашаетесь с правилами пользования сайтом и даете
            согласие на обработку персональных данных
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default LoginForm;
