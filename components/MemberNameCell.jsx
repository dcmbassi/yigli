import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MemberNameCell = ({memberName, memberAddress}) => {
    return (
        <Stack
            sx={{ background: '#eee', width: '100%' }}
            justifyContent={{ sm: 'flex-start', md: 'space-between' }}
            alignItems={{ sm: 'flex-start', md: 'center' }}
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
        >
            <Typography
                sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}
                gutterBottom
            >
                {memberName}
            </Typography>
            <Typography
                color='text.secondary'
                textAlign={{ xs: 'center', sm: 'left' }}
            >
                <LocationOnIcon mr={1} /> {memberAddress}
            </Typography>
        </Stack>
    )
}

export default MemberNameCell