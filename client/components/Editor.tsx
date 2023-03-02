import EditorJS from '@editorjs/editorjs';
import { Box } from '@mui/material';
import { useEffect } from 'react';

export const Editor = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
    });
  }, []);
  return <Box id="editorjs"></Box>;
};
