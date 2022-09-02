import dbConnect from '../../../db/connect'
import Meeting from '../../../models/meetingModel'
// import Member from '../../../models/memberModel'

const MeetingDetailsPage = ({ meeting }) => {
    console.log(meeting)
    return (
        <div>Meeting Details Page</div>
    )
}

export default MeetingDetailsPage

export const getServerSideProps = async (context) => {
    const { meetingId } = context.params

    await dbConnect()

    const meeting = await Meeting.findById(meetingId).populate('hosts').lean()

    return {
        props: {
            meeting: JSON.parse(JSON.stringify(meeting))
        }
    }
}