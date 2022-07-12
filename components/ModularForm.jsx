import { useState, useEffect } from "react"
import submitForm from "../src/utils/formSubmission"

const ModularForm = (props) => {
    const { data, members } = props
    const [formValues, setFormValues] = useState(data.initialValues)
    const [successMessage, setSuccessMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const { title } = data

    useEffect(() => {
        if (success) setSuccessMessage(`${title} created`)
        setTimeout(() => {
            setSuccessMessage('')
            setSuccess(false)
        }, 2000)
    }, [success, title])

    const handleInputChange = e => {
        const value = e.target.value
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const resetFields = () => {
        setFormValues(data.initialValues)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        /*
            TO DO:
            1. Validate inputs
        */
        console.log(formValues)

        try {
            const result = await submitForm(data.endpoint, formValues)
            console.log(result)
            if (result.success) {
                setSuccess(true)
                resetFields()

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
                                            <input
                                                type={item.type}
                                                name={item.name}
                                                id={option.value}
                                                checked={formValues[item.name] === option.value}
                                                value={option.value}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor={option.value}>{option.key}</label>
                                        </p>
                                    ))}
                                </fieldset>
                            )
                            : item.type === 'select'
                                ? (
                                    <>
                                        <label htmlFor={item.name}>{item.displayedText}: </label>
                                        <select
                                            name={item.name}
                                            id={item.name}
                                            onChange={handleInputChange}
                                            value={formValues[item.name]}
                                        >
                                            <option value="">-- Choisissez un membre</option>
                                            {members.map(member => (
                                                <option key={member._id} value={member._id}>
                                                    {`${member.firstName} ${member.lastName}`}
                                                </option>
                                            ))}
                                        </select>
                                    </>
                                )
                                : (
                                    <>
                                        <label htmlFor={item.name}>{item.displayedText}: </label>
                                        <input
                                            type={item.type}
                                            name={item.name}
                                            id={item.name}
                                            value={formValues[item.name]}
                                            onChange={handleInputChange}
                                        />
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