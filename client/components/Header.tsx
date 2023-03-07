import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from 'next/image';
import { AccountCircleOutlined, SearchOutlined } from '@mui/icons-material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Link from 'next/link';
import AuthDialog from './AuthDialog';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectUserData } from '@/redux/slices/user';
import { Api } from '@/utils/api';

const Header = () => {
  const [open, setOpen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  const [searchValue, setSearchValue] = useState('');
  const [searchResponse, setSearchResponse] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (searchValue) {
          const arr = await Api().post.searchPost(searchValue);
          setSearchResponse(arr);
        }
        return;
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [searchValue]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <AppBar position="sticky" color="secondary" sx={{ boxShadow: 'none' }}>
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
              <input
                placeholder="Поиск"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="input"
              />
              <SearchOutlined
                sx={{
                  color: 'text.secondary',
                  position: 'absolute',
                  top: '9px',
                  bottom: 0,
                  left: '30px',
                }}
              />
              {searchResponse && searchValue && (
                <Paper
                  sx={{
                    borderTop: 'none',
                    position: 'absolute',
                    top: '53px',
                    left: '10px',
                    width: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: '0 0 10px 10px',
                  }}
                >
                  {searchResponse.map((el: any) => {
                    return (
                      <Link href={`/news/${el.id}`}>
                        <ListItemButton>
                          <Typography sx={{ mb: '10px', fontWeight: 'bold' }}>
                            {el?.title}
                          </Typography>
                        </ListItemButton>
                      </Link>
                    );
                  })}
                </Paper>
              )}
            </Box>
            <Link href={'/write'}>
              <Button variant="contained" color="secondary" sx={{ ml: '20px' }}>
                Новая запись
              </Button>
            </Link>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            {isAuth ? (
              <>
                <IconButton sx={{ mr: '10px' }}>
                  <SmsOutlinedIcon />
                </IconButton>
                <IconButton sx={{ mr: '10px' }}>
                  <NotificationsOutlinedIcon />
                </IconButton>
                <Link href={`/profile/${userData.id}`}>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403" />
                  </IconButton>
                </Link>
              </>
            ) : (
              <Button
                startIcon={<AccountCircleOutlined fontSize="large" />}
                onClick={handleClickOpen}
                sx={{ color: 'text.primary', '&:hover': { color: 'orange' } }}
              >
                Войти
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <AuthDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Header;
