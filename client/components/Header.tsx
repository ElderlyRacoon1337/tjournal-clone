import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from 'next/image';
import { SearchOutlined } from '@mui/icons-material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
        <Toolbar
          variant="dense"
          sx={{ py: '10px', justifyContent: 'space-between' }}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <IconButton sx={{ mr: '10px' }}>
              <MenuOutlinedIcon />
            </IconButton>
            <Link href={'/'}>
              <Image src="/img/logo.png" width={40} height={40} alt="logo" />
            </Link>
            <Box sx={{ position: 'relative' }}>
              <input placeholder="Поиск" className="input" />
              <SearchOutlined
                sx={{
                  color: 'text.secondary',
                  position: 'absolute',
                  top: '9px',
                  bottom: 0,
                  left: '30px',
                }}
              />
            </Box>
            <Link href={'/write'}>
              <Button variant="contained" color="inherit" sx={{ ml: '20px' }}>
                Новая запись
              </Button>
            </Link>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <IconButton sx={{ mr: '10px' }}>
              <SmsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ mr: '10px' }}>
              <NotificationsOutlinedIcon />
            </IconButton>
            <Link href={'/profile/me'}>
              <IconButton sx={{ p: 0 }}>
                <Avatar src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403" />
              </IconButton>
            </Link>
            <Button variant="contained" onClick={handleClickOpen}>
              Войти
            </Button>
            <Dialog
              open={open}
              transitionDuration={0}
              fullWidth
              maxWidth="xs"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '& .MuiPaper-root': {
                  borderRadius: '3px',
                  bgcolor: 'background',
                  backgroundImage: 'none',
                },
              }}
              onClose={handleClose}
            >
              <Stack
                alignItems={'center'}
                maxWidth={'500px'}
                sx={{ p: 2, pt: 3, px: 1, pb: 0.5, borderRadius: 20 }}
              >
                {/* {isSignUp ? (
                  <> */}
                <DialogTitle fontWeight={'bold'}>Вход в TJ</DialogTitle>

                <DialogContent>
                  <Button
                    fullWidth
                    variant="contained"
                    color="inherit"
                    sx={{ mb: '15px' }}
                  >
                    <img
                      style={{ maxWidth: '30px' }}
                      src="https://img.icons8.com/color/512/vk-com.png"
                    />
                    Вконтакте
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="inherit"
                    sx={{ mb: '15px' }}
                  >
                    <img
                      style={{ maxWidth: '30px' }}
                      src="https://img.icons8.com/color/512/google-logo.png"
                    />
                    Google
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="inherit"
                    sx={{ mb: '15px' }}
                  >
                    Через почту
                  </Button>
                </DialogContent>
                {/* </>
                ) : (
                  <>
                    <DialogTitle fontWeight={'bold'}>
                      Войти в Твиттер
                    </DialogTitle>
                    <DialogContent>
                      <LoginForm />
                    </DialogContent>
                  </>
                )} */}
              </Stack>
            </Dialog>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
