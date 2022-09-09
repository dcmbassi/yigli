import Container from '@mui/material/Container'
import EditMeetingForm from '../../../components/forms/EditMeetingForm'

import dbConnect from '../../../db/connect'
import Meeting from '../../../models/meetingModel'


const EditMeetingPage = ({meeting}) => {
    return (
        <Container>
            <EditMeetingForm />
        </Container>
    )
}

export default EditMeetingPage

export const getServerSideProps = async (context) => {
    const { meetingId } = context.params
    await dbConnect()

    const meeting = await Meeting.findById(meetingId).lean()

    return {
        props: {
            meeting: JSON.parse(JSON.stringify(meeting)),
        }
    }

}