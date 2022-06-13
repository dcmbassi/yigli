import ModularForm from '../components/ModularForm'
import styles from '../styles/Home.module.css'
import { meetingFields } from '../src/utils/formData'

const addmeeting = () => {
  return (
    <main className={styles.main}>
        <ModularForm data={meetingFields} />
    </main>
  )
}

export default addmeeting