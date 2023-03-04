import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LeftMenu = () => {
  const router = useRouter();

  return (
    <MenuList sx={{ p: '0px', ml: '5px' }}>
      <Link href={'/'}>
        <MenuItem
          sx={
            router.asPath == '/'
              ? {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                  bgcolor: 'background.paper',
                }
              : {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                }
          }
        >
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary={'Лента'} />
        </MenuItem>
      </Link>
      <Link href={'/messages'}>
        <MenuItem
          sx={
            router.asPath == '/messages'
              ? {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                  bgcolor: 'background.paper',
                }
              : {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                }
          }
        >
          <ListItemIcon>
            <SmsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={'Сообщения'} />
        </MenuItem>
      </Link>
      <Link href={'/rating'}>
        <MenuItem
          sx={
            router.asPath == '/rating'
              ? {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                  bgcolor: 'background.paper',
                }
              : {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                }
          }
        >
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary={'Рейтинг TJ'} />
        </MenuItem>
      </Link>
      <Link href={'/follows'}>
        <MenuItem
          sx={
            router.asPath == '/follows'
              ? {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                  bgcolor: 'background.paper',
                }
              : {
                  mb: '10px',
                  p: '10px',
                  borderRadius: '10px',
                  minWidth: '200px',
                }
          }
        >
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={'Подписки'} />
        </MenuItem>
      </Link>
    </MenuList>
  );
};

export default LeftMenu;
