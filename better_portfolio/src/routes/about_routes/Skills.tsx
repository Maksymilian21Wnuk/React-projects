import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BoxWrapper from '../components/box_wrapper';
import Header from '../components/header';
import { Typography } from '@mui/material';

export default function Skills() {
  // Sample skills data, you can replace this with your actual data
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', "C", "C++"
  ];

  return (
    <BoxWrapper>
      <Header title="Skills" />
      {/* Box with background color */}
      <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={1} md={6}>
      <Box bgcolor="primary.main" p={3} borderRadius={16} textAlign="center">
        {/* Typography with unordered list */}
        <Typography variant="h4" component="ul" sx={{ color: 'primary.light', textAlign: 'left' }}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </Typography>
      </Box>
      </Grid>
        </Grid>
    </BoxWrapper>
  );
}
