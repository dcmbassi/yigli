import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

import { extractDate } from '../src/utils/helpers'
import MinuteList from './MinuteList'

const MeetingDetails = ({meeting}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return (
    <Box p={2} sx={{width: '100%'}}>
        <Stack>
            <Stack>
                <Typography variant='h5' textAlign='center'>
                    {extractDate(meeting.date)}
                </Typography>
                <Typography variant='h6' textAlign='center'>
                    {meeting.location}
                </Typography>
                <Box>{meeting.hosts.length < 2 ? 'Hôte: ': 'Hôtes: '}
                    {meeting.hosts.map(host => (
                        <Typography key={host._id}>
                            {`${host.firstName} ${host.lastName}`}
                        </Typography>
                    ))}
                </Box>
            </Stack>

            <Stack py={2} spacing={2}>
                <Box display='flex' justifyContent='space-between'>
                    <Typography>
                        Retards: <span>5</span>
                    </Typography>
                    <Typography>
                        Absences: <span>3</span>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6' textAlign='center'>
                        Procès-verbal
                    </Typography>
                    <Box>
                        <Button
                            variant='outlined'
                            onClick={handleOpen}
                            size='small'
                            startIcon={<PlaylistAddIcon />}
                        >
                            Ajouter Objet
                        </Button>
                        <MinuteList />
                    </Box>
                </Box>
            </Stack>
        </Stack>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ajouter Objet</DialogTitle>
            <DialogContent>
                <DialogContentText>Hello World</DialogContentText>
                <Box>
                    <TextField name='test' label='Test' size='small' />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='outlined' size='small'>Annuler</Button>
                <Button variant='contained' size='small'>Enregistrer</Button>
            </DialogActions>
        </Dialog>
    </Box>
  )
}

export default MeetingDetails