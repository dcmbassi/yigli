import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AboutPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Déscendance de Jean-Baptiste Medoung, dit Yigli
        </Typography>
        <Button variant="contained"  noLinkStyle href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  )
}

export default AboutPage