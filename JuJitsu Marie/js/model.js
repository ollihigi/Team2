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
    // 1 / 1 Guardstillinger / Benstillinger (Kamae / Ashi-Tachi)
    {
      id: 1,
      subtypesId: 1,
      CategoryId: 1,
      name: 'Forsvarsguard, åpne hender',
      nameJapanese: 'Shuto',
      withPartner: '',
      description: ''
    },
    {
      id: 2,
      subtypesId: 1,
      CategoryId: 1,
      name: 'Angrepsguard, lukkede hender',
      nameJapanese: 'Seiken',
      withPartner: '',
      description: ''
    },
    {
      id: 3,
      subtypesId: 1,
      CategoryId: 1,
      name: 'Grunnleggende stilling',
      nameJapanese: 'Zenkutsu-dachi',
      withPartner: '',
      description: ''
    },
    // 2 / 1 Forflytninger (Tai-sabaki)
    {
      id: 4,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Sideforflytning',
      nameJapanese: 'Yoko-ashi',
      withPartner: '',
      description: ''
    },
    {
      id: 5,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Kroppsvending',
      nameJapanese: 'Sha-tenkan',
      withPartner: '',
      description: ''
    },
    {
      id: 6,
      subtypesId: 2,
      CategoryId: 1,
      name: '90 grader dreining',
      nameJapanese: 'Han-tenkan',
      withPartner: '',
      description: ''
    },
    {
      id: 7,
      subtypesId: 2,
      CategoryId: 1,
      name: '180 grader dreining',
      nameJapanese: 'Zen-tenkan',
      withPartner: '',
      description: ''
    },
    // 3 / 1 Fallteknikk (Ukemi-waza)
    {
      id: 8,
      subtypesId:3,
      CategoryId: 1,
      name: 'Sideveis fall',
      nameJapanese: 'Yoko ukemi',
      withPartner: false,
      description: ''
    },
    {
      id: 9,
      subtypesId: 3,
      CategoryId: 1,
      name: 'Forover fall',
      nameJapanese: 'Mae ukemi',
      withPartner: false,
      description: ''
    },
    {
      id: 10,
      subtypesId: 3,
      CategoryId: 1,
      name: 'Bakover fall',
      nameJapanese: 'Ushiro ukemi',
      withPartner: false,
      description: ''
    },
    {
      id: 11,
      subtypesId: 3,
      CategoryId: 1,
      name: 'Forover volt',
      nameJapanese: 'Kaiten mae ukemi',
      withPartner: false,
      description: ''
    },
    {
      id: 12,
      subtypesId: 3,
      CategoryId: 1,
      name: 'Bakover volt',
      nameJapanese: 'Kaiten ushiro ukemi',
      withPartner: false,
      description: ''
    },
    // 4 / 1 Kast / Fellinger (Nage waza)
    {
      id: 13,
      subtypesId: 4,
      CategoryId: 1,
      name: 'Stor ytre benfelling',
      nameJapanese: 'O soto o toshi',
      withPartner: true,
      description: ''
    },
    {
      id: 14,
      subtypesId: 4,
      CategoryId: 1,
      name: 'Stort hoftekast',
      nameJapanese: 'O goshi',
      withPartner: true,
      description: ''
    },
    // 5 / 1 Slag (Tsuki waza)
    {
      id: 15,
      subtypesId: 5,
      CategoryId: 1,
      name: 'Rett slag med fremste hånd',
      nameJapanese: 'Tobikomi zuki',
      withPartner: '',
      description: ''
    },
    {
      id: 16,
      subtypesId: 5,
      CategoryId: 1,
      name: 'Rett slag med bakerste hånd',
      nameJapanese: 'Gyaku zuki',
      withPartner: '',
      description: ''
    },
    {
      id: 17,
      subtypesId: 5,
      CategoryId: 1,
      name: 'Slagkombinasjon med rette slag',
      nameJapanese: 'Tobikomi zuki / Gyaku zuki',
      withPartner: '',
      description: ''
    },
    // 6 / 1 Spark (Keri waza)
    {
      id: 18,
      subtypesId: 6,
      CategoryId: 1,
      name: 'Grunnleggende rett spark med bakerste ben',
      nameJapanese: 'Gyaku mae geri',
      withPartner: '',
      description: ''
    },
    {
      id: 19,
      subtypesId: 6,
      CategoryId: 1,
      name: 'Grunnleggende rett spark med fremste ben',
      nameJapanese: 'Tsurikomi mae geri',
      withPartner: '',
      description: ''
    },
    // 7 / 1 Mønster (Kata)
    {
      id: 20,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Go kyu kata - Guard, fem retninger',
      nameJapanese: 'Zenkutsu-dachi / Shuto',
      withPartner: '',
      description: ''
    },
    // 8 / 1 Blokkeringer (Uke waza)
    {
      id: 21,
      subtypeId: 8, 
      CategoryId: 1,
      name: 'Lav blokk, innenfra og ut',
      nameJapanese: 'Gedan barai',
      withPartner: '',
      description: ''
    },
    {
      id: 22,
      subtypeId: 8, 
      CategoryId: 1,
      name: 'Mellom blokk, innenfra og ut',
      nameJapanese: 'Uchi-uke',
      withPartner: '',
      description: ''
    },
    {
      id: 23,
      subtypeId: 8, 
      CategoryId: 1,
      name: 'Høy blokk, nedenfra og opp',
      nameJapanese: 'Age-uke',
      withPartner: '',
      description: ''
    },
    {
      id: 24,
      subtypeId: 8, 
      CategoryId: 1,
      name: 'Mellom blokk, utenfra og inn',
      nameJapanese: 'Soto-uke',
      withPartner: '',
      description: ''
    },
    {
      id: 25,
      subtypeId: 8, 
      CategoryId: 1,
      name: 'Lav blokk, unenfra og inn',
      nameJapanese: 'Sukui-uke',
      withPartner: '',
      description: ''
    },
    {
      id: 26,
      subtypeId: 8, 
      CategoryId: 1,
      name: 'Lav kryssblokk, ovenfra og ned',
      nameJapanese: 'Gedan juji-uke',
      withPartner: '',
      description: ''
    },
    {
      id: 27,
      subtypeId: 8,
      CategoryId: 1,
      name: 'Høy kryssblokk, nedenfra and opp',
      nameJapanese: 'Jodan juji-uke',
      withPartner: '',
      description: ''
    },


