import { Box, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import AddCommentForm from './AddCommentForm';
import PostComment from './PostComment';

type Comment = {
  text: string;
  id: number;
  createdAt: string;
  user: {
    fullname: string;
    avararUrl: string;
  };
};

interface PostCommentProps {
  items: Comment[];
}

const PostComments: React.FC<PostCommentProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Paper sx={{ mt: '40px', p: '30px' }}>
      <Box sx={{ maxWidth: '680px', m: '0 auto' }}>
        <Typography variant="h6" mb="20px">
          42 Комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{ mt: '20px' }}
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Box
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
            width: '100%',
            my: '20px',
          }}
        />
        <AddCommentForm />
        <Stack sx={{ m: '0 auto' }}>
          {items.map((obj, i) => (
            <PostComment
              key={i}
              user={obj.user}
              text={obj.text}
              createdAt={obj.createdAt}
            />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default PostComments;
