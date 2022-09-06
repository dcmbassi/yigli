import Link from 'next/link';

import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import EditIcon from '@mui/icons-material/Edit'

import dbConnect from '../../../db/connect'
import Meeting from '../../../models/meetingModel'
import Member from '../../../models/memberModel'
import MeetingDetails from '../../../components/MeetingDetails';

const MeetingDetailsPage = ({ meeting }) => {
    const editUrl = `/meetings/${meeting._id}/edit`
    return (
        <Container>
            <Box px={4} mt={2} display='flex' justifyContent='flex-end'>
                <Link href={editUrl} passHref>
                    <Button
                        variant='outlined'
                        size='small'
                        startIcon={<EditIcon />}
                    >
                        Modifier
                    </Button>
                </Link>
            </Box>
            <MeetingDetails meeting={meeting} />
        </Container>
    )
}

export default MeetingDetailsPage

export const getServerSideProps = async (context) => {
    const { meetingId } = context.params

    await dbConnect()
    const [meeting] = await Promise.all([
        Meeting.findById(meetingId).populate('hosts').lean(),
        Member.find().lean()
    ])

    // const meeting = await Meeting.findById(meetingId).populate('hosts').lean()

    return {
        props: {
            meeting: JSON.parse(JSON.stringify(meeting))
        }
    }
}