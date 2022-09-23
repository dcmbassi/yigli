import Container from '@mui/material/Container';
import AddGenerationForm from '../components/forms/AddGenerationForm';
import Meta from '../layouts/Meta';

const AddGenerationPage = () => {
    return (
        <Container>
            <Meta title='Nouvelle génération' description='La famille s\agrandit. Une nouvelle génération arrive.' />
            <AddGenerationForm />
        </Container>
    )
}

export default AddGenerationPage