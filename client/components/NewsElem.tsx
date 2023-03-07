import { PostItem } from '@/utils/api/types';
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material';

interface NewsElemProps {
  post: PostItem;
}

const NewsElem: React.FC<NewsElemProps> = ({ post }) => {
  return (
    <Paper sx={{ p: '30px' }}>
      <Box sx={{ maxWidth: '680px', m: '0 auto' }}>
        <Typography variant="h4" fontWeight={'bold'} mb="20px">
          {post.title}
        </Typography>
        {post.body.map((el, i) => (
          <Typography
            key={i}
            mb="20px"
            dangerouslySetInnerHTML={{ __html: el.data.text }}
          ></Typography>
        ))}
        {/* <Typography mb="20px">{post.body}</Typography> */}
        <img
          src="https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1"
          style={{ width: '100%' }}
        />
        <Stack
          direction={'row'}
          alignItems="center"
          justifyContent={'space-between'}
          mt="20px"
        >
          <Stack direction={'row'} alignItems="center">
            <Avatar sx={{ mr: '10px' }} />
            <Typography sx={{ mr: '10px' }}>{post.user.fullName}</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>
              Статья создана {new Date(post.createdat).toLocaleDateString('ru')}
            </Typography>
          </Stack>
          <Button variant="contained">Подписаться</Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default NewsElem;
