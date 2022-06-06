import ModularForm from '../components/ModularForm'
import { memberData } from "../src/utils/formData";

const addmember = () => {
  return (
    <ModularForm data={memberData} />
  )
}

export default addmember