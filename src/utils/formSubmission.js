import axios from "axios"

const submitForm = async (endpoint, body) => {
    const {data} = await axios.post(endpoint, body, { headers: { 'Content-Type': 'application/json' } })
    return data
}

export default submitForm