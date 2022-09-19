import Container from '@mui/material/Container'

import Meeting from '../../models/meetingModel'
import dbConnect from '../../db/connect'
import MeetingListing from '../../components/MeetingListing'


const MeetingsPage = ({ meetings }) => {
    const upcoming = meetings.filter(meeting => meeting.upcoming)
    const past = meetings.filter(meeting => !meeting.upcoming)
    return (
        <Container>
            <MeetingListing 
                upcoming={upcoming}
                past={past}
            />
        </Container>
    )
}

export default MeetingsPage

export const getServerSideProps = async () => {
    await dbConnect()

    const meetings = await Meeting.find().sort('-date').lean()

    return {
        props: {
            meetings: JSON.parse(JSON.stringify(meetings)),
        }
    }
}