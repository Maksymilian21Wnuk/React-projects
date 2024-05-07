import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About', 'Projects'];

function Nav() {

  return (
    <AppBar position="sticky" sx={{ borderRadius: '15px', backgroundColor: '#7091e6'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            {/* Render Home button on the left */}
            <Button
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                backgroundColor: '#3d52a0',
                '&:hover': {
                  backgroundColor: '#8697c4',
                },
              }}
            >
              Home
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '40px' }}>
            {pages.slice(1).map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  backgroundColor: '#3d52a0',
                  '&:hover': {
                    backgroundColor: '#8697c4',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
