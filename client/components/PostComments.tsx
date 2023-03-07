import { selectIsAuth, selectUserData } from '@/redux/slices/user';
import { Api } from '@/utils/api';
import { CommentItem } from '@/utils/api/types';
import { Box, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddCommentForm from './AddCommentForm';
import PostComment from './PostComment';

type Comment = {
  text: string;
  id: number;
  createdat: string;
  user: {
    fullname: string;
    avararUrl: string;
  };
};

interface PostCommentProps {
  postId: number;
}

const PostComments: React.FC<PostCommentProps> = ({ postId }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector(selectUserData);
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId);
        setComments(arr);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return (
    <Paper sx={{ mt: '40px', p: '30px' }}>
      <Box sx={{ maxWidth: '680px', m: '0 auto' }}>
        <Typography variant="h6" mb="20px">
          {comments.length} комментариев
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
        {isAuth && <AddCommentForm setComments={setComments} postId={postId} />}
        <Stack sx={{ m: '0 auto' }}>
          {comments.map((obj: CommentItem, i: number) => (
            <PostComment
              key={i}
              setComments={setComments}
              userId={userData?.id}
              id={obj.id}
              user={obj.user}
              text={obj.text}
              createdat={obj.createdatt}
              isAuth={isAuth}
            />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default PostComments;
