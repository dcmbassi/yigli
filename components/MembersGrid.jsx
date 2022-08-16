import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import MemberCard from './MemberCard'

const addMemberUrl = '/addmember'

const MembersGrid = ({ members }) => {
    return (
        <>
            <Typography variant='h2' mt={2} component='div' textAlign='center'>
                Membres
            </Typography>
            <Typography variant='caption' textAlign='center' component='div' color='text.secondary'>
                Effectif: {members.length}
            </Typography>
            <Box mt={2} display='flex' justifyContent='flex-end'>
                <Link href={addMemberUrl} passHref>
                    <Button
                        variant='outlined'
                        size='small'
                        startIcon={<PersonAddIcon />}
                    >
                        Ajouter
                    </Button>
                </Link>
            </Box>
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