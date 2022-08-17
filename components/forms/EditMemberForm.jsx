import Alert from "@mui/material/Alert"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
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
                            name='lastName'
                            label='Nom'
                            size='small'
                            fullWidth
                        />
                        <TextField
                            type='email'
                            name='email'
                            label='Email'
                            size='small'
                            fullWidth
                        />
                        <TextField
                            type='text'
                            name='address'
                            label='Adresse'
                            size='small'
                            fullWidth
                        />
                    </Stack>
                    <Stack direction='column' spacing={2}>
                        <FormControl>
                            <InputLabel variant='standard' htmlFor='generation'>
                                Génération
                            </InputLabel>
                            <NativeSelect
                                // onChange={handleInputChange}
                                // value={formValues[item.name]}
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
                        <FormControl>
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
                        <FormControl>
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
                        <FormControl>
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