import { Api } from '@/utils/api';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SideComments = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll();
        setComments(arr);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Box maxWidth={'300px'} ml="10px">
      <Stack
        direction={'row'}
        mb="20px"
        alignItems={'center'}
        className={isHidden ? 'rotated' : ''}
        onClick={toggleHidden}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="body1" fontWeight={'bold'} mr="10px">
          Комментарии
        </Typography>
        {isHidden ? (
          <ArrowBackIosOutlined
            sx={{ fontSize: '12px', transform: 'rotate(90deg)' }}
          />
        ) : (
          <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
        )}
      </Stack>
      {!isHidden && (
        <Stack>
          {comments.map((comm: any) => {
            return (
              <Link href={`/news/${comm.post.id}`}>
                <Stack mb={'20px'}>
                  <Link href={'/profile/user'}>
                    <Stack direction={'row'} alignItems="center" mb={'10px'}>
                      <Avatar sx={{ mr: '10px' }} src={comm.avararUrl} />
                      <Typography fontWeight={500}>{comm.fullName}</Typography>
                    </Stack>
                  </Link>
                  <Typography fontSize={'14px'} mb="5px">
                    {comm.text}
                  </Typography>
                  <Typography fontWeight={500}>{comm.post.title}</Typography>
                </Stack>
                <Box
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    width: '100%',
                    my: '20px',
                  }}
                />
              </Link>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};

export default SideComments;
