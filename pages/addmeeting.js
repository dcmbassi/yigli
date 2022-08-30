import Container from '@mui/material/Container'

import ModularForm from '../components/ModularForm'
import styles from '../styles/Home.module.css'
import { meetingFields } from '../src/utils/formData'
import AddMeetingForm from '../components/forms/AddMeetingForm'

const addmeeting = () => {
  return (
    <Container>
        <AddMeetingForm />
    </Container>
  )
}

export default addmeeting