import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from './components/header';

export default function Projects() {    
    return (
        <Box p={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Header title="Projects" />
        </Box>
    );
}