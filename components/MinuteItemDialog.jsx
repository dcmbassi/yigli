import { useEffect, useReducer } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

import { formReducer } from '../src/reducers/formReducer'
import { ACTIONS } from '../src/constants/reducerActions'
import submitForm from '../src/utils/formSubmission'
import { ENDPOINTS } from '../src/constants/endpoints'

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
    meeting: '',
    owner: '',
    title: '',
    description: '',
    resolution: ''
}

const MinuteItemDialog = ({ open, handleClose, meetingId, members }) => {
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleInputChange = e => {
        const { name, value } = e.target
        dispatch({ type: ACTIONS.CHANGE_INPUT, payload: { name, value } })
    }

    const addMeetingId = () => {
        const name = 'meeting'
        const value = meetingId
        dispatch({ type: ACTIONS.CHANGE_INPUT, payload: { name, value } })
    }

    const saveIsDisabled = !(state.owner && state.title)

    const handleSubmit = async e => {
        e.preventDefault()
        if (state.meeting === '') addMeetingId()
        try {
            const result = await submitForm(ENDPOINTS.addAgendaItem, state)
            if (result.success) {
                dispatch({type: ACTIONS.RESET, payload: initialState})
                handleClose()
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ajouter Objet</DialogTitle>
            <DialogContent>
                <DialogContentText>Hello World</DialogContentText>
                <Stack spacing={2} component='form' onSubmit={handleSubmit}>
                    <FormControl size='small'>
                        <InputLabel id='owner-label'>
                            Rapporteur
                        </InputLabel>
                        <Select
                            labelId='owner-label'
                            id='owner'
                            label='Rapporteur'
                            name='owner'
                            value={state.owner || ''}
                            onChange={handleInputChange}
                            MenuProps={MenuProps}
                        >
                            {members.map(m => (
                                <MenuItem key={m._id} value={m._id}>
                                    {`${m.firstName} ${m.lastName}`}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        name='title'
                        label='Titre'
                        value={state.title}
                        onChange={handleInputChange}
                        size='small'
                    />
                    <TextField
                        name='description'
                        label='Description'
                        value={state.description}
                        onChange={handleInputChange}
                        size='small'
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        name='resolution'
                        label='Résolution'
                        value={state.resolution}
                        onChange={handleInputChange}
                        size='small'
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            variant='outlined'
                            size='small'
                        >
                            Annuler
                        </Button>
                        <Button
                            variant='contained'
                            size='small'
                            type='submit'
                            // onClick={saveAgendaItem}
                            disabled={saveIsDisabled}
                        >
                            Enregistrer
                        </Button>
                    </DialogActions>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default MinuteItemDialog