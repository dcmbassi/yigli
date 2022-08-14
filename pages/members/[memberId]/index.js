import Container from "@mui/material/Container"

import dbConnect from "../../../db/connect"

import Member from '../../../models/memberModel'
import MemberDetails from "../../../components/MemberDetails"

const MemberDetailsPage = ({ member }) => {
    console.log({ member })
    return (
        <Container>
            <MemberDetails member={member} />
        </Container>
    )
}

export default MemberDetailsPage

export const getServerSideProps = async (context) => {
    const { memberId } = context.params

    await dbConnect()

    const member = await Member.findById(memberId).lean()
    delete member.password

    return {
        props: { member: JSON.parse(JSON.stringify(member)) }
    }

}