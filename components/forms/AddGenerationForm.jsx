
import Alert from "@mui/material/Alert"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useReducer } from "react"
import { genFormReducer } from "../../src/reducers/genFormReducer"

const initialState = {
    index: '',
    label: '',
    contributionAmount: '',
}

const AddGenerationForm = () => {
    const [state, dispatch] = useReducer(genFormReducer, initialState)

    const handleInputChange = e => {
        dispatch({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Handle form submission
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' mt={3}>
            <Box component='form' width={300} onSubmit={handleSubmit} mb={2}>
                <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                    Nouvelle Génération
                </Typography>

                <Box my={2}>
                    <TextField
                        type='number'
                        name='index'
                        label='Index'
                        value={state.index}
                        onChange={handleInputChange}
                        size='small'
                        fullWidth
                    />
                </Box>

                <Box my={2}>
                    <TextField
                        type='text'
                        name='label'
                        label='Label'
                        value={state.label}
                        onChange={handleInputChange}
                        size='small'
                        fullWidth
                    />
                </Box>

                <Box my={2}>
                    <TextField
                        type='number'
                        name='contributionAmount'
                        label='Montant'
                        value={state.contributionAmount}
                        onChange={handleInputChange}
                        size='small'
                        fullWidth
                    />
                </Box>

                <Box my={2}>
                    <FormControlLabel
                        control={
                            <Checkbox  />
                        }
                        label="A charge"
                    />
                </Box>

                <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                >
                    Enregistrer
                </Button>
            </Box>
            
        </Box>
    )
}

export default AddGenerationForm