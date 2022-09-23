import Container from '@mui/material/Container';
import AddMemberForm from '../components/forms/AddMemberForm';
import Meta from '../layouts/Meta';

const addmember = () => {
    return (
        <Container>
            <Meta />
            <AddMemberForm />
        </Container>
    )
}

export default addmember