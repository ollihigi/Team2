model.user.pensumPage.currentBelt = model.user.userPage.currentBelt;



const model = {
    //? INPUTS
    app: {
      currentPage: 1,
    },
    user: {
      id: 1,
      loggedIn: false,
      landingPage: {
        pageId: 1,
      },
    },
    
    

    registrationPage: {
      pageId: 2,
      date: '',
      name: '',
      email: '',
      password: '',
    },
    loginPage: {
      pageId: 3,
      email: '',
      password: '',
    },
    
    
    
    userPage: {
      pageId: 4,
      currentBelt: "Gult belte",
      categoryStatus: false,
      subtypeStatus: false,
      exercisesStatus: false,
      exercisePreference: 1,
    },
    pensumPage: {
      pageId: 5,
      currentBelt: '',
      exercisePreference: '',

    },

  //* DATA
  belts: [
    { id: 1, name: 'Gult belte' },
    { id: 2, name: 'Oransje belte' },
    { id: 3, name: 'Blått belte' },
    { id: 4, name: 'Brunt belte' },
    { id: 5, name: 'Svart belte' },
  ],
  categories: [
    { id: 1, name: 'Del A - Grunnteknikker' },
    { id: 2, name: 'Del B - Teknikktrening' },
    { id: 3, name: 'Del C - Selvforsvarstrening' },
  ],
  subtypes: [
    { id: 1, categoryId: 1, beltId: 1, name: 'Guard' },
    { id: 2, categoryId: 1, beltId: 1, name: 'Forfra' },
    { id: 3, categoryId: 2, beltId: 1, name: 'Angrep' },
  ],
  exercises: [
    { id: 1, subtypeId: 1, name: 'Guard1', description: 'Guard1' },
    { id: 2, subtypeId: 1, name: 'Guard2', description: 'Guard2' },
    { id: 3, subtypeId: 1, name: 'Guard3', description: 'Guard3' },
  ],
  images: [
    { id: 1, exerciseId: 1, caption: 'Guard1', fileName: 'guard1.png' },
    { id: 2, exerciseId: 2, caption: 'Guard2', fileName: 'guard2.png' },
    { id: 3, exerciseId: 3, caption: 'Guard3', fileName: 'guard3.png' },
  ],
  videos: [
    { id: 1, exerciseId: 1, caption: 'Guard1', fileName: 'guard1.mp4' },
    { id: 2, exerciseId: 2, caption: 'Guard2', fileName: 'guard2.mp4' },
    { id: 3, exerciseId: 3, caption: 'Guard3', fileName: 'guard3.mp4' },
  ],

};
