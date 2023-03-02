import { Paper, Stack, Typography } from '@mui/material';

const RatingPage = () => {
  return (
    <Stack>
      <Paper sx={{ mb: '20px', p: '20px' }}>
        <Typography mb="10px" fontWeight={'bold'} variant="h4">
          Рейтинг сообщества и блогов
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          tempore non aliquid, necessitatibus suscipit itaque ducimus,
          temporibus commodi blanditiis provident ullam? Quis, minus quidem
          voluptatum quo vero eveniet asperiores nihil?
        </Typography>
      </Paper>
      <Paper sx={{ p: '20px' }}>
        <Stack
          direction={'row'}
          sx={{ borderBottom: '1px solid #eee', pb: '10px', mb: '10px' }}
        >
          <Typography flex={'0 0 65%'}>Имя пользователя</Typography>
          <Typography flex={'0 0 35%'}>Рейтинг</Typography>
        </Stack>
        <Stack>
          <Stack direction={'row'} py="10px">
            <Typography flex={'0 0 65%'}>1 Вася Пупкин</Typography>
            <Typography flex={'0 0 35%'}>540</Typography>
          </Stack>
          <Stack direction={'row'} py="10px">
            <Typography flex={'0 0 65%'}>1 Вася Пупкин</Typography>
            <Typography flex={'0 0 35%'}>540</Typography>
          </Stack>{' '}
          <Stack direction={'row'} py="10px">
            <Typography flex={'0 0 65%'}>1 Вася Пупкин</Typography>
            <Typography flex={'0 0 35%'}>540</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default RatingPage;