// 
// Kategori 2 har 4 subtyper med totalt 22 øvelser: id 28 til 49
    // 4 subtyper 
    {
      id: 28,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot hårtak',
      nameTJK: '511a',
      withPartner: true,
      img: "images/Exercises/511a.png",
      description: '511a Forsvar mot hårtak Høyre hånd holder motstanders høyre hånd. Venstre hånd på motstanders høyre albue. Gå først fram og så til siden. slik at motstander står bøyd framover. NB: Forsvarer står ikke med bøyd rygg!  Frigjøring her og gå deretter et steg fram og i fra. '
    },
    
    // + 11 øvelser til 
    {
      id: 40,
      subtypeId: 10,
      CategoryId: 2,
      name: "Forsvar mot strupetak",
      nameTJK: '511a',
      withPartner: true,
      img: "images/Exercises/511a.png",
      description: "522a Høyre hånd på skrått over bryst/skuldre. Venstre hånd frigjør luftveiene. Glid i fra"
    },
    {
      id: 41,
      subtypeId: 10,
      CategoryId: 2,
      name: "Forsvar mot strupetak",
      nameTJK: '511a',
      withPartner: true,
      img: "images/Exercises/511a.png",
      description: "522a Høyre hånd på skrått over bryst/skuldre. Venstre hånd frigjør luftveiene. Glid i fra"
    },
    {
      id: 49,
      subtypeId: 10,
      CategoryId: 2,
      name: "Forsvar mot strupetak",
      nameTJK: '511a',
      withPartner: true,
      img: "images/Exercises/511a.png",
      description: "522a Høyre hånd på skrått over bryst/skuldre. Venstre hånd frigjør luftveiene. Glid i fra"
    },
   




// Katagori 3 har 1 subtyper med totalt 1 øvelse med id 50
    { id: 50, subtypeId: 13, name: "Sirkeltrening", WithPartner: true, description: ": Forsvar mot uavtalte kontaktgrep fra gult pensum." }, 
  ],
  media: [
    // 12 øvelser under katagori 2, subtype 1 FORFRA med id fra 1 til 12, med ExerciseID 28 til 39
    { id: 1, exerciseId: 28, 
      caption: '511a', type:'img', 
      src: "images/Exercises/511a.png"},

    // + 11 øvelser til 

    //1 øvelse under katagori 2, subtype 2 SIDEN med id 13
    {
      id: 13, exerciseId: 40,
      caption: '522a', type: 'img',
      src: "images/Exercises/522a.png"
    },
     // 5 øvelser under katagori 2, subtype 3 BAKFRA med id fra 14 til 18 og ExerciseID fra 41 til 45
    {
      id: 14, exerciseId: 41,
      caption: '531a', type: 'img',
      src: "images/Exercises/531a.png"
    },
     // 4 øvelser under katagori 2, subtype 4 BAKKETEKNIKKER med id fra 1 til 12
    {
      id: 19, exerciseId: 46,
      caption: '541f', type: 'img',
      src: "images/Exercises/541f.png"
    },
  ],

};

