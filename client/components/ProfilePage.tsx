import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useState } from 'react';
import Post from './Post';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectUserData } from '@/redux/slices/user';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProfilePage = ({ user }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const TabPanelStyled = styled(TabPanel)({
    marginRight: '20px',
    '& .MuiBox-root': { padding: 0 },
  });

  return (
    <Stack>
      <Paper sx={{ p: '20px', mb: '30px' }}>
        <Stack direction={'row'} mb="20px">
          <Stack flex={1}>
            <Box
              sx={{
                width: '120px',
                height: '120px',
                backgroundImage:
                  'url(https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/313c12d1767baace?w=890&h=590&crop=1)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '7px',
                mb: '10px',
              }}
            ></Box>
            <Typography variant="h4" fontWeight={'bold'} mb="10px">
              {user.fullName}
            </Typography>
            <Stack direction={'row'} mb="10px">
              <Typography
                mr="10px"
                fontWeight={'bold'}
                sx={{ color: 'success.light' }}
              >
                +123
              </Typography>
              <Typography>2 подписчика</Typography>
            </Stack>
            <Typography>
              Присоединился к проекту{' '}
              {new Date(user.createdat).toLocaleDateString('ru')}
            </Typography>
          </Stack>
          <Box>
            <Stack direction={'row'}>
              <Link href={'/profile/settings'}>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ mr: '10px', minWidth: 0, p: '6px 10px' }}
                >
                  <SettingsOutlinedIcon />
                </Button>
              </Link>
              <Button startIcon={<SmsOutlinedIcon />} variant="contained">
                Написать
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Статьи" />
            <Tab label="Комментарии" />
            <Tab label="Закладки" />
          </Tabs>
        </Box>
      </Paper>
      <Stack direction={'row'} justifyContent="space-between">
        <TabPanelStyled value={value} index={0}>
          <Box sx={{ maxWidth: '600px' }}>
            {/* <Post />
            <Post />
            <Post /> */}
          </Box>
        </TabPanelStyled>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: '20px' }}>
            <Typography mb="10px" fontWeight={'bold'}>
              Подписчики
            </Typography>
            <Stack direction={'row'} flexWrap={'wrap'}>
              <Avatar sx={{ mr: '10px' }}>Z</Avatar>
              <Avatar sx={{ mr: '10px' }}>Z</Avatar>
              <Avatar sx={{ mr: '10px' }}>Z</Avatar>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
