import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import MemberCard from './MemberCard'

const MembersGrid = ({ members }) => {
    return (
        <>
            <Typography gutterBottom variant='h2' component='div' textAlign='center'>
                Membres
            </Typography>
            <Typography gutterBottom variant='caption' component='div' color='text.secondary'>
                Effectif: {members.length}
            </Typography>
            <Grid
                container
                py={2}
                spacing={{ xs: 2, md: 3 }}
            >
                {members.map(member => (
                    <Grid
                        item
                        key={member.id}
                        xs={12} sm={6} md={4} lg={3}
                    >
                        <Link href={`/members/${member._id}`} passHref>
                            <a style={{textDecoration: 'none'}}>
                            <MemberCard member={member} />
                            </a>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default MembersGrid