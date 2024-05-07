import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Website!
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi.
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
        nec tellus sed augue semper porta.
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
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
}

export default Home;