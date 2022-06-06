export const memberFields = [
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
            {value: 'female', key: 'F'}, 
            {value: 'male', key: 'M'}
        ]
    },
]

export const meetingFields = [
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
]