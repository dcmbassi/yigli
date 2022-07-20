import Image from "next/image";
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import dbConnect from "../../../db/connect"
import Member from '../../../models/memberModel'
import Typography from "@mui/material/Typography";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MemberDetailsPage = ({ member }) => {
    console.log({ member })
    return (
        <Container>
            <Box mt={2} p={2} sx={{ background: '#ddd', width: '100%' }}>
                <Stack
                    spacing={2}
                    alignItems='flex-start'
                    direction={{ xs: 'column', sm: 'row', md: 'row' }}
                >
                    <Box>
                        <Image
                            src='/img/sample.jpg'
                            alt='Placeholder pic'
                            width={200} height={200}
                        />
                    </Box>
                    <Stack
                        flexGrow={1}
                        spacing={2}
                        sx={{ height: '200px' }}
                        justifyContent='space-between'
                        alignItems='flex-start'
                    >
                        <Stack
                            sx={{ background: '#eee', width: '100%' }}
                            justifyContent={{ sm: 'flex-start', md: 'space-between' }}
                            alignItems={{ sm: 'flex-start', md: 'center' }}
                            direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        >
                            <Typography
                                sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }}
                            >
                                {`${member.firstName} ${member.lastName}`}
                            </Typography>
                            <Typography color='text.secondary'>
                                <LocationOnIcon mr={1} /> {member.address}
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography>
                                Contributions
                            </Typography>
                        </Stack>
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