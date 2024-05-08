import { Box, Typography, Link, IconButton } from '@mui/material';
import Header from './components/header';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  // Dummy data for projects
  const projects = [
    {
      name: 'Login site with argon2',
      description: `Frontend + backend website that \n
                    uses argon2 for verifying password`,
      technologies: 'JavaScript, My-Sql, Express.js, html + css',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/login_website',
    },
    {
      name: 'J-Flashcards',
      description: 'Java swing based GUI app for learning languages with flashcards',
      technologies: 'Java, Java Swing',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards',
    },
    {
      name: 'Embedded Systems Mini-Projects',
      description: 'Java swing based GUI app for learning languages with flashcards',
      technologies: 'Java, Java Swing',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards',
    },
    {
      name: 'React Projects for laboratories',
      description: 'Java swing based GUI app for learning languages with flashcards',
      technologies: 'Java, Java Swing',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards',
    },
    {
      name: 'Traceroute program implementation',
      description: 'Java swing based GUI app for learning languages with flashcards',
      technologies: 'Java, Java Swing',
      githubLink: 'https://github.com/Maksymilian21Wnuk/UWr-/tree/main/Projects/J-Flashcards',
    },
  ];

  return (
    <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header title="Projects" />
      {projects.map((project) => (
        <Box 
        mb={3} 
        p={2}
        height={200}
        width={600} 
        sx={{ textAlign: 'left', border : 1, borderRadius: '16px'}}>
          <Typography variant="h5" gutterBottom>
            {project.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {project.description}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Technologies used: {project.technologies}
          </Typography>
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <IconButton>
              <GitHubIcon />
              Source code
            </IconButton>
          </Link>
        </Box>
      ))}
    </Box>
  );
}