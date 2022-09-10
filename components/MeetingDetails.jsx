import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { extractDate } from '../src/utils/helpers'

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

            <Stack>

            </Stack>
        </Stack>
    </Box>
  )
}

export default MeetingDetails