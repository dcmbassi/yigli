/*
    TO DO:
    1. Add path property to each exported constant
*/

export const memberFields = {
    fields: [
        {
            name: 'firstName',
            displayedText: 'Prénom',
            type: 'text'
        },
        {
            name: 'lastName',
            displayedText: 'Nom',
            type: 'text'
        },
        {
            name: 'email',
            displayedText: 'Email',
            type: 'email'
        },
        {
            name: 'password',
            displayedText: 'Mot de passe',
            type: 'password'
        },
        {
            name: 'address',
            displayedText: 'Adresse',
            type: 'text'
        },
        {
            name: 'sex',
            displayedText: 'Sexe',
            type: 'radio',
            options: [
                { value: 'female', key: 'F' },
                { value: 'male', key: 'M' }
            ]
        },
    ],
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        sex: ''
    }
}

export const meetingFields = {
    fields: [
        {
            name: 'date',
            displayedText: 'Date',
            type: 'date'
        },
        {
            name: 'location',
            displayedText: 'Lieu',
            type: 'text'
        },
    ],
    initialValues: {
        date: '',
        location: ''
    }
}