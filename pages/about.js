import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Meta from '../layouts/Meta'

const AboutPage = () => {
  return (
    <Container maxWidth="sm">
        <Meta title='A Propos' description='Héritage de Yigli' />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Descendance de Jean-Baptiste Medoung, dit Yigli
        </Typography>
        <Button variant="contained"  href="/">
          Retour à l&apos;accueil
        </Button>
      </Box>
    </Container>
  )
}

export default AboutPage