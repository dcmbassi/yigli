import Meta from '../layouts/Meta'
import styles from '../styles/Home.module.css'
import dbConnect from '../db/connect'
import Meeting from '../models/meetingModel'
import Contribution from '../models/contributionModel'
import {formatCurrency } from '../src/utils/helpers'
import MeetingsTable from '../components/MeetingsTable'

export default function Home({ meetings, totalContributions}) {
    const futureMeetings = meetings.filter(meeting => meeting.upcoming)
    const pastMeetings = meetings.filter(meeting => !meeting.upcoming)

    return (
        <div className={styles.container}>
            <Meta description='Descendance de Jean-Baptiste Medoung' />

            <main className={styles.main}>
                <div>
                    <h4>Prochaines réunions</h4>
                    <MeetingsTable meetings={futureMeetings} />
                </div>
                
                <div>
                    <h4>Réunions récentes</h4>
                    <MeetingsTable meetings={pastMeetings} />
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    await dbConnect()

    const meetingResult = await Meeting.find().sort('-date')
    const totalContributions = await Contribution.aggregate([
        { $match: { amount: { $gte: 0 } } },
        { $group: { _id: null, totalAmount: { $sum: '$amount' } } }
    ])

    
    const meetings = meetingResult.map(doc => {
        const meeting = doc.toObject()
        meeting._id = meeting._id.toString()
        return meeting
    })

    return {
        props: {
            meetings: JSON.parse(JSON.stringify(meetings)),
            totalContributions: totalContributions[0].totalAmount
        }
    }
}
