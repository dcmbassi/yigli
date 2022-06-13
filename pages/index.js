import Meta from '../layouts/Meta'
import Member from '../models/memberModel'
import styles from '../styles/Home.module.css'
import dbConnect from '../db/connect'
import Meeting from '../models/meetingModel'

export default function Home({ members, meetings }) {

  return (
    <div className={styles.container}>
      <Meta description='Descendance de Jean-Baptiste Medoung' />

      <main className={styles.main}>
        {members.map(member => (
          <p key={member.email}>{member.email}</p>
        ))}
        <hr />
        <table>
          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Lieu
              </th>
            </tr>
          </thead>
          <tbody>
            {meetings.map(meeting => (
              <tr key={meeting._id}>
                <td>{meeting.date}</td>
                <td>{meeting.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>


    </div>
  )
}

export const getServerSideProps = async () => {
  await dbConnect()

  const memberResult = await Member.find()
  const meetingResult = await Meeting.find()

  const members = memberResult.map(doc => {
    const member = doc.toObject()
    member._id = member._id.toString()
    return member
  })

  const meetings = meetingResult.map(doc => {
    const meeting = doc.toObject()
    meeting._id = meeting._id.toString()
    return meeting
  })

  return {
    props: {
      members: JSON.parse(JSON.stringify(members)),
      meetings: JSON.parse(JSON.stringify(meetings))
    }
  }
}
