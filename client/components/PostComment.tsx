import { Api } from '@/utils/api';
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
  id: number;
  text: string;
  createdat: string;
  user: any;
  setComments: any;
  userId: number;
  isAuth: boolean;
}

const PostComment: React.FC<PostCommentProps> = ({
  id,
  text,
  createdat,
  user,
  setComments,
  userId,
  isAuth,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    try {
      await Api().comment.remove(id);
      setComments((prev: any) => prev.filter((el: any) => el.id !== id));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Stack mb={'30px'} position="relative">
      <Stack direction={'row'} alignItems="center" mb="10px">
        <Avatar
          src={user.avararUrl}
          sx={{ mr: '10px', bgcolor: 'secondary.main', color: 'text.primary' }}
        >
          {user.fullName[0]}
        </Avatar>
        <Typography mr={'10px'}>{user.fullName}</Typography>
        <Typography color={'textSecondary'}>
          {new Date(createdat).toLocaleDateString('ru')}
        </Typography>
      </Stack>
      <Typography>{text}</Typography>
      <Stack direction={'row'} mt="10px">
        {isAuth && (
          <Button variant="text" sx={{ mr: '10px' }}>
            Ответить
          </Button>
        )}
        {userId == user.id && (
          <>
            <IconButton onClick={handleClick}>
              <MoreHorizOutlined />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Редактировать</MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleClickRemove();
                }}
              >
                Удалить
              </MenuItem>
            </Menu>
          </>
        )}
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
