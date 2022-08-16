import ModularForm from '../components/ModularForm'
import styles from '../styles/Home.module.css'
import { memberFields } from "../src/utils/formData";
import Container from '@mui/material/Container';
import AddMemberForm from '../components/forms/AddMemberForm';

const addmember = () => {
    return (
        <Container>
            {/* <ModularForm data={memberFields} /> */}
            <AddMemberForm />
        </Container>
    )
}

export default addmember