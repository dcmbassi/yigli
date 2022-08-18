import Alert from "@mui/material/Alert"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useReducer } from "react"
import { editFormReducer } from "../../src/reducers/editFormReducer"

/*
    TO DO
    2. Initialise component state to member prop attributes
    3. Handle input changes
    4. Validate inputs
    5. Submit the form via a helper put function
    6. Fix label presence issues in TextFields
*/

const EditMemberForm = ({ member }) => {
    const [state, dispatch] = useReducer(editFormReducer, member)
    console.log('State:', state)
    return (
        <Box display='flex' flexDirection='column' alignItems='center' mt={3}>
            <Box component='form' mb={2}>
                <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                    Modifier Membre
                </Typography>
                <Grid
                    container
                    spacing={4}
                    mb={4}
                >
                    <Grid item xs={12} md={6}>
                        <Stack direction='column' spacing={3}>
                            <TextField
                                type='text'
                                name='firstName'
                                label='Prénom'
                                InputLabelProps={{ shrink:  true}}
                                value={state.firstName}
                                size='small'
                                fullWidth
                            />
                            <TextField
                                type='text'
                                name='lastName'
                                label='Nom'
                                InputLabelProps={{ shrink:  true}}
                                value={state.lastName}
                                size='small'
                                fullWidth
                            />
                            <TextField
                                type='email'
                                name='email'
                                label='Email'
                                InputLabelProps={{ shrink:  true}}
                                value={state.email}
                                size='small'
                                fullWidth
                            />
                            <TextField
                                type='text'
                                name='address'
                                label='Adresse'
                                InputLabelProps={{ shrink:  true}}
                                value={state.address}
                                size='small'
                                fullWidth
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack direction='column' spacing={2}>
                        <FormControl size='small'>
                            <InputLabel variant='standard' htmlFor='generation'>
                                Génération
                            </InputLabel>
                            <NativeSelect
                                // onChange={handleInputChange}
                                // value={formValues[item.name]}
                                size="small"
                                multiple
                                variant="outlined"
                                inputProps={{
                                    name: 'generation',
                                    id: 'generation'
                                }}
                            >
                                <option>
                                    Gen 1
                                </option>
                                <option>
                                    Gen 2
                                </option>
                                <option>
                                    Gen 3
                                </option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl size='small'>
                            <InputLabel variant='standard' htmlFor='parents'>
                                Parents
                            </InputLabel>
                            <NativeSelect
                                // onChange={handleInputChange}
                                // value={formValues[item.name]}
                                inputProps={{
                                    name: 'parents',
                                    id: 'parents'
                                }}
                            >
                                <option>
                                    Parent 1
                                </option>
                                <option>
                                    Parent 2
                                </option>
                                <option>
                                    Parent 3
                                </option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl size='small'>
                            <InputLabel variant='standard' htmlFor='spouse'>
                                Conjoint(e)
                            </InputLabel>
                            <NativeSelect
                                // onChange={handleInputChange}
                                // value={formValues[item.name]}
                                inputProps={{
                                    name: 'spouse',
                                    id: 'spouse'
                                }}
                            >
                                <option>
                                    Spouse 1
                                </option>
                                <option>
                                    Spouse 2
                                </option>
                                <option>
                                    Spouse 3
                                </option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl size='small'>
                            <InputLabel variant='standard' htmlFor='children'>
                                Enfants
                            </InputLabel>
                            <NativeSelect
                                // onChange={handleInputChange}
                                // value={formValues[item.name]}
                                inputProps={{
                                    name: 'children',
                                    id: 'children'
                                }}
                            >
                                <option>
                                    Child 1
                                </option>
                                <option>
                                    Child 2
                                </option>
                                <option>
                                    Child 3
                                </option>
                            </NativeSelect>
                        </FormControl>
                        </Stack>
                    </Grid>
                </Grid>
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