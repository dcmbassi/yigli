import ModularForm from '../components/ModularForm'
import styles from '../styles/Home.module.css'
import { memberFields } from "../src/utils/formData";

const addmember = () => {
    return (
        <main className={styles.main}>
            <ModularForm data={memberFields} />
        </main>
    )
}

export default addmember