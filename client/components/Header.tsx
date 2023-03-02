import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
} from '@mui/material';
import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from 'next/image';
import { SearchOutlined } from '@mui/icons-material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar color="secondary" position="static" sx={{ boxShadow: 'none' }}>
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
          <InputBase
            startAdornment={
              <SearchOutlined sx={{ mx: '10px', color: 'text.secondary' }} />
            }
            placeholder="Поиск"
            sx={{
              bgcolor: 'rgba(0,0,0,0.05)',
              ml: '20px',
              borderRadius: '10px',
              minWidth: '300px',
              height: '42px',
              '&:hover': { bgcolor: 'white' },
            }}
          />
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
