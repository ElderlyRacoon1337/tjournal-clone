import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import { Apple, FacebookOutlined, Twitter } from '@mui/icons-material';

const MainForm = ({ setFormType }: any) => {
  return (
    <>
      <Typography variant="h6" alignSelf={'start'} mb="15px" fontWeight={'500'}>
        Вход в TJ
      </Typography>

      <Stack sx={{ width: '100%' }}>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mb: '20px', mt: '10px', position: 'relaive' }}
        >
          <img
            style={{
              maxWidth: '30px',
              position: 'absolute',
              left: '10px',
            }}
            src="https://img.icons8.com/color/512/vk-com.png"
          />
          Вконтакте
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mb: '20px', position: 'relative' }}
        >
          <img
            style={{
              maxWidth: '30px',
              position: 'absolute',
              left: '10px',
            }}
            src="https://img.icons8.com/color/512/google-logo.png"
          />
          Google
        </Button>
        <Button
          onClick={() => setFormType('login')}
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mb: '10px' }}
        >
          <LocalPostOfficeOutlinedIcon
            sx={{
              fontSize: '26px',
              position: 'absolute',
              left: '13px',
            }}
          />
          Через почту
        </Button>
      </Stack>
      <Stack
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
        sx={{ width: '100%' }}
      >
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mb: '20px', mt: '10px', maxWidth: '100px', py: '7px' }}
        >
          <FacebookOutlined sx={{ fontSize: '26px', color: '#1873EB' }} />
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mb: '20px', mt: '10px', maxWidth: '100px', py: '7px' }}
        >
          <Twitter sx={{ fontSize: '26px', color: '#1EA1F1' }} />
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mb: '20px', mt: '10px', maxWidth: '100px', py: '7px' }}
        >
          <Apple sx={{ fontSize: '26px' }} />
        </Button>
      </Stack>
    </>
  );
};

export default MainForm;
