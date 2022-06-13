import { useState, useEffect } from "react"
import submitForm from "../src/utils/formSubmission"

const ModularForm = ({ data }) => {
    const [formValues, setFormValues] = useState(data.initialValues)
    const [successMessage, setSuccessMessage] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (success) setSuccessMessage('Resource created')
        setTimeout(() => {
            setSuccessMessage('')
            setSuccess(false)
        }, 2000)
    }, [success])

    const handleInputChange = e => {
        const value = e.target.value
        setFormValues({...formValues, [e.target.name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault()

        /*
            TO DO:
            1. Validate inputs
        */
        
        try {
            const result = await submitForm(data.endpoint, formValues)
            console.log(result)
            if (result.success) {
                setSuccess(true)
                setFormValues(data.initialValues)
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {data.fields.map(item => (
                <div key={item.name}>
                    {item.type === 'radio'
                        ? (
                            <fieldset>
                                <legend>{item.displayedText}</legend>
                                {item.options.map(option => (
                                    <p key={option.key}>
                                        <input type={item.type} name={item.name} id={option.value} value={option.value} onChange={handleInputChange} />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </p>
                                ))}
                            </fieldset>
                        )
                        : (
                            <>
                                <label htmlFor={item.name}>{item.displayedText}: </label>
                                <input type={item.type} name={item.name} id={item.name} value={formValues[item.name]} onChange={handleInputChange} />
                            </>
                        )
                    }
                    <br />
                    <br />
                </div>
            ))}
            <input type="submit" value="Enregistrer" />
        </form>
        <p>{successMessage}</p>
        </>
    )
}

export default ModularForm