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
            <Box mt={2}>
                <Stack
                    spacing={2}
                    alignItems='flex-start'
                    direction={{ xs: 'column', md: 'row' }}
                >
                    <Box>
                        <Image
                            src='/img/sample.jpg'
                            alt='Placeholder pic'
                            width={200} height={200}
                        />
                    </Box>
                    <Stack
                        spacing={2}
                        justifyContent={{ xs: 'flex-start', md: 'space-between' }}
                        alignItems={{xs: 'flex-start', md: 'center'}}
                        direction={{ xs: 'column', md: 'row' }}
                    >
                        <Typography variant='h2'>
                            {`${member.firstName} ${member.lastName}`}
                        </Typography>
                        <Typography color='text.secondary'>
                            <LocationOnIcon mr={1} /> {member.address}
                        </Typography>
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