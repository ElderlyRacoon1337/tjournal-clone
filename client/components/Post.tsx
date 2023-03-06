import { Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Link from 'next/link';

interface PostProps {
  id: number;
  title: string;
  descriprion: string;
  imageUrl?: string;
}

const Post: React.FC<PostProps> = ({ id, title, descriprion, imageUrl }) => {
  return (
    <Stack mb={'30px'} maxWidth={'600px'}>
      <Link href={`/news/${id}`}>
        <Paper
          sx={{
            p: '20px',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h6" mb={'10px'}>
            {title}
          </Typography>
          <Typography
            mb={'10px'}
            variant="body2"
            sx={{ color: 'text.secondary !important' }}
          >
            {descriprion}
          </Typography>
          {imageUrl && <img src={imageUrl} style={{ width: '100%' }} />}
          <Stack direction={'row'} justifyContent="space-between" mt={'10px'}>
            <IconButton>
              <ModeCommentOutlinedIcon />
            </IconButton>
            <IconButton>
              <RepeatOutlinedIcon />
            </IconButton>
            <IconButton>
              <BookmarkBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShareOutlinedIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Link>
    </Stack>
  );
};

export default Post;
