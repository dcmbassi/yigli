import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'

const MemberDetailsPage = ({ member }) => {
    console.log({member})
    return (
        <>
            <div>Member Details Page</div>
            test
            <p>{member.firstName}</p>
        </>
    )
}

export default MemberDetailsPage

export const getServerSideProps = async (context) => {
    const { memberId } = context.params

    await dbConnect()

    const member = await Member.findById(memberId).lean()

    return {
        props: { member: JSON.parse(JSON.stringify(member)) }
    }

}