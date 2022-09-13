const extractDate = (dateTimeString) => {
    const date = new Date(dateTimeString)

    let day = date.getDate()
    let month = date.getMonth() + 1
    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${day}/${month}/${date.getFullYear()}`
}

const prefillDate = (dateTimeString) => {
    const date = new Date(dateTimeString)

    let day = date.getDate()
    let month = date.getMonth() + 1
    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    return `${date.getFullYear()}-${month}-${day}`
}

const formatCurrency = (amount, currency = 'FCFA') => {
    return `${amount} ${currency}`
}

const addProperty = (propName, target, source) => {
    target[propName] = {...source}
}

export {
    extractDate,
    prefillDate,
    formatCurrency,
    addProperty
}