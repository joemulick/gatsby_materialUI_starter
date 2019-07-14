import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../components/ProTip';
import Link from '../components/Link';

import MainLandingSectionAlpha from '../components/MainLandingSectionAlpha'
// import Navbar from '../components/Navbar'

// mainGrid: {
//   minHeight: '70vmin',
//   width: 'auto',
//   background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1551161156/rawpixel-653764-unsplash-edited_ezhadt.jpg) no-repeat fixed',
//   position: 'relative',
//   webkitBackgroundSize: 'cover',
//   mozBackgroundSize: 'cover',
//   oBackgroundSize: 'cover',
//   backgroundSize: 'cover',
  
// }

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function App() {
  return (
    <div>
    <MainLandingSectionAlpha />
    {/* <Navbar /> */}
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
    </div>
  );
}
