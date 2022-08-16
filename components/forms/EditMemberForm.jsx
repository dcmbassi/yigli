import Alert from "@mui/material/Alert"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const EditMemberForm = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' mt={3}>
            <Box component='form' mb={2}>
                <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                    Modifier Membre
                </Typography>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    mb={4}
                >
                    <Stack direction='column' spacing={2}>
                        <TextField
                            type='text'
                            name='firstName'
                            label='Prénom'
                            size='small'
                            fullWidth
                        />
                        <TextField
                            type='text'
                            name='firstName'
                            label='Prénom'
                            size='small'
                            fullWidth
                        />
                    </Stack>
                    <Stack direction='column' spacing={2}>
                        <TextField
                            type='text'
                            name='firstName'
                            label='Prénom'
                            size='small'
                            fullWidth
                        />
                        <TextField
                            type='text'
                            name='firstName'
                            label='Prénom'
                            size='small'
                            fullWidth
                        />
                    </Stack>
                </Stack>
                <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                >
                    Enregistrer Changements
                </Button>
            </Box>




        </Box>
    )
}

export default EditMemberForm