import Container from '@mui/material/Container';

import Member from '../../models/memberModel'
import dbConnect from '../../db/connect'
import Meta from '../../layouts/Meta'
import MembersGrid from '../../components/MembersGrid'

const MembersPage = ({ members }) => {
    return (
        <>
            <Meta description="Membres de l\'association Yigli Family" />
            <Container>
                <MembersGrid members={members} />
            </Container>
        </>
    )
}

export default MembersPage

export const getServerSideProps = async () => {
    await dbConnect()

    const members = await Member.find().populate('generation', 'index label contributionAmount').lean()

    return {
        props: { members: JSON.parse(JSON.stringify(members)) }
    }
}