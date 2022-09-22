import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from "@mui/material/Stack"

import MemberContributionCell from './MemberContributionCell'
import MemberImage from './MemberImage'
import MemberNameCell from './MemberNameCell'
import MemberSublist from './MemberSublist'

const MemberDetails = ({ member, totalContribution }) => {
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
                        <MemberContributionCell contribution={totalContribution} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4} md={3} >
                    <Box sx={{ height: '100%' }}>
                        {!!member.parents.length && (
                            <MemberSublist members={member.parents} title='Parents' />
                        )}
                        {!!member.children.length && (
                            <MemberSublist members={member.children} title='Enfants' />
                        )}
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