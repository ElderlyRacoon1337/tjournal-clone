import { Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Link from 'next/link';

const Post = () => {
  return (
    <Stack mb={'30px'} maxWidth={'600px'}>
      <Link href={'/news/123'}>
        <Paper
          sx={{
            p: '20px',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h6" mb={'10px'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sapiente odit quisquam minima provident fugit soluta odio natus qui
          </Typography>
          <Typography
            mb={'10px'}
            variant="body2"
            sx={{ color: 'text.secondary !important' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            ipsum veniam enim voluptas facere, nostrum quos, iste ratione
            possimus explicabo laudantium fugit. Officiis esse ex nulla id
            velit, eaque tenetur.
          </Typography>
          <img
            src="https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1"
            style={{ width: '100%' }}
          />
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
