import Meta from '../layouts/Meta'
import Member from '../models/memberModel'
import styles from '../styles/Home.module.css'
import dbConnect from '../db/connect'
import Meeting from '../models/meetingModel'
import { extractDate } from '../src/utils/helpers'

export default function Home({ members, meetings }) {
  const futureMeetings = meetings.filter(meeting => meeting.upcoming)
  const pastMeetings = meetings.filter(meeting => !meeting.upcoming)

  return (
    <div className={styles.container}>
      <Meta description='Descendance de Jean-Baptiste Medoung' />

      <main className={styles.main}>
        <div>
          <h4>Prochaines réunions</h4>
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
            {futureMeetings.map(meeting => (
              <tr key={meeting._id}>
                <td>{extractDate(meeting.date)}</td>
                <td>{meeting.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {members.map(member => (
          <p key={member.email}>{member.email}</p>
        ))}
        <hr />
        <div>
          <h4>Réunions récentes</h4>
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
            {pastMeetings.map(meeting => (
              <tr key={meeting._id}>
                <td>{extractDate(meeting.date)}</td>
                <td>{meeting.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
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
