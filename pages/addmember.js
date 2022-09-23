import Container from '@mui/material/Container';
import AddMemberForm from '../components/forms/AddMemberForm';
import Meta from '../layouts/Meta';

const addmember = () => {
    const desc = 'Ajouter un membre à l\'effectif'
    return (
        <Container>
            <Meta title='Nouveau membre' description={desc} />
            <AddMemberForm />
        </Container>
    )
}

export default addmember