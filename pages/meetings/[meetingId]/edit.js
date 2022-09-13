import Container from '@mui/material/Container'
import EditMeetingForm from '../../../components/forms/EditMeetingForm'

import dbConnect from '../../../db/connect'
import Meeting from '../../../models/meetingModel'
import Member from '../../../models/memberModel'


const EditMeetingPage = ({ meeting, members }) => {
    return (
        <Container>
            <EditMeetingForm meeting={meeting} members={members} />
        </Container>
    )
}

export default EditMeetingPage

export const getServerSideProps = async (context) => {
    const { meetingId } = context.params
    await dbConnect()

    const [meeting, members] = await Promise.all([
        Meeting.findById(meetingId).lean(),
        Member.find().select({password: 0}).lean()
    ])

    return {
        props: {
            meeting: JSON.parse(JSON.stringify(meeting)),
            members: JSON.parse(JSON.stringify(members)),
        }
    }
}