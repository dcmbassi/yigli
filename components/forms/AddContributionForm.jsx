import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

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

const AddContributionForm = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' mt={3}>
            <Box component='form'>
                <Typography variant='h4' sx={{ textAlign: 'center' }} gutterBottom>
                    Ajouter Contribution
                </Typography>
            </Box>
            <Stack direction='column' spacing={3}>
                <FormControl size='small'>
                    <InputLabel id='contributor-label'>
                        Contributeur
                    </InputLabel>
                    <Select
                        labelId='contributor-label'
                        id='contributor'
                        label='Contributeur'
                        name='contributor'
                        MenuProps={MenuProps}
                    >
                        <MenuItem>
                            Dave
                        </MenuItem>
                        <MenuItem>
                            Wally
                        </MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    type='number'
                    name='amount'
                    label='Montant'
                    size='small'
                    fullWidth
                />
                <TextField
                    type='date'
                    name='date'
                    label='Date'
                    InputLabelProps={{ shrink: true }}
                    size='small'
                    fullWidth
                />
                <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                >
                    Enregistrer Contribution
                </Button>
            </Stack>
        </Box>
    )
}

export default AddContributionForm