import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Link from 'next/link';

const LeftMenu = () => {
  return (
    <MenuList sx={{ p: '0px', ml: '5px' }}>
      <Link href={'/'}>
        <MenuItem
          sx={{
            mb: '10px',
            p: '10px',
            borderRadius: '10px',
            minWidth: '200px',
          }}
        >
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary={'Лента'} />
        </MenuItem>
      </Link>

      <MenuItem sx={{ mb: '10px', p: '10px', borderRadius: '10px' }}>
        <ListItemIcon>
          <SmsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={'Сообщения'} />
      </MenuItem>
      <Link href={'/rating'}>
        <MenuItem sx={{ mb: '10px', p: '10px', borderRadius: '10px' }}>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary={'Рейтинг TJ'} />
        </MenuItem>
      </Link>
      <MenuItem sx={{ mb: '10px', p: '10px', borderRadius: '10px' }}>
        <ListItemIcon>
          <FormatListBulletedOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={'Подписки'} />
      </MenuItem>
    </MenuList>
  );
};

export default LeftMenu;
