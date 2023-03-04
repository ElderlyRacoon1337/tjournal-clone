import { ArrowBackIosOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import LoginForm from './forms/LoginForm';
import MainForm from './forms/MainForm';
import RegisterForm from './forms/RegisterForm';

interface AuthDialogProps {
  open: boolean;
  setOpen: any;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, setOpen }) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>(
    'main'
  );
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      transitionDuration={0.2}
      fullWidth
      maxWidth="xs"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '& .MuiPaper-root': {
          borderRadius: '10x',
          bgcolor: 'background',
          backgroundImage: 'none',
        },
      }}
      onClose={handleClose}
    >
      <Stack
        alignItems={'flex-start'}
        maxWidth={'500px'}
        sx={{ px: 5, py: 3, borderRadius: 20 }}
      >
        {formType == 'main' && <MainForm setFormType={setFormType} />}
        {formType == 'login' && <LoginForm setFormType={setFormType} />}
        {formType == 'register' && <RegisterForm setFormType={setFormType} />}
      </Stack>
    </Dialog>
  );
};

export default AuthDialog;
