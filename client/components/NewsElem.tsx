import { Box, Paper, Typography } from '@mui/material';

const NewsElem = () => {
  return (
    <Paper sx={{ p: '30px' }}>
      <Box sx={{ maxWidth: '680px', m: '0 auto' }}>
        <Typography variant="h4" fontWeight={'bold'} mb="20px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          accusantium culpa perferendis porro
        </Typography>
        <Typography mb="20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          doloremque consequatur laboriosam eius, quia dolorum aliquam corporis
          dolore libero, illum nesciunt itaque, reiciendis possimus architecto
          obcaecati! Non vero dolorem doloribus.
        </Typography>
        <img
          src="https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1"
          style={{ width: '100%' }}
        />
      </Box>
    </Paper>
  );
};

export default NewsElem;
