import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Box, Container, Toolbar } from '@mui/material';
import SkillChart from './components/SkillChart';
import LinkedInLink from './components/LinkedInLink';
import GitHubLink from './components/GitHubLink';
import WorkTimeline from './components/WorkTimeline';

function App() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          </Typography>
          <LinkedInLink/>
          <GitHubLink/>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Typography variant="h3" component="h1" align="center" marginTop={3}>
            Hi, I'm Tak.<br />
            A software engineer.<br />
            8 years experiences.
          </Typography>
        </Container>
        <Container>
          <Typography variant="h3" align="center" marginTop={3}>
            About
          </Typography>
          <Typography component="p" align="center" color="text.secondary" paragraph>
            Since 2015, I'm a software engineer using Kotlin, Scala, Ruby, TypeScript and JavaScript etc.<br />
            I studied data analysis in master and electrcal engineering in bachelor.<br />
            I live in the US with a green card.
          </Typography>
        </Container>
        <Container>
          <Typography variant="h3" align="center" marginTop={3}>
            Skills
          </Typography>
          <SkillChart/>
        </Container>
        <Container>
          <Typography variant="h3" align="center" marginTop={3}>
           Work Experience
          </Typography>
          <WorkTimeline/>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="body2" color="text.secondary" align="center">
          {`© ${new Date().getFullYear()} Takumi Hori All rights reserved.`}
        </Typography>
      </Box>
    </div>
  );
}

export default App;
