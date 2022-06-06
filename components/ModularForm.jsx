import { useState } from "react"


const ModularForm = ({ data }) => {
    const [formValues, setFormValues] = useState(data.initialValues)

    const handleInputChange = e => {
        const value = e.target.value
        setFormValues({...formValues, [e.target.name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        console.log(formValues);
    }

    return (
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
    )
}

export default ModularForm