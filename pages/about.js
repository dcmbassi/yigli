import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Position from '../models/positionModel'
import dbConnect from '../db/connect'
import Meta from '../layouts/Meta'

const AboutPage = ({ positions }) => {
    return (
        <Container maxWidth="sm">
            <Meta title='A Propos' description='Héritage de Yigli' />
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Descendance de Jean-Baptiste Medoung, dit Yigli
                </Typography>
                <Button variant="contained" href="/">
                    Retour à l&apos;accueil
                </Button>
            </Box>
        </Container>
    )
}

export const getServerSideProps = async () => {
    await dbConnect()

    const positions = await Position.find().populate('appointee', 'firstName lastName').lean()

    return {
        props: {
            positions: JSON.parse(JSON.stringify(positions))
        }
    }
}

export default AboutPage