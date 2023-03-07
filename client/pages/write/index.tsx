import MainLayout from '@/layouts/MainLayout';
import {
  Box,
  Button,
  InputBase,
  Paper,
  Stack,
  TextareaAutosize,
} from '@mui/material';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Api } from '@/utils/api';
import { useRouter } from 'next/router';

const Editor = dynamic(
  () => import('../../components/Editor').then((m) => m.Editor),
  {
    ssr: false,
  }
);

const WritePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const [blocks, setBlocks] = useState([]);
  const router = useRouter();

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const post = await Api().post.create({ title, body: blocks });
      router.push(`/write/${post.id}`);
    } catch (error) {
      console.warn(error);
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

          <Editor onChange={(arr: any) => setBlocks(arr)} />
        </Paper>
        <Box>
          <Button
            disabled={isLoading || !blocks.length || !title}
            onClick={onAddPost}
            variant="contained"
            sx={{ mt: '20px' }}
          >
            Добавить
          </Button>
        </Box>
      </Stack>
    </MainLayout>
  );
};

export default WritePage;
