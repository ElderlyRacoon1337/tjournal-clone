import EditorJS from '@editorjs/editorjs';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useRef } from 'react';

export const Editor = ({ onChange }: any) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        async onChange() {
          const { blocks } = await editor.save();
          onChange(blocks);
        },
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Box id="editorjs" />
    </>
  );
};
