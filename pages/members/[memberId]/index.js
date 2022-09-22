import Link from 'next/link';

import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import EditIcon from '@mui/icons-material/Edit'

import mongoose from 'mongoose'
import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'
import Contribution from '../../../models/contributionModel'
import MemberDetails from '../../../components/MemberDetails'

const MemberDetailsPage = ({ member, totalContribution }) => {
    const editUrl = `/members/${member._id}/edit`
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
            <MemberDetails
                member={member}
                totalContribution={totalContribution}
            />
        </Container>
    )
}

export default MemberDetailsPage

export const getServerSideProps = async (context) => {
    const { memberId } = context.params

    await dbConnect()

    const [member, totalContribution] = await Promise.all([
        Member.findById(memberId)
            .populate('parents', 'firstName lastName')
            .populate('children', 'firstName lastName')
            .lean(),
        Contribution.aggregate([
            { $match: { contributor: new mongoose.Types.ObjectId(memberId) } },
            { $group: { _id: null, totalAmount: { $sum: '$amount' } } }
        ])
    ])
    delete member.password
    
    return {
        props: {
            member: JSON.parse(JSON.stringify(member)),
            totalContribution: totalContribution[0].totalAmount
        }
    }
}