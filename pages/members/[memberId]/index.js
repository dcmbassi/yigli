import Image from "next/image";
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'
import MemberNameCell from "../../../components/MemberNameCell";
import MemberContributionCell from "../../../components/MemberContributionCell";

const MemberDetailsPage = ({ member }) => {
    console.log({ member })
    return (
        <Container>
            <Box mt={2} p={2} sx={{ width: '100%' }}>
                <Stack
                    spacing={2}
                    alignItems={{ xs: 'center', sm: 'flex-start' }}
                    direction={{ xs: 'column', sm: 'row', md: 'row' }}
                >
                    <Box >
                        <Image
                            src='/img/sample.jpg'
                            alt='Placeholder pic'
                            width={200} height={200}
                            layout='fixed'
                        />
                    </Box>
                    <Stack
                        flexGrow={1}
                        spacing={2}
                        sx={{ height: '200px' }}
                        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
                        alignItems='flex-start'
                    >
                        <MemberNameCell
                            memberName={`${member.firstName} ${member.lastName}`}
                            memberAddress={member.address}
                        />
                        <MemberContributionCell />
                    </Stack>
                </Stack>
            </Box>
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