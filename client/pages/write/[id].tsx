import MainLayout from '@/layouts/MainLayout';
import {
  Box,
  Button,
  InputBase,
  Paper,
  Stack,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Api } from '@/utils/api';
import { GetServerSideProps, NextPage } from 'next';
import { PostItem } from '@/utils/api/types';

const Editor = dynamic(
  () => import('../../components/Editor').then((m) => m.Editor),
  {
    ssr: false,
  }
);

interface EditPostProps {
  post: PostItem;
}

const EditPost: NextPage<EditPostProps> = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(post.title);
  // const [body, setBody] = useState('');
  const [blocks, setBlocks] = useState(post.body);

  const onUpdatePost = () => {
    try {
      setIsLoading(true);
      Api().post.updatePost(post.id, { title, body: blocks });
      alert('success');
    } catch (error) {
      console.warn(error);
      alert('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout hideMenu hideComments contentFullWidth>
      <Stack>
        <Paper
          sx={{
            backgroundColor: 'background',
            p: '50px',
            borderRadius: '0px',
            height: 'calc(100vh - 200px)',
          }}
        >
          <InputBase
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="Заголовок"
            sx={{ fontSize: '40px', pl: '18px' }}
          />
          {/* <TextareaAutosize
            placeholder="Введите текст вашей статьи..."
            maxRows={15}
            style={{
              border: 'none',
              width: '100%',
              outline: 'none',
              resize: 'none',
              fontSize: 20,
              fontFamily: 'inherit',
              marginTop: '10px',
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '20px',
              borderRadius: '10px',
            }}
          /> */}

          <Editor value={post.body} onChange={(arr: any) => setBlocks(arr)} />
        </Paper>
        <Box>
          <Button
            disabled={isLoading || !blocks.length || !title}
            onClick={onUpdatePost}
            variant="contained"
            sx={{ mt: '20px' }}
          >
            Сохранить изменения
          </Button>
        </Box>
      </Stack>
    </MainLayout>
  );
};

export default EditPost;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    // @ts-ignore
    const id: string = ctx.params.id;
    const post = await Api(ctx).post.getOne(id);
    const user = await Api(ctx).user.getMe();
    if (post.user.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
