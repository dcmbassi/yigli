import { Container } from "@mui/material"
import EditMemberForm from "../../../components/forms/EditMemberForm"

import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'
import Generation from '../../../models/generationModel'
import { addProperty } from "../../../src/utils/helpers"

const EditMemberPage = ({ member, spouseList, parentList, generations }) => {
    return (
        <Container>
            <EditMemberForm
                member={member}
                spouseList={spouseList}
                generations={generations}
                parentList={parentList}
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
        Generation.find().lean()
    ])

    delete member.password
    delete member.createdAt
    delete member.updatedAt

    // member.gen = {...generations.find(g => g._id.toString() === member.generation.toString())}
    addProperty('gen', member, generations.find(g => g._id.toString() === member.generation.toString()))

    const otherMembers = memberResult.map(doc => {
        const member = doc.toObject()
        member._id = member._id.toString()
        addProperty('gen', member, generations.find(g => g._id.toString() === member.generation.toString()))
        return member
    })
    const spouseList = otherMembers.filter(m => m.sex !== member.sex)
    const parentList = [...otherMembers]

    return {
        props: {
            member: JSON.parse(JSON.stringify(member)),
            spouseList: JSON.parse(JSON.stringify(spouseList)),
            generations: JSON.parse(JSON.stringify(generations)),
            parentList: JSON.parse(JSON.stringify(parentList)),
        }
    }
}