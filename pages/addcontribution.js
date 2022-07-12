import ModularForm from '../components/ModularForm'
import Member from '../models/memberModel'
import styles from '../styles/Home.module.css'
import dbConnect from '../db/connect'
import { contributionFields } from "../src/utils/formData";


const addcontribution = ({members}) => {
    return (
        <main className={styles.main}>
            <ModularForm data={contributionFields} members={members}/>
        </main>
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