import Container from '@mui/material/Container'

import ModularForm from '../components/ModularForm'
import Member from '../models/memberModel'
import styles from '../styles/Home.module.css'
import dbConnect from '../db/connect'
import { contributionFields } from "../src/utils/formData";
import AddContributionForm from '../components/forms/AddContributionForm'


const addcontribution = ({members}) => {
    return (
        <Container>
            {/* <ModularForm data={contributionFields} members={members}/> */}
            <AddContributionForm />
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