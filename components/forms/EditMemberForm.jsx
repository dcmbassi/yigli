import { useReducer } from "react"

import Alert from "@mui/material/Alert"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { editFormReducer } from "../../src/reducers/editFormReducer"

/*
    TO DO
    3. Handle input changes
    4. Validate inputs
    5. Submit the form via a helper put function
*/

const EditMemberForm = ({ member, spouseList }) => {
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
                    minWidth={{ md: '600px' }}
                    spacing={4}
                    mb={4}
                >
                    <Grid item xs={12} md={6}>
                        <Stack direction='column' spacing={3}>
                            <TextField
                                type='text'
                                name='firstName'
                                label='Prénom'
                                InputLabelProps={{ shrink: true }}
                                value={state.firstName}
                                size='small'
                                fullWidth
                            />
                            <TextField
                                type='text'
                                name='lastName'
                                label='Nom'
                                InputLabelProps={{ shrink: true }}
                                value={state.lastName}
                                size='small'
                                fullWidth
                            />
                            <TextField
                                type='email'
                                name='email'
                                label='Email'
                                InputLabelProps={{ shrink: true }}
                                value={state.email}
                                size='small'
                                fullWidth
                            />
                            <TextField
                                type='text'
                                name='address'
                                label='Adresse'
                                InputLabelProps={{ shrink: true }}
                                value={state.address}
                                size='small'
                                fullWidth
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack direction='column' spacing={3}>
                            <FormControl size='small'>
                                <InputLabel id='generation-label' >
                                    Génération
                                </InputLabel>
                                <Select
                                    labelId='generation-label'
                                    id='generation'
                                    label='Génération'
                                    name='generation'
                                    value={state.generation || ''}
                                >
                                    <option>LFDF</option>
                                    <option>DKKS</option>
                                </Select>
                            </FormControl>
                            <FormControl size='small'>
                                <InputLabel id='parents-label' >
                                    Parents
                                </InputLabel>
                                <Select
                                    labelId='parents-label'
                                    id='parents'
                                    label='Parents'
                                    name='parents'
                                    multiple
                                    value={state.parents}
                                >
                                    <option>LFDF</option>
                                    <option>DKKS</option>
                                </Select>
                            </FormControl>
                            <FormControl size='small'>
                                <InputLabel id='spouse-label' >
                                    Conjoint(e)
                                </InputLabel>
                                <Select
                                    labelId='spouse-label'
                                    id='spouse'
                                    label='Conjoint(e)'
                                    name='spouse'
                                    value={state.spouse || ''} 
                                >
                                    {spouseList.map(s => (
                                        <option key={s._id} value={s._id}>
                                            {`${s.firstName} ${s.lastName}`}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl size='small'>
                                <InputLabel id='children-label' >
                                    Children
                                </InputLabel>
                                <Select
                                    labelId='children-label'
                                    id='children'
                                    label='Children'
                                    name='children'
                                    multiple
                                    value={state.children}
                                >
                                    <option>LFDF</option>
                                    <option>DKKS</option>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                </Grid>
                <Box maxWidth={400} mx='auto' mt={{xs: 2, md: 8}}>
                    <Button
                        variant='contained'
                        type='submit'
                        fullWidth
                    >
                        Enregistrer Changements
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default EditMemberForm