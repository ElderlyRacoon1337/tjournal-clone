import { ArrowBackIosOutlined } from '@mui/icons-material';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegisterSchema } from '@/utils/validations';

const RegisterForm = ({ setFormType }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
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
        <form onSubmit={handleSubmit(() => console.log('e'))}>
          <TextField
            {...register('fullname')}
            fullWidth
            helperText={errors.fullname?.message?.toString()}
            error={errors.fullname?.toString() ? true : false}
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
          <Box>
            <Button disabled={!isValid} type="submit" variant="contained">
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
