import { Container } from "@mui/material"
import EditMemberForm from "../../../components/forms/EditMemberForm"

import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'
import Generation from '../../../models/generationModel'

const EditMemberPage = ({ member, spouseList, generations }) => {
    return (
        <Container>
            <EditMemberForm
                member={member}
                spouseList={spouseList}
                generations={generations}
            />
        </Container>
    )
}

export default EditMemberPage

export const getServerSideProps = async (context) => {
    const { memberId } = context.params

    await dbConnect()

    const [member, memberResult, generations] = await Promise.all([
        Member.findById(memberId).lean(),
        Member.find(),
        Generation.find()
    ])

    delete member.password
    delete member.createdAt
    delete member.updatedAt

    const otherMembers = memberResult.map(doc => {
        const member = doc.toObject()
        member._id = member._id.toString()
        return member
    })
    const spouseList = otherMembers.filter(m => m.sex !== member.sex)

    return {
        props: {
            member: JSON.parse(JSON.stringify(member)),
            spouseList: JSON.parse(JSON.stringify(spouseList)),
            generations: JSON.parse(JSON.stringify(generations)),
        }
    }
}