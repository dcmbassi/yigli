import Meta from '../layouts/Meta'
import Member from '../models/memberModel'
import styles from '../styles/Home.module.css'
import dbConnect from '../db/connect'

export default function Home({members}) {

  return (
    <div className={styles.container}>
      <Meta description='Descendance de Jean-Baptiste Medoung' />

      <main className={styles.main}>
        {members.map(member => (
          <p key={member.email}>{member.email}</p>
        ))}
      </main>


    </div>
  )
}

export const getServerSideProps = async () => {
  await dbConnect()

  const result = await Member.find()
  const members = result.map(doc => {
    const member = doc.toObject()
    member._id = member._id.toString()
    return member
  })
  
  return { props: { members: JSON.parse(JSON.stringify(members)) } }
}
