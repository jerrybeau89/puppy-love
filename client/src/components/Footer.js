import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, []);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction href="/home" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction href="/matches" label="Matches" icon={<FavoriteIcon />} />
          <BottomNavigationAction href="/messages" label="Messages" icon={<MessageIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

