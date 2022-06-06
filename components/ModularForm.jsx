import React from 'react'

const ModularForm = ({ data }) => {
    return (
        <form >
            {data.map(item => (
                <div key={item.name}>
                    {item.type === 'radio'
                        ? (
                            <fieldset>
                                <legend>{item.displayedText}</legend>
                                {item.options.map(option => (
                                    <p key={option.key}>
                                        <input type={item.type} name={item.name} id={option.value} value={option.value} />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </p>
                                ))}
                            </fieldset>
                        )
                        : (
                            <>
                                <label htmlFor={item.name}>{item.displayedText}</label>
                                <input type={item.type} name={item.name} id={item.name} />
                            </>
                        )
                    }
                </div>
            ))}
            <input type="submit" value="Enregistrer" />
        </form>
    )
}

export default ModularForm