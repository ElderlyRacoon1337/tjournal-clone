import { MoreHorizOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface PostCommentProps {
  text: string;
  createdAt: string;
  user: {
    fullname: string;
    avararUrl: string;
  };
}

const PostComment: React.FC<PostCommentProps> = ({ text, createdAt, user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack mb={'30px'} position="relative">
      <Stack direction={'row'} alignItems="center" mb="10px">
        <Avatar src={user.avararUrl} sx={{ mr: '10px' }} />
        <Typography mr={'10px'}>{user.fullname}</Typography>
        <Typography color={'textSecondary'}>{createdAt}</Typography>
      </Stack>
      <Typography>{text}</Typography>
      <Stack direction={'row'} mt="10px">
        <Button variant="text" sx={{ mr: '10px' }}>
          Ответить
        </Button>
        <IconButton onClick={handleClick}>
          <MoreHorizOutlined />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          <MenuItem onClick={handleClose}>Удалить</MenuItem>
        </Menu>
      </Stack>

      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          width: '100%',
          my: '20px',
        }}
      />
    </Stack>
  );
};

export default PostComment;
