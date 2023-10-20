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
    { id: 4, name: 'Skadeforebyggende øvelser' },
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

    { id: 14, categoryId: 4, name: "Nivå 1" }, 
    { id: 15, categoryId: 4, name: "Nivå 2" }, 
    { id: 16, categoryId: 4, name: "Nivå 3" }, 
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
      numberTJK: '511a',
      withPartner: true,
      description: '511a Forsvar mot hårtak Høyre hånd holder motstanders høyre hånd. Venstre hånd på motstanders høyre albue. Gå først fram og så til siden. slik at motstander står bøyd framover. NB: Forsvarer står ikke med bøyd rygg!  Frigjøring her og gå deretter et steg fram og i fra.',
      medialink: 'images/Exercises/511a.png'
    },
    {
      id: 29,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot klestak',
      numberTJK: '511b',
      withPartner: true,
      description: '511b Forsvar mot klestak Venstre hånd på albue. Høyre hånd mot kroppen. Samtidig balansebrytning ut mot siden. Hoftene svinges bort fra Motstander (beskyttelse). Felling med Stor ytre benfelling.',
      medialink: ''
    },
    {
      id: 30,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak nedenfra',
      numberTJK: '511d',
      withPartner: true,
      description: '511d Forsvar mot handleddstak nedenfra Strekk ut armene og vri hendene utover mens du går ifra. Siden til. Husk å være avslappet i handledd.',
      medialink: ''
    },
    {
      id: 31,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak ovenfra',
      numberTJK: '511e',
      withPartner: true,
      description: '511e Forsvar mot håndleddstak ovenfra Høyre hånd over motstanders høyre håndledd, frigjør venstre hånd v.h.a. minste motstands vei • vektstangprinsippet. Venstre hånd holder igjen motstanders venstre hånd og frigjør høyre hånd v.h.a. minste motstands vei.',
      medialink: ''
    },
    {
      id: 32,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot strupetak',
      numberTJK: '512a',
      withPartner: true,
      description: '512a Forsvar mot strupetak Begge hender mot motstanders håndledd og press i sammen mens høyre bein på tå frem (beskyttelse) for så å skyve egen kropp i fra.',
      medialink: ''
    },
    {
      id: 33,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot strupetak mot vegg',
      numberTJK: '512b',
      withPartner: true,
      description: '512b Forsvar mot strupetak mot vegg Høyre hånd går over motstanders venstre hånd og under Motstanders høyre hånd. Kroppsvending samtidig som en vipper med begge armer. Avstand.',
      medialink: ''
    },
    {
      id: 34,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot omfavning over armene (stor ytre benfelling)',
      numberTJK: '513a',
      withPartner: true,
      description: '513a Hendene på hoftene, skyv i fra 45 grader til siden. Balansebrytning. Gå inn med stor ytre benfelling.',
      medialink: ''
    },
    {
      id: 35,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot omfavning over armene (stort hoftekast)',
      numberTJK: '513A',
      withPartner: true,
      description: '513 A Hendene på hoftene, skyv ifra 90 grader bakover. Balansebrytning. Inn og fell med stort hoftekast.',
      medialink: ''
    },
    {
      id: 36,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot rett slag, kroppsvending',
      numberTJK: '514a',
      withPartner: true,
      description: '514 a Rett slag, kroppsvending',
      medialink: ''
    },
    {
      id: 37,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot rett salg, sideforflytning',
      numberTJK: '514A',
      withPartner: true,
      description: '514 A Rett slag, sideforflytning',
      medialink: ''
    },
    {
      id: 38,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot rett spark, kroppsvending',
      numberTJK: '515a',
      withPartner: true,
      description: '515 a Rett spark, kroppsvending. Kun forflytninger med god avstand. Knyttneve ved spark-blokk.',
      medialink: ''
    },
    {
      id: 39,
      subtypeId: 9,
      CategoryId: 2,
      name: 'Forsvar mot rett spark, sideforflytning',
      numberTJK: '515A',
      withPartner: true,
      description: '515 A Rett spark, sideforflyttning. Kun forflytninger med god avstand. Knyttneve ved spark-blokk.',
      medialink: ''
    },
    {
      id: 40,
      subtypeId: 10,
      CategoryId: 2,
      name: 'Forsvar mot strupetak',
      numberTJK: '522a',
      withPartner: true,
      description: '522a Høyre hånd på skrått over bryst/skuldrer. Venstre hånd frigjør luftveiene. Glid i fra.',
      medialink: ''
    },
    {
      id: 41,
      subtypeId: 11,
      CategoryId: 2,
      name: 'Forsvar mot hårtak',
      numberTJK: '531a',
      withPartner: true,
      description: '531a Begge hender på Motstanders hånd, samtidig gå frem med venstre fot, bøy ned og rundt skarpt og raskt bend i Motstanders håndledd. og gå ifra.',
      medialink: ''
    },
    {
      id: 42,
      subtypeId: 11,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak',
      numberTJK: '531e',
      withPartner: true,
      description: '531e Gå fram til siden. Frigjør høyre hånd og gå videre mens en frigjør venstre hånd.',
      medialink: ''
    },
    {
      id: 43,
      subtypeId: 11,
      CategoryId: 2,
      name: 'Forsvar mot strupetak',
      numberTJK: '532a',
      withPartner: true,
      description: '532a Høyre hånd høyt opp samtidig en slags kroppsvending fram (45°) til siden.',
      medialink: ''
    },
    {
      id: 44,
      subtypeId: 11,
      CategoryId: 2,
      name: 'Forsvar mot strangulering med armen',
      numberTJK: '532c',
      withPartner: true,
      description: '532c Få luft med begge hender. Albuene inn til kroppen (ikke synke ned!) Ta med motstanders albue/skulder 180° ut til siden i tre halvsirkler, avstand.',
      medialink: ''
    },
    {
      id: 45,
      subtypeId: 11,
      CategoryId: 2,
      name: 'Forsvar mot omfavning over armene',
      numberTJK: '533a',
      withPartner: true,
      description: '533a Synke ned og samtidig låse med begge hender. Så smyge bakover og samtidig holde Motstanders høyre arm. Avstand.',
      medialink: ''
    },
    {
      id: 46,
      subtypeId: 12,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak, sittende skrevs over',
      numberTJK: '541f',
      withPartner: true,
      description: '541f Hoftestøt samtidig som armene frigjør seg ved en sirkelbevegelse. Begge hendene på hoftene for å ta imot, ansiktet til siden. 1) Skyv Motstander direkte til siden med begge under, eller 2) Skyv kneet ned med en hånd og dytt til siden med den andre hånden, samtidig med hoftestøt.',
      medialink: ''
    },
    {
      id: 47,
      subtypeId: 12,
      CategoryId: 2,
      name: 'Forsvar mot strupetak, på kne ved siden av',
      numberTJK: '542e',
      withPartner: true,
      description: '542e Venstre hånd pa motstanders høyre hånd. Høyre hånd i motsatt armhule, samtidig skyver knærne til motstanderen oppover og ned til siden (45°), stå opp og avstand.',
      medialink: ''
    },
    {
      id: 48,
      subtypeId: 12,
      CategoryId: 2,
      name: 'Forsvar mot strupetak, sittende skrevs over',
      numberTJK: '542f',
      withPartner: true,
      description: '542f Høyre hånd under Motstanders hender. Venstre hånd pa albue. Hoftestøt og skyv. Venstre hånd på hofte og høyre hånd på håndledd og et nytt hoftestøt mens en skyver og trekker',
      medialink: ''
    },
    {
      id: 49,
      subtypeId: 12,
      CategoryId: 2,
      name: 'Forsvar mot strupetak, sittende mellom bena',
      numberTJK: '542g',
      withPartner: true,
      description: '542g  Venstre hånd på Motstanders høyre hånd. Høyre hand i motsatt armhule. samtidig hoftene til side og enten: 1) Sakse med beina eller 2) Venstre fot på Motstanders høyre kne og strekk ut mens høyre fot skyver over',
      medialink: ''
    },

