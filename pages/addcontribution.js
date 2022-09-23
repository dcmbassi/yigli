import Container from '@mui/material/Container'

import Member from '../models/memberModel'
import dbConnect from '../db/connect'
import AddContributionForm from '../components/forms/AddContributionForm'
import Meta from '../layouts/Meta'


const addcontribution = ({members}) => {
    return (
        <Container>
            <Meta />
            <AddContributionForm members={members}/>
        </Container>
    )
}

export const getServerSideProps = async () => {
    await dbConnect()
  
    const members = await Member.find().lean()
  
    return {
      props: {
        members: JSON.parse(JSON.stringify(members)),
      }
    }
  }
  

export default addcontribution