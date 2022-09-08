import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const MemberContributionCell = () => {
    return (
        <Stack
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            sx={{ width: '100%' }}
        >
            <Typography textAlign={{ xs: 'center', md: 'left' }} >
                Contributions 111
            </Typography>
        </Stack>
    )
}

export default MemberContributionCell