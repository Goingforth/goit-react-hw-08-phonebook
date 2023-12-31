import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';

import * as React from 'react';
import { AppBar } from '@mui/material';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';


const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <ContactPhoneIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
         
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
            
              color: 'yellow',
              textDecoration: 'none',
              ml: 2,
            }}
          >
            PHONEBOOK
          </Typography>

          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
