const model = {
        app: {
        currentPage: 'startPage',
    },
    inputs: {
        startPage: {
            id: 1,
            loggedIn: false,

        },

        registrationPage: {
            id: 2, 
            date: '2023-09-25',
            name: '',
            email: '',
            password: '',

        },
        loginPage: {
            id: 3,
            email: '',
            password: '',

        },
        userPage: {
            id: 4 ,
            myGrade: "Gult belte",
            title: null,
            description: null,
        },
        pensumPage: {
            id: 5 ,
            title: null,
            description: null,
        },
    },
    belts: [
        {id: 1, name: 'Gult belte'},
        {id: 2, name: 'Oransje belte'},
        {id: 3, name: 'Blått belte'},
        {id: 4, name: 'Brunt belte'},
        {id: 5, name: 'Svart belte'},
    ],
    categories: [
        {id: 1, name: 'Del A - Grunnteknikker'},
        {id: 2, name: 'Del B - Teknikktrening'},
        {id: 3, name: 'Del C - Selvforsvarstrening'},
    ],
    subtypes: [
        {id: 101, name: 'Guard', categoryId: 1},
        {id: 102, name: 'Forflyttninger', categoryId: 1},
        {id: 201, name: 'Forfra', categoryId: 2},
    ],
    exercises: [
        {id: 1, subtypeId: 101, name: 'Guardivei 1', description: 'Guardivei'},       
        {id: 2, subtypeId: 101, name: 'Guardivei 2', description: 'Guardivei'},        
        {id: 3, subtypeId: 101, name: 'Guardivei 3', description: 'Guardivei'},        
    ],
    images: [
        {id: 1, exerciseId: 1, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
        {id: 2, subtypeId: 1, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
        {id: 2, beltId: 1, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
        {id: 2, requirementId: 2, caption: 'jdfgdsg', fileName: 'fsjhgfdjk', },
    ],
};
  