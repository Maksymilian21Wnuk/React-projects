import Header from "./components/header";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function About() {
  const pages = ["Me", "Education", "Experience", "Skills"]
  
  return (
    <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Header title="About me" />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '40px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/About/${page}`}
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
    
    </Box>
  );
}