import EditorJS from '@editorjs/editorjs';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useRef } from 'react';

export const Editor = ({ onChange, value }: any) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        placeholder: 'Введите текст статьи',
        async onChange() {
          const { blocks } = await editor.save();
          onChange(blocks);
        },
        data: {
          blocks: value,
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
