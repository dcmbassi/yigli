import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const MinuteListItem = ({item}) => {
  return (
    <Card>
        <CardActionArea>
            <CardContent>
                <Typography>
                    {item.title}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default MinuteListItem