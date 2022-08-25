import Box from '@mui/system/Box'
import Grid from '@mui/material/Grid'
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography'

import MemberContributionCell from './MemberContributionCell'
import MemberImage from './MemberImage'
import MemberNameCell from './MemberNameCell'

const MemberDetails = ({ member }) => {
    console.log(member);
    return (
        <Box p={2} sx={{ width: '100%' }}>
            <Grid container p={2} my={2} spacing={{ xs: 2, md: 3 }} >
                <Grid item xs={12} sm={4} md={3} >
                    <MemberImage />
                </Grid>
                <Grid item xs={12} sm={8} md={9} >
                    <Stack
                        sx={{ height: '100%' }}
                        spacing={2}
                        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
                        alignItems='flex-start'
                    >
                        <MemberNameCell
                            memberName={`${member.firstName} ${member.lastName}`}
                            memberAddress={member.address}
                        />
                        <MemberContributionCell />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4} md={3} >
                    <Box sx={{ height: '100%', background: '#ddd' }}>
                        {!!member.parents.length && member.parents.map(parent =>(
                            <Typography key={parent._id}>{parent.firstName}</Typography>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9} >
                    <Box sx={{ height: '100%', background: '#ddd' }}>
                        Miscellany
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MemberDetails