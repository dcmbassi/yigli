import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

const MemberSublist = ({ members, title }) => {
    return (
        <Box mb={2} >
            <List dense={true} subheader={title} sx={{display: {xs: 'flex', sm: 'block'}}}>
                {members.map(member => (
                    <ListItem key={member._id} >
                        <ListItemAvatar >
                            <Avatar alt={member.firstName} src='/img/sample.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary={member.firstName} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default MemberSublist