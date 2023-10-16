const model = {
    //? INPUTS
    app: {
      currentPage: 1,
      currentBelt: '',
      exercisePreference: '',
    },
    user: {
      id: null,
      loggedIn: false,
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
      exercisesFinished: [],
      trainingPreference: [],
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
    { id: 1, categoryId: 1, beltId: 1, name: "Guardstillinger / Benstillinger", nameJapanese: "Kamae / Ashi-Tachi" },
    { id: 2, categoryId: 1, beltId: 1, name: "Forflytninger", nameJapanese: "Tai-sabaki" },
    { id: 3, categoryId: 1, beltId: 1, name: "Fallteknikk" , nameJapanese: "Ukemi-waza" },
    { id: 4, categoryId: 1, beltId: 1, name: "Kast / Fellinger", nameJapanese: "Nage waza" },
    { id: 5, categoryId: 1, beltId: 1, name: "Slag", nameJapanese: "Tsuki waza" },
    { id: 6, categoryId: 1, beltId: 1, name: "Spark", nameJapanese: "Keri waza" },
    { id: 7, categoryId: 1, beltId: 1, name: "Mønster", nameJapanese: "Kata" },
    { id: 8, categoryId: 1, beltId: 1, name: "Blokkeringer" , nameJapanese: "Uke waza"  },

    { id: 9, categoryId: 2, beltId: 1, name: 'Forfra' },
    { id: 10, categoryId: 2, beltId: 1, name: 'Siden' },
    { id: 11, categoryId: 2, beltId: 1, name: 'Bakfra' },
    { id: 12, categoryId: 2, beltId: 1, name: 'Bakketeknikker' },

    { id: 13, categoryId: 3, beltId: 1, name: "Forsvar under press" }, 
  ],
  exercises: [
// Katagori 1 har 8 subtyper med totalt 27 øvelser: id 1 til 27
    // 3 øvelser under Guard/benstilling
    { id: 1, subtypeId: 1, name: "Forsvarsguard, åpne hender", nameJapanese: "Shuto", description: "" },
    // Neste to bare for nummerering
    { id: 2, subtypeId: 1, name: "Angrepsguard, lukkede hender" , nameJapanese: "Seiken" , description: "" },
    { id: 3, subtypeId: 1, name: "", nameJapanese: "", description: "" },

    // 4 Øvelser under Forflytninger 
    { id: 4, subtypeId: 1, name: "Sideforflytning", nameJapanese: "Yoko-ashi", description: "" },
    { id: 5, subtypeId: 1, name: "Kroppsvending", nameJapanese: "Sha-tenkan", description: "" },
    { id: 6, subtypeId: 1, name: "", nameJapanese: "", description: "" },
    { id: 7, subtypeId: 1, name: "", nameJapanese: "", description: "" },

    // osv for alle 8 subtypene under kategori 1, med totalt 27 øvelser . 

// Kategori 2 har 4 subtyper med totalt 22 øvelser: id 28 til 49
    // 4 subtyper 

    { id: 28, subtypeId: 9, name: "Forsvar mot hårtak", nameJapanese: null, description: "Høyre hånd holder motstanders høyre hånd +++ " }, 
    // + 11 øvelser til 
    { id: 40, subtypeId: 12, name: "Forsvar mot strupetak", nameJapanese: null, description: "Kun forflytninger med god avstand. Knyttneve ved spark-blokk" }, 
   



    { id: 2, subtypeId: 1, name: 'Guard2', description: 'Guard2' }, 
// Katagori 3 har 1 subtyper med totalt 1 øvelse med id 50
    { id: 50, subtypeId: 13, name: "Sirkeltrening" , description: ": Forsvar mot uavtalte kontaktgrep fra gult pensum." }, 
  ],
  media: [
    { id: 1, exerciseId: 1, caption: '511a', type:'img', detail:'guard2.png'},

  ],

};

