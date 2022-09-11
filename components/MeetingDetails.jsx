import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

import { extractDate } from '../src/utils/helpers'
import MinuteList from './MinuteList'

const MeetingDetails = ({meeting}) => {
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
                        <MinuteList />
                        <Button
                            variant='outlined'
                            size='small'
                            startIcon={<PlaylistAddIcon />}
                        >
                            Ajouter Objet
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Stack>
    </Box>
  )
}

export default MeetingDetails