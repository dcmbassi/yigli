import Member from '../../models/memberModel'
import styles from '../../styles/Home.module.css'
import dbConnect from '../../db/connect'
import Meta from '../../layouts/Meta'
import MembersGrid from '../../components/MembersGrid'

const MembersPage = ({members}) => {
  return (
    <div className={styles.container}>
        <Meta description="Membres de l\'association Yigli Family" />
        <MembersGrid members={members} />
    </div>
  )
}

export default MembersPage

export const getServerSideProps = async () => {
    await dbConnect()

    const memberResult = await Member.find()
    const members = memberResult.map(doc => {
        const member = doc.toObject()
        member._id = member._id.toString()
        return member
    })

    return {
        props: { members: JSON.parse(JSON.stringify(members)) }
    }
}