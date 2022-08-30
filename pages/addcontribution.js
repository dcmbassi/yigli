import Container from '@mui/material/Container'

import Member from '../models/memberModel'
import dbConnect from '../db/connect'
import AddContributionForm from '../components/forms/AddContributionForm'


const addcontribution = ({members}) => {
    return (
        <Container>
            <AddContributionForm members={members}/>
        </Container>
    )
}

export const getServerSideProps = async () => {
    await dbConnect()
  
    const memberResult = await Member.find()
    
    const members = memberResult.map(doc => {
      const member = doc.toObject()
      member._id = member._id.toString()
      return member
    })
  
    return {
      props: {
        members: JSON.parse(JSON.stringify(members)),
      }
    }
  }
  

export default addcontribution