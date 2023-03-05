import { Box, Button, InputBase } from '@mui/material';
import React, { useState } from 'react';

const AddCommentForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');

  const onAddComment = () => {
    setIsActive(false);
    setText('');
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <InputBase
        onClick={() => setIsActive(true)}
        multiline
        minRows={isActive ? 3 : 1}
        fullWidth
        placeholder="Написать комментарий..."
        className={isActive ? 'input-active' : ''}
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          p: '12px 10px',
          border: '1px solid',
          borderColor: '#eee',
          borderRadius: '10px',
          mb: '30px',
          bgcolor: '#F9F8F9',
          color: 'black',
        }}
      />
      {isActive && (
        <Button
          onClick={onAddComment}
          variant="contained"
          sx={{ position: 'absolute', bottom: '40px', right: '10px' }}
        >
          Отправить
        </Button>
      )}
    </Box>
  );
};

export default AddCommentForm;
