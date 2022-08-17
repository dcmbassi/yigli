import { Container } from "@mui/material"
import EditMemberForm from "../../../components/forms/EditMemberForm"

import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'

const EditMemberPage = ({member}) => {
    return (
        <Container>
            <EditMemberForm member={member} />
        </Container>
    )
}

export default EditMemberPage

export const getServerSideProps = async (context) => {
    const { memberId } = context.params

    await dbConnect()

    const member = await Member.findById(memberId).lean()
    delete member.password
    delete member.createdAt
    delete member.updatedAt

    return {
        props: { member: JSON.parse(JSON.stringify(member)) }
    }
}