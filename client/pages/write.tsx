import MainLayout from '@/layouts/MainLayout';
import {
  Box,
  Button,
  InputBase,
  Paper,
  Stack,
  TextareaAutosize,
} from '@mui/material';
import dynamic from 'next/dynamic';

// const Editor = dynamic(
//   () => import('../components/Editor').then((m) => m.Editor),
//   {
//     ssr: false,
//   }
// );

const WritePage = () => {
  return (
    <MainLayout hideMenu hideComments contentFullWidth>
      <Stack>
        <Paper
          sx={{
            backgroundColor: 'white',
            p: '50px',
            borderRadius: '0px',
            height: 'calc(100vh - 200px)',
          }}
        >
          <InputBase
            placeholder="Заголовок"
            sx={{ fontSize: '40px', pl: '18px' }}
          />
          <TextareaAutosize
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
              backgroundColor: 'white',
              color: 'inherit',
              padding: '20px',
              borderRadius: '10px',
            }}
          />

          {/* <Editor /> */}
        </Paper>
        <Box>
          <Button variant="contained" sx={{ mt: '20px' }}>
            Добавить
          </Button>
        </Box>
      </Stack>
    </MainLayout>
  );
};

export default WritePage;
