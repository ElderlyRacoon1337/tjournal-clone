import { ArrowBackIosOutlined } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const SideComments = () => {
  const [isHidden, setIsHidden] = useState(false);

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
          <Stack mb={'20px'}>
            <Stack direction={'row'} alignItems="center" mb={'10px'}>
              <Avatar
                sx={{ mr: '10px' }}
                src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
              />
              <Typography>Вася пупкин</Typography>
            </Stack>
            <Typography fontSize={'14px'} color={'textSecondary'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              debitis nihil tempore officiis dolores optio a dolorum nulla eum
            </Typography>
          </Stack>
          <Stack mb={'20px'}>
            <Stack direction={'row'} alignItems="center" mb={'10px'}>
              <Avatar
                sx={{ mr: '10px' }}
                src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
              />
              <Typography>Вася пупкин</Typography>
            </Stack>
            <Typography fontSize={'14px'} color={'textSecondary'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              debitis nihil tempore officiis dolores optio a dolorum nulla eum
            </Typography>
          </Stack>
          <Stack mb={'20px'}>
            <Stack direction={'row'} alignItems="center" mb={'10px'}>
              <Avatar
                sx={{ mr: '10px' }}
                src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
              />
              <Typography>Вася пупкин</Typography>
            </Stack>
            <Typography fontSize={'14px'} color={'textSecondary'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              debitis nihil tempore officiis dolores optio a dolorum nulla eum
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default SideComments;
