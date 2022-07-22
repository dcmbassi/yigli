import Image from "next/image";
import Box from "@mui/material/Box"

const MemberImage = () => {
    /*
        TO DO:
        1. Extract image url from props
        2. Set Image src to url
        3. While image is being fetched, display blurred placeholder
    */
    return (
        <Box >
            <Image
                src='/img/sample.jpg'
                alt='Placeholder pic'
                width={200} height={200}
                layout='fixed'
            />
        </Box>
    )
}

export default MemberImage