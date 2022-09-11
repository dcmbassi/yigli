import { useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { formReducer } from '../../src/reducers/formReducer'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const EditMeetingForm = ({meeting}) => {
    const [state, dispatch] = useReducer(formReducer, meeting)
    const [success, setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [complete, setComplete] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (success) setSuccessMessage('Réunion modifiée. Redirection en cours...')
        let delayedAction = setTimeout(() => {
            setSuccessMessage('')
            setSuccess(false)
        }, 2000)
        return () => clearTimeout(delayedAction)
    }, [success])

    useEffect(() => {
        let delayedRedirection = setTimeout(() => {
            if (complete) router.push(`/meetings/${meeting._id}`)
        }, 2100)        
        return () => clearTimeout(delayedRedirection)
    }, [complete, router, meeting._id])



    const handleSubmit = async e => {
        e.preventDefault()

    }
    return (
        <Box display='flex' flexDirection='column' alignItems='center' mt={3}>
            <Box component='form' onSubmit={handleSubmit} mb={2}>
                <Typography variant='h4' textAlign='center' gutterBottom>
                    Modifier Réunion
                </Typography>
                <Grid container>
                    <Grid item>
                        <Stack direction='column' spacing={3}>
                            <TextField
                                type='date'
                                name='date'
                                label='Date'
                                size='small'
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <TextField
                                type='text'
                                name='location'
                                label='Lieu'
                                size='small'
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <FormControl>
                                <InputLabel id='hosts-label'>
                                    Hôtes
                                </InputLabel>
                                <Select
                                    labelId='hosts-label'
                                    id='hosts'
                                    label='Hôtes'
                                    name='hosts'
                                    // multiple
                                    input={<OutlinedInput label='Hôtes' />}
                                    MenuProps={MenuProps}
                                >
                                    <MenuItem>Dave</MenuItem>
                                    <MenuItem>Wally</MenuItem>
                                    <MenuItem>Azra</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction='column' spacing={3}>
                            <FormControl>
                                <FormControlLabel
                                    control={
                                        <Checkbox name='upcoming' />
                                    }
                                    label='A venir'
                                />
                            </FormControl>
                        </Stack>
                    </Grid>
                </Grid>
                <Box maxWidth={400} mx='auto' mt={{ xs: 2, md: 8 }}>
                    <Button variant='contained' type='submit' fullwidth='true'>
                        Enregistrer Changements
                    </Button>
                </Box>
            </Box>
            {success && <Alert severity='success'>{successMessage}</Alert>}
        </Box>
    )
}

export default EditMeetingForm