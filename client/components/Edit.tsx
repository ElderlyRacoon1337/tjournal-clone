import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const Edit = () => {
  return (
    <Paper sx={{ p: '20px' }}>
      <Typography fontWeight={'bold'}>Основные настройки</Typography>
      <Box sx={{ borderBottom: '1px solid #eee', width: '100%', my: '20px' }} />
      <TextField
        fullWidth
        size="small"
        placeholder="Никнейм *"
        sx={{ mb: '10px' }}
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Электронная почта *"
        sx={{ mb: '10px' }}
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Пароль *"
        sx={{ mb: '10px' }}
      />
      <Box sx={{ borderBottom: '1px solid #eee', width: '100%', my: '20px' }} />
      <Button variant="contained">Сохранить изменения</Button>
    </Paper>
  );
};

export default Edit;
