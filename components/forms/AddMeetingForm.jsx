import { useEffect, useReducer, useState } from "react"

import Alert from "@mui/material/Alert"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { formReducer } from "../../src/reducers/formReducer"
import { ACTIONS } from "../../src/constants/reducerActions"

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

const initialState = {
    date: '',
    location: '',
    hosts: []
}

const AddMeetingForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const [success, setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    console.log(state)

    useEffect(() => {
        if (success) setSuccessMessage('Réunion enregistrée')
        let delayedAction = setTimeout(() => {
            setSuccessMessage('')
            setSuccess(false)
        }, 2000)
        return () => clearTimeout(delayedAction)
    }, [success])

    const handleInputChange = e => {
        const {name, value} = e.target
        dispatch({type: ACTIONS.CHANGE_INPUT, payload: {name, value}})
    }

    const handleMultiChange = e => {
        const {name, value} = e.target
        const trueValue = typeof value === 'string' ? value.split('') : value
        dispatch({type: ACTIONS.CHANGE_ARRAY, payload: {name, trueValue}})
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' mt={3}>
            <Box component='form' mb={2}>
                <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                    Nouvelle Réunion
                </Typography>

                <Stack direction='column' spacing={3}>
                    <TextField
                        type='date'
                        name='date'
                        label='Date'
                        value={state.date}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                        size='small'
                        fullWidth
                    />
                    <TextField
                        type='text'
                        name='location'
                        label='Lieu'
                        value={state.location}
                        onChange={handleInputChange}
                        size='small'
                        fullWidth
                    />
                    <FormControl size='small'>
                        <InputLabel id='hosts-label' >
                            Hôtes
                        </InputLabel>
                        <Select
                            labelId='hosts-label'
                            id='hosts'
                            label='Hôtes'
                            name='hosts'
                            multiple
                            value={state.hosts || ''}
                            onChange={handleMultiChange}
                            input={<OutlinedInput label='Hôtes' />}
                            MenuProps={MenuProps}
                        >
                            <MenuItem value='Dave'>Dave</MenuItem>
                            <MenuItem value='Wally'>Wally</MenuItem>
                            <MenuItem value='Azra'>Azra</MenuItem>
                           
                        </Select>
                    </FormControl>

                    <Button
                        variant='contained'
                        type='submit'
                        fullWidth
                    >
                        Enregistrer Réunion
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default AddMeetingForm