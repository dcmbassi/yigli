import Grid from '@mui/material/Grid'

const MembersGrid = ({ members }) => {
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
        >
            {members.map(member => (
                <Grid
                    item
                    key={member.id}
                    xs={12} sm={6} md={4} lg={3}
                >
                    <p>{member.lastName}</p>
                </Grid>
            ))}
        </Grid>
    )
}

export default MembersGrid