// Kategori 3 har 1 subtyper med totalt 1 øvelse med id 50
    { id: 50, subtypeId: 13, name: "Sirkeltrening", WithPartner: true, description: ": Forsvar mot uavtalte kontaktgrep fra gult pensum." },

    
    // Kategori 4 "Skadeforebyggende,( eller basisøvelser, generelle øvelser...) -> SubtypeID 4 indikerer "nivå 1"
    // Hentet fra to pdf på skadefri.no -> judo + Taekwondo. 
    // 
    {
      id: 51,
      subtypeID: 14,
      categoryID: 4,
      name: 'Knebøy',
      //https://skadefri.no/idretter/judo/skadefri-judo/
      medialink: '',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Innarbeide god knebøyteknikk',
      instructions: [
        'Ha hoftebreddes avstand mellom føttene',
        'Start bevegelsen fra hofta',
        'Ha kne over tå',
        'Tenk at du skal sette deg på en stol',
        'Hold ryggen rett',
      ],
    },
    {
      id: 52,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utfall forover',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre stabiliteten i bena',
      instructions: [
        'Gjør utfall forover',
        'Ha kne over tå',
        'Hold en oppreist stilling gjennom hele øvelsen',
      ],
    },
    {
      id: 53,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utfall bakover',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre stabiliteten i bena',
      instructions: [
        'Gjør utfall bakover',
        'Ha kne over tå',
        'Hold en oppreist stilling gjennom hele øvelsen',
      ],
    },
    {
      id: 54,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utfall sideveis',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre forflytninger og stabiliteten i bena',
      instructions: [
        'Gjør dype sidesteg til hver side',
        'Ha kne over tå',
      ],
    },
    {
      id: 55,
      subtypeID: 14,
      categoryID: 4,
      name: 'Stående roing',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Dra strikken bakover',
        'Ha lave skuldre',
        'Albuene inntil kroppen',
        'Klem skulderbladene sammen',
      ],
    },
    {
      id: 56,
      subtypeID: 14,
      categoryID: 4,
      name: 'Y oppover',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hev armene i Y-mønster',
        'Hold armene strake',
        'Hold overkroppen rett og skulderbuen lav',
        'Press skulderbladene sammen og ned i sluttstilling',
      ],
    },
    {
      id: 57,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utadrotasjon skulder',
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre kraft og kontroll i rotatorcuffen',
      instructions: [
        'Albue og skulder i 90 grader',
        'Beveg armene rolig nedover og oppover',
        'Utfordre deg med ulike typer baller og vekter',
      ],
    },
    {
      id: 58,
      subtypeID: 14,
      categoryID: 4,
      name: 'Nordic Hamstrings',
      repetitions: '3 x 3-5 repetisjoner',
      purpose: 'Styrke baksiden av lårene',
      instructions: [
        'Stå på knærne på en matte eller pute',
        'Hold kroppen rett',
        'Senk deg fremover, brems bevegelsen med baksiden av lårene',
        'Bruk armene for å skyve deg tilbake til utgangsstillingen',
      ],
    },
  ],
  // Trolig fjerner vi hele model.media, og legger media (video > img) under hver exercise
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

