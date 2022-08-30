import Container from '@mui/material/Container'

import ModularForm from '../components/ModularForm'
import styles from '../styles/Home.module.css'
import { meetingFields } from '../src/utils/formData'
import Member from '../models/memberModel'
import AddMeetingForm from '../components/forms/AddMeetingForm'
import dbConnect from '../db/connect'

const addmeeting = ({members}) => {
    console.log(members[10])
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