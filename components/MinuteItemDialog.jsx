import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

const MinuteItemDialog = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ajouter Objet</DialogTitle>
            <DialogContent>
                <DialogContentText>Hello World</DialogContentText>
                <Box>
                    <TextField
                        name='test'
                        label='Test'
                        size='small'
                    />
                </Box>
            </DialogContent>
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
                >
                    Enregistrer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default MinuteItemDialog