import Container from '@mui/material/Container'

import Member from '../models/memberModel'
import AddMeetingForm from '../components/forms/AddMeetingForm'
import dbConnect from '../db/connect'

const addmeeting = ({members}) => {
    return (
        <Container>
            <AddMeetingForm members={members} />
        </Container>
    )
}

export const getServerSideProps = async () => {
    await dbConnect()

    const members = await Member.find().lean()

    return {
        props: {
            members: JSON.parse(JSON.stringify(members)),
        }
    }
}

export default addmeeting