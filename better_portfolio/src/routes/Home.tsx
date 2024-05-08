import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from './components/header';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import * as React from 'react';

function Home() {
  const [mail, setMail] = React.useState(0);


  return (
    <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Header title='Maksymilian Wnuk' />
      <Typography variant="h3" paragraph>
        <Box fontWeight="300">
        Computer Science Student
        </Box>
      </Typography>
      <Typography variant="h4" paragraph>
        Programmer
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          startIcon={<GitHubIcon />}
          href="https://github.com/Maksymilian21Wnuk"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          GitHub
        </Button>
        <Button
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/maksymilian-wnuk-704370240/"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          LinkedIn
        </Button>

        <Button
          startIcon={<AlternateEmailIcon />}
          variant="contained"
          color="primary"
          onClick={() => setMail(1)}
        >
          Show Mail
        </Button>
        {mail ? <Typography>asdf</Typography>: null} 

      </Box>
    </Box>
  );
}

export default Home;