import NewsElem from '@/components/NewsElem';
import PostComments from '@/components/PostComments';
import MainLayout from '@/layouts/MainLayout';
import { Box } from '@mui/material';

const comments = [
  {
    id: 2,
    user: {
      fullname: 'Pavel Litov',
      avararUrl:
        'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque consequatur laboriosam eius',
    createdAt: String(new Date().toLocaleDateString('ru')),
  },
  {
    id: 2,
    user: {
      fullname: 'Pavel Litov',
      avararUrl:
        'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque consequatur laboriosam eius',
    createdAt: String(new Date().toLocaleDateString('ru')),
  },
  {
    id: 2,
    user: {
      fullname: 'Pavel Litov',
      avararUrl:
        'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque consequatur laboriosam eius',
    createdAt: String(new Date().toLocaleDateString('ru')),
  },
  {
    id: 2,
    user: {
      fullname: 'Pavel Litov',
      avararUrl:
        'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque consequatur laboriosam eius',
    createdAt: String(new Date().toLocaleDateString('ru')),
  },
  {
    id: 2,
    user: {
      fullname: 'Pavel Litov',
      avararUrl:
        'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque consequatur laboriosam eius',
    createdAt: String(new Date().toLocaleDateString('ru')),
  },
  {
    id: 2,
    user: {
      fullname: 'Pavel Litov',
      avararUrl:
        'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque consequatur laboriosam eius',
    createdAt: String(new Date().toLocaleDateString('ru')),
  },
];

const Post = () => {
  return (
    <MainLayout contentFullWidth>
      <NewsElem />
      <Box>
        <PostComments items={comments} />
      </Box>
    </MainLayout>
  );
};

export default Post;
