export interface ItalianDish {
  id: number;
  name: string;
  description: string;
  region: string;
  image: string;
  ingredients: string[];
  linkToRecipe: string;
  type: "Antipasto" | "Primo" | "Secondo" | "Dolce" | "Snack";
}

export const italianDishes: Record<number, Record<number, ItalianDish>> = {
  0: {
    1: {
      id: 1,
      name: "Paté di riso",
      description: "Hearty first course from Sicilia.",
      region: "Sicilia",
      image:
        "https://mfgqkpukzigjcouxakjh.supabase.co/storage/v1/object/public/ricette-di-sicilia/images/recipe/pate-di-riso-catanese/it/large.webp",
      linkToRecipe:
        "https://blog.giallozafferano.it/tanedolceamara/pate-di-riso-al-ragu/",
      ingredients: [
        "Riso",
        "Ragù di carne",
        "Piselli",
        "Formaggio (tuma/provola)",
        "Uova",
        "Pasta sfoglia",
        "Burro/olio",
        "Parmigiano",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Salsiccia pasqualora",
      description: "Traditional Partinico sausage with lamb and pork notes.",
      region: "Sicilia",
      image:
        "https://www.intavoliamo.it/Info/images/joomlart/article/7fb770f34c796f7501d3cf0f0dc39075.jpg",
      linkToRecipe:
        "https://www.intavoliamo.it/Info/prodotti-tipici-siciliani/salsiccia-pasqualora",
      ingredients: [
        "Carne macinata mista (maiale + manzo/agnello)",
        "Semi di finocchio",
        "Sale",
        "Pepe nero",
        "Peperoncino",
        "Vino bianco",
      ],
      type: "Secondo",
    },
    3: {
      id: 3,
      name: "Caponata",
      description: "Sweet-and-sour eggplant relish, a Sicilian classic.",
      region: "Sicilia",
      image: "https://ptps.stbm.it/t/ypvtqh_large.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Caponata.html",
      ingredients: [
        "Melanzane",
        "Sedano",
        "Cipolla",
        "Pomodori",
        "Olive verdi",
        "Capperi",
        "Aceto",
        "Zucchero",
        "Basilico",
        "Olio extravergine d'oliva",
      ],
      type: "Antipasto",
    },
    4: {
      id: 4,
      name: "Arancino",
      description: "Golden fried rice ball stuffed with ragù and cheese.",
      region: "Sicilia",
      image: "https://ptps.stbm.it/t/rt4nws_large.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Arancini-di-riso.html",
      ingredients: [
        "Riso",
        "Zafferano",
        "Ragù",
        "Piselli",
        "Mozzarella o caciocavallo",
        "Uova",
        "Pangrattato",
        "Farina",
        "Olio per friggere",
      ],
      type: "Snack",
    },
    5: {
      id: 5,
      name: "Canestrato (formaggio siciliano)",
      description: "Rustic Sicilian cheese traditionally shaped in baskets.",
      region: "Sicilia",
      image: "http://www.formaggio.it/wp-content/uploads/2013/09/223.jpg",
      linkToRecipe: "https://www.caseificiolacava.it/canestrato-siciliano/",
      ingredients: ["Latte di pecora (e/o vacca)", "Caglio", "Sale"],
      type: "Antipasto",
    },
    6: {
      id: 6,
      name: "Agnello pasquale (dolce)",
      description: "Marzipan lamb dessert typical of Easter in Sicily.",
      region: "Sicilia",
      image:
        "https://www.tuorlorosso.it/wp-content/uploads/2024/03/Agnello-di-Favara-3.jpg",
      linkToRecipe: "https://www.tuorlorosso.it/agnello-pasquale-di-favara/",
      ingredients: [
        "Farina di mandorle (pasta reale)",
        "Zucchero a velo",
        "Pasta/farina di pistacchio",
        "Glucosio",
        "Acqua",
        "Vaniglia",
      ],
      type: "Dolce",
    },
    7: {
      id: 7,
      name: "Braciole alla messinese",
      description:
        "Messina-style beef rolls with a savory breadcrumb-and-cheese filling.",
      region: "Sicilia",
      image:
        "https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2025/08/braciole-alla-messinese/Braciole%20alla%20messinese-1.jpg",
      linkToRecipe: "https://www.cucchiaio.it/ricetta/braciole-alla-messinese/",
      ingredients: [
        "Fette sottili di manzo",
        "Pangrattato",
        "Pecorino siciliano",
        "Caciocavallo",
        "Prezzemolo",
        "Aglio",
        "Olio extravergine d'oliva",
        "Sale",
        "Pepe",
      ],
      type: "Secondo",
    },
    8: {
      id: 8,
      name: "Sfincione di riso",
      description:
        "Fried rice sweet from eastern Sicily, often made for festivities.",
      region: "Sicilia",
      image:
        "https://www.tuorlorosso.it/wp-content/uploads/2025/02/Sfinci-di-riso-messinesi-1.jpg",
      linkToRecipe: "https://www.tuorlorosso.it/sfinci-di-riso-messinesi/",
      ingredients: [
        "Riso",
        "Latte",
        "Farina",
        "Zucchero",
        "Lievito per dolci",
        "Scorza d'arancia",
        "Cannella",
        "Olio per friggere",
        "Zucchero per finire",
      ],
      type: "Dolce",
    },
    9: {
      id: 9,
      name: "Salsiccia pasqualora partinicese",
      description:
        "Local Partinico variant blending pork with lamb and wild fennel.",
      region: "Sicilia",
      image:
        "https://mfgqkpukzigjcouxakjh.supabase.co/storage/v1/object/public/ricette-di-sicilia/images/article/salsiccia-sasizza-pasqualora/it/large.webp",
      linkToRecipe:
        "https://ricettedisicilia.org/salsiccia-sasizza-pasqualora/",
      ingredients: [
        "Carne di maiale",
        "Carne di agnello",
        "Finocchietto selvatico",
        "Sale",
        "Pepe nero",
        "Vino bianco (Catarratto)",
      ],
      type: "Secondo",
    },
    10: {
      id: 10,
      name: "Parmigiana di melanzane",
      description: "Layered baked eggplant with tomato sauce and cheese.",
      region: "Sicilia",
      image:
        "https://blog.giallozafferano.it/ilchiccodimais/wp-content/uploads/2020/07/parmigiana-di-melanzane-alla-siciliana-ricetta-originale-semplice-con-melanzane-fritte-pomodoro-e-formaggio-il-chicco-di-mais.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/ilchiccodimais/parmigiana-di-melanzane-alla-siciliana/",
      ingredients: [
        "Melanzane",
        "Salsa di pomodoro",
        "Mozzarella",
        "Parmigiano",
        "Basilico",
        "Olio per friggere",
        "Sale",
      ],
      type: "Antipasto",
    },
    11: {
      id: 11,
      name: "Focaccia messinese",
      description:
        "Soft Messina focaccia with escarole, anchovies, tomatoes and tuma.",
      region: "Sicilia",
      image:
        "https://www.soniaperonaci.it/wp-content/uploads/2021/11/Focaccia-messinese-6-960x1440.jpg.webp",
      linkToRecipe: "https://www.soniaperonaci.it/focaccia-alla-messinese/",
      ingredients: [
        "Farina (00/semola)",
        "Acqua",
        "Lievito",
        "Sale",
        "Olio/strutto",
        "Scarola",
        "Pomodorini",
        "Tuma/primo sale",
        "Acciughe",
        "Origano",
      ],
      type: "Snack",
    },
    12: {
      id: 12,
      name: "Formaggio di Santo Stefano di Quisquina",
      description:
        "Mountain cheese from the Sicani area, traditionally sheep’s milk-based.",
      region: "Sicilia",
      image:
        "http://www.formaggio.it/wp-content/uploads/2013/09/Quisquina-300x270.jpg",
      linkToRecipe:
        "https://www.formaggio.it/formaggio/formaggio-di-s-stefano-di-quisquina-p-a-t/",
      ingredients: ["Latte di pecora", "Caglio", "Sale"],
      type: "Antipasto",
    },
    13: {
      id: 13,
      name: "Biscotto savoiardo",
      description: "Light sponge biscuits used in classic Italian desserts.",
      region: "Sicilia",
      image: "https://ptps.stbm.it/t/0m5199_large.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Savoiardi.html",
      ingredients: [
        "Uova",
        "Zucchero",
        "Farina 00",
        "Fecola di patate",
        "Vaniglia",
        "Zucchero a velo",
      ],
      type: "Dolce",
    },
    14: {
      id: 14,
      name: "Pagnotta alla disgraziata",
      description:
        "Rustic seasoned bread (also known as pane cunzato / pane disgraziato).",
      region: "Sicilia",
      image: "https://ptps.stbm.it/t/24qctr_large.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Pane-cunzato.html",
      ingredients: [
        "Pane di semola",
        "Pomodori",
        "Formaggio primo sale",
        "Acciughe",
        "Origano",
        "Olio extravergine d'oliva",
        "Sale",
        "Pepe",
      ],
      type: "Snack",
    },
    15: {
      id: 15,
      name: "Focaccia nissena",
      description: "Caltanissetta-style stuffed bread, hearty and savory.",
      region: "Sicilia",
      image: "https://ptps.stbm.it/t/ggq6g8_large.jpg",
      linkToRecipe: "https://giusinaincucina.com/scacciata-nissena/",
      ingredients: [
        "Semola di grano duro",
        "Lievito",
        "Patata",
        "Uovo",
        "Tuma/primo sale",
        "Salsiccia",
        "Spinaci",
        "Olive nere",
        "Pecorino",
      ],
      type: "Snack",
    },
    16: {
      id: 16,
      name: "Formaggio di capra siciliana",
      description:
        "Goat cheese—fresh and tangy, common across Sicilian countryside tables.",
      region: "Sicilia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmkx-9taIXZm6hjIYHdl7AQe8xwh_-MB_Vw&s",
      linkToRecipe:
        "https://altacucina.co/recipes/formaggio-di-capra-fatto-in-casa",
      ingredients: [
        "Latte di capra",
        "Caglio",
        "Fermenti lattici (opz.)",
        "Sale",
      ],
      type: "Antipasto",
    },
    17: {
      id: 17,
      name: "Gelato",
      description: "Classic Italian gelato, creamy and intensely flavored.",
      region: "Sicilia",
      image:
        "https://www.tavolartegusto.it/wp/wp-content/uploads/2020/04/Gelato-fatto-in-casa-Ricetta-Gelato.jpg",
      linkToRecipe:
        "https://www.tavolartegusto.it/ricetta/gelato-fatto-in-casa-ricetta/",
      ingredients: [
        "Latte intero",
        "Panna",
        "Zucchero",
        "Vaniglia",
        "(opz.) Tuorli d'uovo",
      ],
      type: "Dolce",
    },
    18: {
      id: 18,
      name: "Stocco alla ghiotta",
      description:
        "Messina-style stockfish stew with potatoes, olives and capers.",
      region: "Sicilia",
      image:
        "https://www.sicilianicreativiincucina.it/wp-content/uploads/2025/09/pesce-stocco-ghiotta-585x439.jpg",
      linkToRecipe:
        "https://www.sicilianicreativiincucina.it/pesce-stocco-a-ghiotta-alla-messinese/",
      ingredients: [
        "Stoccafisso ammollato",
        "Patate",
        "Passata di pomodoro",
        "Sedano",
        "Cipolla",
        "Olive",
        "Capperi",
        "Olio extravergine d'oliva",
        "Prezzemolo",
      ],
      type: "Secondo",
    },
    19: {
      id: 19,
      name: "Spina santa (dolce)",
      description:
        "Rare convent pastry from Caltanissetta, rediscovered in modern times.",
      region: "Sicilia",
      image:
        "https://media.izi.travel/2c4a405a-8d74-4783-817a-1666d51fb377/9c64fa45-fa5f-42bb-93f0-18dd9a7da28a_800x600.jpg",
      linkToRecipe: "https://www.youtube.com/watch?v=bI5StUwfvgk",
      ingredients: [
        "Mandorle",
        "Purea di cotogne o gelso",
        "Zucchero",
        "Miele",
        "Albume d'uovo",
      ],
      type: "Dolce",
    },
    20: {
      id: 20,
      name: "Rollò con würstel",
      description:
        "Soft Sicilian bakery roll wrapped around a würstel, a rosticceria staple.",
      region: "Sicilia",
      image:
        "https://www.tuorlorosso.it/wp-content/uploads/2020/10/Rollo-con-wurstel-3.jpg",
      linkToRecipe: "https://www.tuorlorosso.it/rollo-con-wurstel/",
      ingredients: [
        "Farina 00",
        "Acqua",
        "Lievito di birra",
        "Zucchero",
        "Strutto/burro",
        "Sale",
        "Würstel",
        "Uovo",
        "Semi di sesamo",
      ],
      type: "Snack",
    },
    21: {
      id: 21,
      name: "Torta Fedora",
      description:
        "Catania-style ricotta-filled sponge cake, elegant and rich.",
      region: "Sicilia",
      image:
        "https://www.soniaperonaci.it/wp-content/uploads/2021/08/Torta-Fedora-496x661.jpg.webp",
      linkToRecipe: "https://www.soniaperonaci.it/torta-fedora/",
      ingredients: [
        "Uova",
        "Zucchero",
        "Farina",
        "Fecola",
        "Ricotta di pecora",
        "Zucchero a velo",
        "Gocce di cioccolato",
        "Scorza d'arancia/limone",
        "Rum o liquore",
      ],
      type: "Dolce",
    },
    22: {
      id: 22,
      name: "Pignolata al miele",
      description: "Carnival-style fried dough nuggets coated in honey.",
      region: "Sicilia",
      image:
        "https://www.giallozafferano.it/images/164-16472/Pignolata-al-miele_780x520_wm.jpg",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Pignolata-al-miele.html",
      ingredients: [
        "Farina 00",
        "Uova",
        "Burro",
        "Zucchero",
        "Scorza di limone",
        "Grappa/liq.",
        "Olio per friggere",
        "Miele",
        "Confettini",
      ],
      type: "Dolce",
    },
    23: {
      id: 23,
      name: "Val di Mazara (olio di oliva)",
      description:
        "Sicilian DOP olive oil from the Val di Mazara area, ideal raw on bread.",
      region: "Sicilia",
      image:
        "https://www.bonodisicilia.it/wp-content/uploads/2023/12/dop_val_di_mazara_750ml_bono_di_sicilia.webp",
      linkToRecipe:
        "https://www.bonodisicilia.it/shop/olio-extravergine-oliva/olio-evo-dop/olio-dop-val-di-mazara-750-ml/",
      ingredients: [
        "Olio extravergine d'oliva DOP Val di Mazara",
        "Pane (per bruschetta)",
        "Pomodori (opz.)",
        "Sale",
        "Origano/basilico (opz.)",
      ],
      type: "Snack",
    },
    24: {
      id: 24,
      name: "Busiate col pesto trapanese",
      description:
        "Trapani-style pesto with tomatoes and almonds tossed with busiate.",
      region: "Sicilia",
      image:
        "https://www.donnafugata.it/wp-content/uploads/2016/08/Donnafugata-busiate-pesto-trapanese.jpg.webp",
      linkToRecipe:
        "https://www.donnafugata.it/it/recipe/busiate-al-pesto-trapanese/",
      ingredients: [
        "Busiate (pasta di semola)",
        "Pomodori maturi",
        "Mandorle",
        "Basilico",
        "Aglio",
        "Olio extravergine d'oliva",
        "Pecorino o ricotta salata",
        "Sale",
      ],
      type: "Primo",
    },
    25: {
      id: 25,
      name: "Pane cunzato",
      description:
        "Seasoned bread with tomatoes, anchovies, primo sale and oregano.",
      region: "Sicilia",
      image: "https://ptps.stbm.it/t/24qctr_large.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Pane-cunzato.html",
      ingredients: [
        "Pane",
        "Pomodori",
        "Primo sale",
        "Acciughe",
        "Origano",
        "Olio extravergine d'oliva",
        "Sale",
        "Pepe",
      ],
      type: "Snack",
    },
    26: {
      id: 26,
      name: "Pane nero di Castelvetrano",
      description:
        "Dark, aromatic Tumminia bread, traditionally topped with sesame.",
      region: "Sicilia",
      image:
        "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2014/12/pane-nero-di-castelvetrano/_jcr_content/header-par/image-single.img.jpg/1419924785002.jpg",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/pane-nero-di-castelvetrano/",
      ingredients: [
        "Farina di grano tumminia/timilia",
        "Semola rimacinata",
        "Acqua",
        "Lievito madre o lievito",
        "Sale",
        "Semi di sesamo",
      ],
      type: "Snack",
    },
    27: {
      id: 27,
      name: "Panella",
      description:
        "Palermo street-food chickpea fritters, crisp outside and tender within.",
      region: "Sicilia",
      image:
        "https://www.thepetitecook.com/wp-content/uploads/2023/09/panelle-recipe.jpg",
      linkToRecipe:
        "https://www.tavolartegusto.it/ricetta/panelle-la-ricetta-originale/",
      ingredients: [
        "Farina di ceci",
        "Acqua",
        "Sale",
        "Prezzemolo",
        "Pepe",
        "Olio per friggere",
      ],
      type: "Snack",
    },
    28: {
      id: 28,
      name: "Tarallo",
      description: "Sicilian sweet taralli, often glazed with lemony icing.",
      region: "Sicilia",
      image:
        "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/3c57fca27cc8cca5c8e88320679db8b2/Derivates/56bd227b9099e4ed8c92604a10c0d0680a5d3d6e.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Taralli-siciliani.html",
      ingredients: [
        "Farina 00",
        "Zucchero",
        "Burro o strutto",
        "Uova",
        "Ammoniaca per dolci/lievito",
        "Latte",
        "Scorza di limone",
        "Glassa (zucchero a velo + limone)",
      ],
      type: "Snack",
    },
    29: {
      id: 29,
      name: "Timballo",
      description: "Oven-baked rice timbale, rich and celebratory.",
      region: "Sicilia",
      image:
        "https://www.giallozafferano.it/images/269-26967/Timballo-di-riso_780x520_wm.jpg",
      linkToRecipe:
        "https://www.casapappagallo.it/ricette/timballo-di-riso-semplice",
      ingredients: [
        "Riso",
        "Ragù o sugo di pomodoro",
        "Carne macinata",
        "Piselli",
        "Formaggio (mozzarella/provola)",
        "Uova sode (opz.)",
        "Parmigiano",
        "Burro",
        "Pangrattato",
      ],
      type: "Primo",
    },
    30: {
      id: 30,
      name: "Vastedda fritta",
      description:
        "Fried Sicilian bread/dough pocket, often with anchovy inside.",
      region: "Sicilia",
      image:
        "https://blog.giallozafferano.it/cannellaegelsomino/wp-content/uploads/2022/11/idda2-320x205.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/cannellaegelsomino/mitilugghia-o-vastedda-fritta-un-piatto-del-ricordo/",
      ingredients: [
        "Semola di grano duro",
        "Acqua",
        "Lievito madre/lievito",
        "Sale",
        "Acciughe salate (ripieno trad.)",
        "Olio per friggere",
      ],
      type: "Snack",
    },
    31: {
      id: 31,
      name: "Aglio rosso di Nubia",
      description:
        "Pungent red garlic from the Trapani area, prized for its intensity.",
      region: "Sicilia",
      image:
        "https://www.agliorossodinubia-produttori.com/public/aglio/2016-07-12_175938.jpg",
      linkToRecipe:
        "https://www.agliorossodinubia-produttori.com/index.asp?cat=10&pag=blog",
      ingredients: [
        "Aglio rosso di Nubia",
        "Olio extravergine d'oliva",
        "Sale",
        "(opz.) Pomodoro e basilico (per bruschetta)",
      ],
      type: "Snack",
    },
  },
  1: {
    1: {
      id: 1,
      name: "Zuppa gallurese",
      description: "Hearty soup from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.giallozafferano.it/images/201-20129/Zuppa-gallurese_780x520_wm.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Zuppa-gallurese.html",
      ingredients: [
        "Day-old bread",
        "Pecorino Sardo",
        "Casizolu (or similar cheese)",
        "Lamb/pecora broth",
        "Black pepper",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Trippa di mare",
      description: "Meat main from Sardegna.",
      region: "Sardegna",
      image:
        "https://immagini.unionesarda.it/version/c:MDk3Yjk0OTgtOTM2Ni00:N2VmNDZiNDMtZDg2Zi00/image.webp?f=3%3A2&q=0.75&w=640",
      linkToRecipe:
        "https://www.unionesarda.it/bella-sardegna/ricette-sarde/trippa-alla-sarda-la-ricetta-della-tradizione-cofupluc",
      ingredients: [
        "Beef tripe",
        "Tomato passata",
        "Onion",
        "Garlic",
        "Mint or bay leaf",
        "Pecorino Sardo",
        "Olive oil",
        "Salt",
      ],
      type: "Secondo",
    },
    3: {
      id: 3,
      name: "Viticoltura in Sardegna",
      description: "Seafood main from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJxSuyEd-gtZWzhkj5ElBZIvwXFjoj35wZA&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Viticoltura_in_Sardegna",
      ingredients: [
        "Grapes (Cannonau, Vermentino, etc.)",
        "Yeast",
        "Water",
        "Oak (optional aging)",
        "Time",
      ],
      type: "Snack",
    },
    4: {
      id: 4,
      name: "Focaccia sarda ripiena",
      description: "Classic street food from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.lalunasulcucchiaio.it/wp-content/uploads/2021/08/foto-12-08-21-12-51-56-scaled-e1629710184272.jpg",
      linkToRecipe:
        "https://www.lalunasulcucchiaio.it/2021/08/focaccia-ripiena-sarda.html",
      ingredients: [
        "Durum wheat semolina flour",
        "Type 0 flour",
        "Water",
        "Olive oil",
        "Salt",
        "Tomatoes",
        "Garlic",
        "Basil",
      ],
      type: "Snack",
    },
    5: {
      id: 5,
      name: "Testa in cassetta",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://intavoliamo.it/Info/images/joomlart/article/3d9a979b1c7ae6adda1ab5edd6c87151.jpg",
      linkToRecipe:
        "https://intavoliamo.it/Info/prodotti-tipici-sardi/testa-in-cassetta",
      ingredients: [
        "Pork head meat (head/tongue/cheeks)",
        "Salt",
        "Pepper",
        "Garlic",
        "Spices (coriander/cloves/nutmeg)",
        "Broth/water",
      ],
      type: "Snack",
    },
    6: {
      id: 6,
      name: "Agnello di Sardegna",
      description: "Seafood main from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.ilgiornaledelcibo.it/wp-content/uploads/2014/06/agnello-in-umido.jpg",
      linkToRecipe:
        "https://www.ilgiornaledelcibo.it/ricetta/agnello-in-umido/",
      ingredients: [
        "Lamb pieces",
        "Onion",
        "Garlic",
        "Carrot",
        "Dried tomatoes",
        "White wine",
        "Wild fennel",
        "Saffron",
        "Olive oil",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    7: {
      id: 7,
      name: "Pane 'e poddine",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://media.lacucinaitaliana.com/photos/5fa12408040f5971b0d9ad60/2:1/w_1200,c_limit/Spianata%20sarda.jpg",
      linkToRecipe:
        "https://www.lacucinaitaliana.com/italian-food/italian-dishes/pane-modde-sardinia-flatbread",
      ingredients: [
        "Durum wheat semolina flour",
        "Water",
        "Sourdough starter (or yeast)",
        "Salt",
        "Olive oil (optional)",
      ],
      type: "Snack",
    },
    8: {
      id: 8,
      name: "Carciofo spinoso di Sardegna",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image: "https://ptps.stbm.it/t/xlx853_large.jpg",
      linkToRecipe:
        "https://www.arborea1956.com/ricette/carciofi-alla-sassarese/",
      ingredients: [
        "Spiny Sardinian artichokes",
        "Potatoes",
        "Garlic",
        "Parsley",
        "Lemon",
        "Chili (optional)",
        "Olive oil",
        "Salt",
      ],
      type: "Snack",
    },
    9: {
      id: 9,
      name: "Pane carasau",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7GvzRvasYJJioN_cF90P9VGR4GIZF2WXGg&s",
      linkToRecipe: "https://www.cookist.it/pane-carasau/",
      ingredients: ["Durum wheat semolina", "Water", "Yeast/sourdough", "Salt"],
      type: "Snack",
    },
    10: {
      id: 10,
      name: "Pane fratau",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBIMZGyFfCNg4XW1Q5o21OPpA6sDHURMk5w&s",
      linkToRecipe: "https://www.cucchiaio.it/ricetta/pane-frattau/",
      ingredients: [
        "Pane carasau",
        "Pecorino Sardo",
        "Tomato sauce",
        "Poached egg",
        "Broth (optional)",
        "Olive oil",
      ],
      type: "Snack",
    },
    11: {
      id: 11,
      name: "Andarinos",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.andronaco.de/media/7e/b0/5c/1753695629/sarde-16-9.webp",
      linkToRecipe:
        "https://www.unionesarda.it/bella-sardegna/ricette-sarde/andarinos-la-tradizione-della-pasta-di-oriolo-i31yx0co",
      ingredients: [
        "Semola di grano duro",
        "Water",
        "Salt",
        "Tomato sauce",
        "Sausage or pork (optional)",
        "Pecorino Sardo",
      ],
      type: "Snack",
    },
    12: {
      id: 12,
      name: "Bottarga",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.casapappagallo.it/storage/14385/crostini-con-bottarga-di-cefalo.jpg",
      linkToRecipe:
        "https://www.arborea1956.com/ricette/crostini-alla-bottarga/",
      ingredients: [
        "Bottarga (mullet roe)",
        "Bread slices",
        "Ricotta (optional)",
        "Lemon",
        "Olive oil",
        "Black pepper",
      ],
      type: "Antipasto",
    },
    13: {
      id: 13,
      name: "Buzzonaglia",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.gommonauti.it/imm/33533/1365226750_ricetta_buzzonaglia_di_tonno_ad_insalata.jpg",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/ricetta/primo/buzzonaglia/",
      ingredients: [
        "Buzzonaglia (tuna meat)",
        "Tomatoes",
        "Garlic",
        "Olive oil",
        "Parsley",
        "Chili (optional)",
        "Salt",
      ],
      type: "Snack",
    },
    14: {
      id: 14,
      name: "Cascà",
      description: "Seafood main from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-casca-carloforte/_jcr_content/header-par/image_single.img.jpg/1410276414302.jpg",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-casca-carloforte/",
      ingredients: [
        "Couscous/semolina",
        "Chickpeas",
        "Seasonal vegetables (cabbage, carrots, zucchini, etc.)",
        "Spices (cinnamon/clove)",
        "Olive oil",
        "Herbs (marjoram/fennel)",
        "Salt",
      ],
      type: "Secondo",
    },
    15: {
      id: 15,
      name: "Casu axedu",
      description: "Seafood main from Sardegna.",
      region: "Sardegna",
      image:
        "https://as1.ftcdn.net/jpg/01/63/62/92/1000_F_163629201_PmyxzNdXYhuj4TYyUoryImzxDWLflM50.jpg",
      linkToRecipe:
        "https://www.unionesarda.it/bella-sardegna/ricette-sarde/casu-axedhu-il-formaggio-sardo-da-latte-acerbo-la-ricetta-fcndg2wy",
      ingredients: [
        "Casu axedu (sour fresh cheese)",
        "Milk",
        "Rennet",
        "Salt",
        "Bread (to serve)",
        "Olive oil (optional)",
      ],
      type: "Secondo",
    },
    16: {
      id: 16,
      name: "Casu marzu",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd936hcl0ve-7kR9f5iI9CCsq9dB6v9Z_gQ&s",
      linkToRecipe: "https://www.laveneradipinna.com/casu-marzu",
      ingredients: [
        "Pecorino/Fior Sardo base cheese",
        "Cheese fly larvae (traditional)",
        "Bread (to serve)",
        "Red wine (pairing)",
      ],
      type: "Antipasto",
    },
    17: {
      id: 17,
      name: "Cipolla di Banari",
      description: "Classic street food from Sardegna.",
      region: "Sardegna",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKAlQItrBiP7GAUapVJsSWxjAn5qR2UQmMx6PxLAeciFHrMpNTLP7G5SFtbSTB_A31tSVPm46Hfc4LVGr2fFazBcVYYkFj07MADQIrcxsNM4Hk-8KcibS-8dEbsxYxTDibQuBBZpMuRK_4/s1600/DSC_0384.JPG",
      linkToRecipe:
        "https://www.arborea1956.com/ricette/cibuddau-o-cipolla-sarda/",
      ingredients: [
        "Onions (Banari)",
        "Tomato passata",
        "Olive oil",
        "Garlic",
        "Salt",
        "Bread (to serve)",
        "Pecorino (optional)",
      ],
      type: "Snack",
    },
    18: {
      id: 18,
      name: "Civraxu",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://cdn.agrodolce.it/houUW7HNd0oMZSwq8-m09A48UD4=/1150x647/smart/https://www.agrodolce.it/app/uploads/2020/05/pane-civraxiu.jpg",
      linkToRecipe: "https://www.agrodolce.it/ricette/pane-civraxiu-pane-sardo",
      ingredients: [
        "Durum wheat semolina flour",
        "Water",
        "Sourdough/yeast",
        "Salt",
        "Olive oil (optional)",
      ],
      type: "Snack",
    },
    19: {
      id: 19,
      name: "Cocói a pitzus",
      description: "Classic street food from Sardegna.",
      region: "Sardegna",
      image:
        "https://blog.giallozafferano.it/unavitaincucina/wp-content/uploads/2025/04/1000077208-960x720.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/unavitaincucina/ricetta-pane-coccoi/",
      ingredients: [
        "Durum wheat semolina",
        "Water",
        "Yeast/sourdough",
        "Salt",
        "Egg (optional decoration)",
      ],
      type: "Snack",
    },
    20: {
      id: 20,
      name: "Filindeu",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzm_lQJi0YH4XiGbiwK8i9WY6WSQbm20oaA&s",
      linkToRecipe: "https://www.arborea1956.com/ricette/filindeu/",
      ingredients: [
        "Filindeu pasta",
        "Sheep broth",
        "Pecorino/Gran Campidano",
        "Carrot",
        "Celery",
        "Onion",
        "Parsley",
      ],
      type: "Snack",
    },
    21: {
      id: 21,
      name: "Filu 'e ferru",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.ricettedisardegna.it/wp-content/uploads/2021/06/Gamberi-al-filu-e-ferru.jpg",
      linkToRecipe:
        "https://www.ricettedisardegna.it/recipe/pere-al-filu-e-ferru/",
      ingredients: [
        "Gamberi",
        "Pears",
        "Filu 'e ferru (Sardinian spirit)",
        "Sugar",
        "Lemon",
        "Water",
      ],
      type: "Snack",
    },
    22: {
      id: 22,
      name: "Formaggi sardi",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkapjB6g78ThzSsutc5ylUYS2f0w6KSyHWRg&s",
      linkToRecipe:
        "https://www.pecorinosardo.it/ricette/antipasti/93/pecorino-sardo-dolce-dop-grigliato-miele-e-noci",
      ingredients: [
        "Pecorino Sardo Dolce DOP",
        "Honey",
        "Walnuts",
        "Rustic bread",
        "Olive oil (optional)",
      ],
      type: "Antipasto",
    },
    23: {
      id: 23,
      name: "Gathulis",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://immagini.unionesarda.it/version/c:NzU5ODhmMzQtZjZkNS00:MzdiZGRkMzgtZjA4YS00/image.webp?f=3%3A2&q=0.75&w=640",
      linkToRecipe:
        "https://www.unionesarda.it/bella-sardegna/ricette-sarde/i-gathulis-fritti-delizia-tipica-ogliastrina-y21otkdl",
      ingredients: [
        "Potatoes",
        "Semolina",
        "Casu axedu (aged) or cheese",
        "Salt",
        "Oil for frying",
      ],
      type: "Snack",
    },
    24: {
      id: 24,
      name: "Gnummareddi",
      description: "Meat main from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgZFYrZpHSYXis2CAgGVoNa6OdW77Ut8ePA&s",
      linkToRecipe: "https://www.cookist.it/torcinelli/",
      ingredients: [
        "Lamb or kid offal",
        "Intestine casing",
        "Parsley",
        "Garlic",
        "Olive oil",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    25: {
      id: 25,
      name: "Ispinada",
      description: "Meat main from Sardegna.",
      region: "Sardegna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf4uZR73wRYGqLgj_ioCZEJ82tEM-gxQpgw&s",
      linkToRecipe:
        "https://www.arborea1956.com/ricette/ispinada-di-carne-di-pecora/",
      ingredients: [
        "Sheep meat (lean + fatty cuts)",
        "Olive oil",
        "Salt",
        "Metal skewers",
      ],
      type: "Secondo",
    },
    26: {
      id: 26,
      name: "Lattume",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.arborea1956.com/wp-content/uploads/2025/05/lattume-di-tonno-1.jpg",
      linkToRecipe:
        "https://www.arborea1956.com/ricette/lattume-di-tonno-fritto/",
      ingredients: [
        "Tuna milt (lattume)",
        "Lemon",
        "Semolina (for coating)",
        "Frying oil",
        "Salt",
      ],
      type: "Secondo",
    },
    27: {
      id: 27,
      name: "Macarrones de busa",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.ricettedisardegna.it/wp-content/uploads/2021/06/maccarrones-de-busa-a-sa-sarda.jpg",
      linkToRecipe:
        "https://www.ricettedisardegna.it/recipe/maccarrones-de-busa-a-sa-sarda/",
      ingredients: [
        "Maccarrones de busa (pasta)",
        "Pork meat",
        "Onion",
        "Tomato passata",
        "Vernaccia wine",
        "Saffron",
        "Olive oil",
        "Pecorino",
        "Salt",
      ],
      type: "Primo",
    },
    28: {
      id: 28,
      name: "Mosciame",
      description: "Regional specialty from Sardegna.",
      region: "Sardegna",
      image:
        "https://www.biancopalato.it/wp-content/uploads/2017/11/misticanza-tonno-pinoli.jpg",
      linkToRecipe:
        "https://www.biancopalato.it/mosciame-di-tonno-rosso-e-pinoli/",
      ingredients: [
        "Mosciame (tuna bresaola)",
        "Mixed salad greens",
        "Pine nuts",
        "Olive oil",
        "Lemon",
        "Black pepper",
      ],
      type: "Antipasto",
    },
  },
  2: {
    1: {
      id: 1,
      name: "Pesce spada alla ghiotta",
      description: "Seafood main from Calabria.",
      region: "Calabria",
      image:
        "https://blog.giallozafferano.it/cucinanonnavirgi/wp-content/uploads/2015/02/pesce-spada-alla-ghiotta-1024x683.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/cucinanonnavirgi/pesce-spada-alla-ghiotta-ricetta/",
      ingredients: [
        "Swordfish",
        "Tomatoes",
        "Onion",
        "Capers",
        "Green olives",
        "Olive oil",
        "Oregano/parsley",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    2: {
      id: 2,
      name: "Salame crudo di Albidona",
      description: "Savory starter from Calabria; Albidona-based.",
      region: "Calabria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKatE6LxmRwQcLGeQbVnrtiZEFMkmDkD__jA&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Salame_crudo_di_Albidona",
      ingredients: ["Pork", "Salt", "Black pepper", "Spices", "Natural casing"],
      type: "Antipasto",
    },
    3: {
      id: 3,
      name: "Frittole (gastronomia calabrese)",
      description: "Classic street food from Calabria.",
      region: "Calabria",
      image: "https://www.chocoginger.com/wp-content/uploads/2015/02/6.jpg",
      linkToRecipe:
        "https://www.cookist.it/frittole-calabresi-il-piatto-di-recupero-che-ha-una-sua-confraternita/",
      ingredients: [
        "Mixed pork cuts (incl. rind/offal)",
        "Salt",
        "Pepper",
        "Chili (optional)",
        "Orange peel (optional)",
      ],
      type: "Snack",
    },
    4: {
      id: 4,
      name: "Polpette alla mammolese",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://wips.plug.it/cips/buonissimo.org/cms/2012/01/polpette-alla-mammolese.jpg?w=713&a=c&h=407",
      linkToRecipe:
        "https://www.buonissimo.it/lericette/2621_Polpette_alla_Mammolese",
      ingredients: [
        "Ground pork",
        "Eggs",
        "Soaked stale bread",
        "Goat cheese",
        "Garlic",
        "Chili",
        "Parsley",
        "Tomato sauce",
        "Olive oil",
      ],
      type: "Secondo",
    },
    5: {
      id: 5,
      name: "Salame pezzente",
      description: "Savory starter from Calabria.",
      region: "Calabria",
      image:
        "https://blog.giallozafferano.it/chiwawa69/wp-content/uploads/2021/09/P9220055-1779x1334.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/chiwawa69/cose-e-come-si-fa-la-salsiccia-pezzente/",
      ingredients: [
        "Pork (fatty cuts)",
        "Sweet paprika/pepper powder",
        "Salt",
        "Garlic (optional)",
        "Wild fennel (optional)",
        "Casing",
      ],
      type: "Antipasto",
    },
    6: {
      id: 6,
      name: "Gazzosa al caffè",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tkMRiuV5qyxGJmuG-IlSywUJpItbZzN-Eg&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Gazzosa_al_caff%C3%A8",
      ingredients: [
        "Sparkling lemonade (gazzosa)",
        "Coffee syrup/espresso",
        "Sugar (optional)",
        "Ice",
        "Lemon slice (optional)",
      ],
      type: "Snack",
    },
    7: {
      id: 7,
      name: "Bruschetta",
      description: "Savory starter from Calabria.",
      region: "Calabria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/1280px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Bruschetta",
      ingredients: [
        "Toasted bread",
        "Tomatoes (optional)",
        "Garlic",
        "Olive oil",
        "Salt",
        "Oregano/basil",
      ],
      type: "Antipasto",
    },
    8: {
      id: 8,
      name: "Ciccioli",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Ciccioli.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Ciccioli",
      ingredients: [
        "Pork fat/skin trimmings",
        "Salt",
        "Pepper",
        "Spices (optional)",
      ],
      type: "Snack",
    },
    9: {
      id: 9,
      name: "Frittella di fiori di zucca",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Frittelle_di_fiori_di_zucca.JPG/960px-Frittelle_di_fiori_di_zucca.JPG",
      linkToRecipe: "https://it.wikipedia.org/wiki/Frittella_di_fiori_di_zucca",
      ingredients: [
        "Zucchini flowers",
        "Flour",
        "Water (or sparkling water)",
        "Salt",
        "Olive oil (or frying oil)",
      ],
      type: "Antipasto",
    },
    10: {
      id: 10,
      name: "Pane di castagne",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Pane_di_castagne_e_noci.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Pane_di_castagne",
      ingredients: [
        "Chestnut flour",
        "Wheat flour (optional)",
        "Water",
        "Yeast/sourdough",
        "Salt",
      ],
      type: "Snack",
    },
    11: {
      id: 11,
      name: "'Nduja",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://blog.giallozafferano.it/incucinaconmire/wp-content/uploads/2016/02/IMG_2028-Nduja.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/incucinaconmire/nduja-calabrese-ricetta/",
      ingredients: [
        "Pork (fatty cuts)",
        "Pork belly/lard",
        "Calabrian chili peppers",
        "Salt",
        "Casing",
      ],
      type: "Antipasto",
    },
    12: {
      id: 12,
      name: "'Nzuddha",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://blog.giallozafferano.it/lemilleunapassione/wp-content/uploads/2014/01/DSC00555-1024x681.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/lemilleunapassione/ricetta-mostaccioli-o-nzuddha/",
      ingredients: [
        "Flour",
        "Honey",
        "Anise liqueur (or anise)",
        "Lard/butter",
        "Spices (optional)",
        "Baking agent (optional)",
      ],
      type: "Dolce",
    },
    13: {
      id: 13,
      name: "'mbignulata",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.thespruceeats.com/thmb/_IFjHcwf-KsIHW91gJ3hXbQM9ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Struffoli2-59e6108a22fa3a0011d6e0b7.JPG",
      linkToRecipe: "https://it.wikipedia.org/wiki/%27mbignulata",
      ingredients: [
        "Dough (flour, oil)",
        "Honey or vincotto",
        "Orange zest",
        "Spices (optional)",
        "Frying oil",
      ],
      type: "Dolce",
    },
    14: {
      id: 14,
      name: "Acquasale",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.giallozafferano.it/images/170-17052/Acquasale_780x520_wm.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Acquasale.html",
      ingredients: [
        "Stale bread",
        "Tomatoes",
        "Cucumber (optional)",
        "Celery",
        "Red onion",
        "Olive oil",
        "Salt",
        "Oregano/basil",
      ],
      type: "Snack",
    },
    15: {
      id: 15,
      name: "Alto Crotonese",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://wineandtravelitaly.com/wp-content/uploads/2021/07/speciality-specialite-alto-crotonese-4.png",
      linkToRecipe: "https://it.wikipedia.org/wiki/Alto_Crotonese",
      ingredients: ["Local seasonal ingredients", "Olive oil", "Bread"],
      type: "Snack",
    },
    16: {
      id: 16,
      name: "Bergamino",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.kaeseleckerland.de/shop/images/products/main/detail/Bergamino%20di%20Bufala%20online%20kaufen.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Bergamino",
      ingredients: [
        "Bergamot/bergamino (local citrus)",
        "Sugar (optional)",
        "Water (optional)",
      ],
      type: "Snack",
    },
    17: {
      id: 17,
      name: "Bocconotto",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.giallozafferano.it/images/206-20693/Bocconotti_780x520_wm.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Bocconotti.html",
      ingredients: [
        "Shortcrust pastry",
        "Jam (grape/cherry)",
        "Dark chocolate (optional)",
        "Almonds",
        "Sugar",
        "Eggs",
      ],
      type: "Dolce",
    },
    18: {
      id: 18,
      name: "Cartellate",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.tavolartegusto.it/wp/wp-content/uploads/2025/12/cartellate.jpg",
      linkToRecipe: "https://www.tavolartegusto.it/ricetta/cartellate/",
      ingredients: [
        "Flour",
        "White wine",
        "Olive oil",
        "Frying oil",
        "Vincotto (or honey)",
        "Cinnamon/cloves (optional)",
      ],
      type: "Dolce",
    },
    19: {
      id: 19,
      name: "Cavatelli",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Noto%2C_Cavatelli_pomodoro_ricotta_salata_%28cropped%29.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cavatelli",
      ingredients: [
        "Durum wheat semolina",
        "Water",
        "Salt",
        "Sauce/condiment of choice",
      ],
      type: "Primo",
    },
    20: {
      id: 20,
      name: "Ciambotta",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.giallozafferano.it/images/194-19447/Ciambotta_780x520_wm.jpg",
      linkToRecipe: "https://ricette.giallozafferano.it/Ciambotta.html",
      ingredients: [
        "Peppers",
        "Eggplant",
        "Zucchini",
        "Potatoes",
        "Tomatoes",
        "Onion",
        "Olive oil",
        "Basil",
        "Salt",
      ],
      type: "Secondo",
    },
    21: {
      id: 21,
      name: "Clementine di Calabria",
      description: "Regional specialty from Calabria; Calabria-based.",
      region: "Calabria",
      image:
        "https://www.possidentefruit.it/wp-content/uploads/2022/12/clementine-di-calabria.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Clementine_di_Calabria",
      ingredients: ["Clementines (Calabria)"],
      type: "Snack",
    },
    22: {
      id: 22,
      name: "Crema reggina",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://media-cdn2.greatbritishchefs.com/media/ni0kggst/img81900.whqc_900x600q90.webp",
      linkToRecipe:
        "https://www.greatitalianchefs.com/recipes/crema-reggina-recipe",
      ingredients: [
        "Milk",
        "Cream",
        "Egg yolks",
        "Sugar",
        "Rum",
        "Vanilla",
        "Candied fruit",
        "Dark chocolate",
      ],
      type: "Dolce",
    },
    23: {
      id: 23,
      name: "Cuccìa (Calabria)",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.lucianopignataro.it/wp-content/uploads/2017/05/Cuccia.jpg",
      linkToRecipe:
        "https://www.lucianopignataro.it/a/ricetta-cuccia-calabria/124592/",
      ingredients: [
        "Wheat berries",
        "Goat meat (traditional variant)",
        "Onion",
        "Celery",
        "Spices",
        "Olive oil",
        "Salt",
      ],
      type: "Secondo",
    },
    24: {
      id: 24,
      name: "Cudduraci",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://blog.giallozafferano.it/annaelasuacucina/wp-content/uploads/2021/03/IMG_6424-720x1077.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/annaelasuacucina/cudduraci-calabresi-dolci-pasquali-con-vermouth/",
      ingredients: [
        "Flour",
        "Sugar",
        "Eggs",
        "Butter/lard",
        "Milk",
        "Baking powder",
        "Vermouth (optional)",
        "Hard-boiled eggs (decoration)",
        "Sprinkles",
      ],
      type: "Dolce",
    },
    25: {
      id: 25,
      name: "Cupeta",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.calabriadascoprire.it/wp-content/uploads/2015/12/cupeta-calabrese.jpg",
      linkToRecipe:
        "https://www.calabriadascoprire.it/il-torrone-di-natale-la-cupeta-calabrese/",
      ingredients: [
        "Sesame seeds",
        "Vino cotto/mosto cotto",
        "Honey",
        "Sugar",
        "Almonds",
        "Walnuts",
      ],
      type: "Dolce",
    },
    26: {
      id: 26,
      name: "Cuzzupa",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.soniaperonaci.it/wp-content/uploads/2020/04/Cuzzupa-3.jpg.webp",
      linkToRecipe: "https://www.soniaperonaci.it/cuzzupe-calabresi/",
      ingredients: [
        "Flour",
        "Sugar",
        "Eggs",
        "Milk",
        "Butter/lard",
        "Baking powder",
        "Citrus zest",
        "Hard-boiled eggs (decoration)",
        "Sprinkles",
      ],
      type: "Dolce",
    },
    27: {
      id: 27,
      name: "Fileja",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHgUP29bzVjd9IKW5wZX48UTBCJgCKE5C0w&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Fileja",
      ingredients: [
        "Durum wheat semolina",
        "Water",
        "Salt",
        "Tomato sauce (traditional pairing)",
        "Nduja (optional)",
      ],
      type: "Primo",
    },
    28: {
      id: 28,
      name: "Frisella",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Frisella_secca.jpg/1280px-Frisella_secca.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Frisella",
      ingredients: [
        "Friselle (twice-baked bread)",
        "Water (to soften)",
        "Tomatoes",
        "Olive oil",
        "Oregano",
        "Salt",
      ],
      type: "Snack",
    },
    29: {
      id: 29,
      name: "Grossa di Gerace",
      description: "Regional specialty from Calabria; Gerace-based.",
      region: "Calabria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeb0kmUpoHAH-Bb_6ZKhqrAwALHjby33bRoQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Grossa_di_Gerace",
      ingredients: ["Grapes (Grossa di Gerace)"],
      type: "Snack",
    },
    30: {
      id: 30,
      name: "Lacia",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Laci.JPG/1280px-Laci.JPG",
      linkToRecipe: "https://it.wikipedia.org/wiki/Lacia",
      ingredients: [
        "Flour/semolina",
        "Water",
        "Salt",
        "Sauce/condiment of choice",
      ],
      type: "Primo",
    },
    31: {
      id: 31,
      name: "Risu d’Azata",
      description: "Regional specialty from Calabria.",
      region: "Calabria",
      image:
        "https://www.ilgiardinodellacultura.com/wp-content/uploads/2025/02/Giornata-Mondiale-Risu-dAzata.png",
      linkToRecipe:
        "https://www.ilgiardinodellacultura.com/2025/02/25/settimana-risu-d-azata-lamezia/",
      ingredients: ["Local seasonal ingredients", "Rice", "Bread"],
      type: "Snack",
    },
  },
  3: {
    1: {
      id: 1,
      name: "Zuppa di soffritto",
      description: "Hearty soup from Campania.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lucianopignataro.it/a/il-soffritto-di-maiale-e-le-interiora-quinto-quarto/20991/",
      ingredients: [
        "Pork offal (heart/liver/lung)",
        "Tomato concentrate or passata",
        "Sweet & hot peppers",
        "Broth",
        "Olive oil",
        "Garlic",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Riso al forno",
      description: "Baked rice dish from Basilicata.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.misya.info/ricetta/riso-al-forno.htm",
      ingredients: [
        "Rice (Carnaroli)",
        "Tomato passata",
        "Mozzarella or scamorza",
        "Parmigiano",
        "Garlic",
        "Basil",
      ],
      type: "Primo",
    },
    3: {
      id: 3,
      name: "Coniglio all'ischitana",
      description: "Ischia-style rabbit stew with tomatoes and herbs.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-coniglio-allischitana/",
      ingredients: [
        "Rabbit (pieces)",
        "Cherry tomatoes",
        "Garlic",
        "White wine",
        "Basil",
        "Olive oil",
      ],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Baccalà alla lucana",
      description: "Salt cod cooked Lucania-style with peppers and olive oil.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.buonissimo.it/lericette/1090_Baccala_alla_lucana",
      ingredients: [
        "Salt cod (baccalà)",
        "Peppers (incl. cruschi if available)",
        "Olive oil",
        "Garlic",
        "Chili",
        "Parsley",
      ],
      type: "Secondo",
    },
    5: {
      id: 5,
      name: "Frittata di scammaro",
      description: "Lenten-style ‘frittata’ traditionally made without eggs.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Frittata-di-scammaro.html",
      ingredients: [
        "Spaghetti or vermicelli",
        "Olives (Gaeta)",
        "Capers",
        "Anchovy fillets",
        "Pine nuts",
        "Raisins",
      ],
      type: "Primo",
    },
    6: {
      id: 6,
      name: "Cassata di Oplontis (dolce)",
      description: "Ricotta-based dessert from the Vesuvian area.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lucianopignataro.it/a/cassata-di-oplontis/5191/",
      ingredients: [
        "Sheep ricotta",
        "Honey",
        "Dried apricots",
        "Candied citron",
        "Walnuts",
        "Pine nuts",
      ],
      type: "Dolce",
    },
    7: {
      id: 7,
      name: "Alla marinara",
      description: "Simple tomato-garlic-oregano ‘marinara’ style.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.casapappagallo.it/ricette/pasta-alla-marinara",
      ingredients: [
        "Tomatoes (pelati/passata)",
        "Garlic",
        "Oregano",
        "Olive oil",
        "Chili (optional)",
        "Basil",
      ],
      type: "Primo",
    },
    8: {
      id: 8,
      name: "Porchetta",
      description: "Herb-stuffed roast pork, classic street-food and roast.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.insideat.eu/it/porchetta-fatta-in-casa-ricetta-procedura-passo-per-passo-segreti-e-tecniche/",
      ingredients: [
        "Pork belly/loin (porchetta cut)",
        "Wild fennel",
        "Garlic",
        "Rosemary",
        "Salt",
        "Black pepper",
      ],
      type: "Secondo",
    },
    9: {
      id: 9,
      name: "Prosciutto di Trevico",
      description: "Cured ham specialty from Trevico (Irpinia/Campania).",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.donnamoderna.com/come-fare-il-prosciutto-crudo-in-casa-437371",
      ingredients: [
        "Pork leg (for prosciutto)",
        "Sea salt",
        "Black pepper",
        "Lard/sugna for sugnatura",
        "Time",
        "Air-drying environment",
      ],
      type: "Snack",
    },
    10: {
      id: 10,
      name: "Biscotto di Castellammare",
      description:
        "Traditional Castellammare-style biscuit, often dunked before eating.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://grandenapoli.it/il-biscotto-di-castellammare-la-storia-gli-ingredienti-e-la-ricetta/",
      ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Water (lightly sparkling, traditional)",
        "Baking ammonia or baking powder",
        "Vanilla/lemon zest",
      ],
      type: "Dolce",
    },
    11: {
      id: 11,
      name: "Zucchine alla scapece",
      description: "Fried zucchini marinated with vinegar, mint, and garlic.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Zucchine-a-scapece.html",
      ingredients: [
        "Zucchini",
        "White wine vinegar",
        "Mint",
        "Garlic",
        "Olive oil",
        "Salt",
      ],
      type: "Antipasto",
    },
    12: {
      id: 12,
      name: "Salsiccia Lucanica di Picerno",
      description:
        "Lucanica-style sausage specialty from Picerno (Basilicata).",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/dolcegiuridica/cavatelli-con-sugo-di-lucanica-igp-di-picerno/",
      ingredients: [
        "Lucanica di Picerno",
        "Tomato passata",
        "Onion",
        "Carrot",
        "Celery",
        "White wine",
      ],
      type: "Secondo",
    },
    13: {
      id: 13,
      name: "Prosciutto di Venticano",
      description:
        "Cured ham specialty associated with Venticano (Irpinia/Campania).",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.salumikings.it/ricette/involtini-di-prosciutto-crudo-3-ricette-veloci/",
      ingredients: [
        "Prosciutto crudo",
        "Cream cheese or mozzarella",
        "Arugula",
        "Olive oil",
        "Lemon",
        "Black pepper",
      ],
      type: "Snack",
    },
    14: {
      id: 14,
      name: "Tortano",
      description:
        "Savory Neapolitan ring bread stuffed with cured meats and cheese.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cucchiaio.it/ricetta/ricetta-tortano/",
      ingredients: [
        "Flour",
        "Water",
        "Yeast",
        "Lard/strutto",
        "Salami",
        "Provolone",
      ],
      type: "Snack",
    },
    15: {
      id: 15,
      name: "Mozzarella in carrozza",
      description: "Fried mozzarella sandwich, crisp outside and gooey inside.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Mozzarella-in-carrozza.html",
      ingredients: [
        "Sliced bread (pancarrè)",
        "Mozzarella",
        "Eggs",
        "Flour",
        "Breadcrumbs",
        "Peanut oil (for frying)",
      ],
      type: "Antipasto",
    },
    16: {
      id: 16,
      name: "Salsiccia lucana",
      description:
        "Basilicata-style sausage, often cooked or used in rich sauces.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.anticasalumeriadelcorso.com/2023/01/26/ragu-di-salsiccia-lucana/",
      ingredients: [
        "Lucanica sausage",
        "Tomato passata",
        "Onion",
        "Olive oil",
        "White wine",
        "Chili/pepper",
      ],
      type: "Secondo",
    },
    17: {
      id: 17,
      name: "Uova in Purgatorio",
      description:
        "Eggs poached in a spicy tomato sauce, Neapolitan comfort food.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/allacciateilgrembiule/uova-in-purgatorio/",
      ingredients: [
        "Eggs",
        "Tomato passata",
        "Garlic",
        "Olive oil",
        "Basil",
        "Salt",
      ],
      type: "Secondo",
    },
    18: {
      id: 18,
      name: "Delizia al limone",
      description:
        "Amalfi Coast lemon dome dessert with lemon cream and glaze.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Delizie-al-limone.html",
      ingredients: [
        "Eggs",
        "Sugar",
        "Flour",
        "Lemons (Amalfi/Sorrento)",
        "Pastry cream",
        "Whipping cream",
      ],
      type: "Dolce",
    },
    19: {
      id: 19,
      name: "Cialledda fredda",
      description:
        "Cold bread salad from Southern Italy (bread, tomatoes, veg, oregano).",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/ricettechepassione/ricetta-cialledda-fredda-materana/",
      ingredients: [
        "Stale bread (Pane di Matera)",
        "Tomatoes",
        "Cucumber",
        "Red onion",
        "Oregano",
        "Olive oil",
      ],
      type: "Primo",
    },
    20: {
      id: 20,
      name: "Mallone",
      description:
        "Rustic mix of greens and potatoes, typical Campanian countryside dish.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cookist.it/mallone/",
      ingredients: [
        "Broccoli rabe (cime di rapa)",
        "Potatoes",
        "Garlic",
        "Chili",
        "Olive oil",
        "Salt",
      ],
      type: "Primo",
    },
    21: {
      id: 21,
      name: "Pane di Calitri",
      description:
        "Traditional Irpinia bread, known for its robust crust and flavor.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://agricoltura.regione.campania.it/tipici/tradizionali/pane-calitri.html",
      ingredients: [
        "Durum wheat semolina/flour",
        "Sourdough starter (crescente)",
        "Water",
        "Salt",
      ],
      type: "Snack",
    },
    22: {
      id: 22,
      name: "Pane di Matera",
      description:
        "Famous Basilicata bread made with durum wheat semolina and natural fermentation.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/loscrignodelbuongusto/pane-di-matera/",
      ingredients: [
        "Durum wheat semolina (Senatore Cappelli)",
        "Sourdough starter",
        "Water",
        "Salt",
      ],
      type: "Snack",
    },
    23: {
      id: 23,
      name: "Pane di Montecalvo",
      description:
        "Irpinia bread made with local durum wheat and ‘crescente’ starter.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.irpino.it/il-pane-di-montecalvo-la-ricetta/",
      ingredients: [
        "Durum wheat semolina (Saragolla)",
        "Sourdough starter (crescente)",
        "Water",
        "Salt",
      ],
      type: "Snack",
    },
    24: {
      id: 24,
      name: "Soffritto",
      description:
        "Rich offal stew, a classic of Southern Italian ‘quinto quarto’.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/slurpsimangia/soffritto-di-agnello-u-suffritt/",
      ingredients: [
        "Lamb offal",
        "Tomatoes",
        "Garlic",
        "Bay leaves",
        "Chili",
        "Olive oil",
      ],
      type: "Secondo",
    },
    25: {
      id: 25,
      name: "Stufati di Teggiano",
      description:
        "Valdiano baked spaghetti with dried grapes, anchovies, and toasted crumbs.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://agricoltura.regione.campania.it/tipici/tradizionali/stufati-teggiano.html",
      ingredients: [
        "Spaghetti",
        "Dried grapes/raisin-like passito",
        "Anchovy fillets",
        "Toasted breadcrumbs",
        "Garlic",
        "Olive oil",
      ],
      type: "Primo",
    },
    26: {
      id: 26,
      name: "'Ndruppeche",
      description:
        "Potenza-style ragù with an ‘intoppo’ of mixed meats and pezzente.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://spezie.org/2021/01/24/ndruppeche/",
      ingredients: [
        "Mixed meats (pork/beef)",
        "Pezzente sausage",
        "Tomato passata",
        "Garlic",
        "Horseradish/rafano",
        "Bay leaf",
      ],
      type: "Primo",
    },
    27: {
      id: 27,
      name: "'O pere e 'o musso",
      description:
        "Neapolitan street-food salad of boiled snout and feet, dressed with lemon and salt.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.cookaround.com/amoriesapori/o-pere-e-o-musso-napoletano/",
      ingredients: [
        "Calf snout (muso)",
        "Pig's feet (pere)",
        "Lemon",
        "Salt",
        "Olives (optional)",
      ],
      type: "Snack",
    },
    28: {
      id: 28,
      name: "Alici marinate",
      description:
        "Marinated anchovies with citrus/vinegar, garlic, and parsley.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Alici-marinate.html",
      ingredients: [
        "Fresh anchovies (previously frozen/abbattute)",
        "Lemon juice and/or vinegar",
        "Olive oil",
        "Garlic",
        "Parsley",
        "Chili (optional)",
      ],
      type: "Antipasto",
    },
    29: {
      id: 29,
      name: "Armoracia rusticana",
      description:
        "Horseradish (cren/rafano) used grated in sauces and condiments.",
      region: "Basilicata",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.buttalapasta.it/ricette/ricetta-per-la-salsa-al-cren/20223/",
      ingredients: [
        "Fresh horseradish root (cren)",
        "Vinegar",
        "Breadcrumbs or bread crumb",
        "Cream or milk (optional)",
        "Mustard (optional)",
        "Salt",
      ],
      type: "Antipasto",
    },
    30: {
      id: 30,
      name: "Brasciole",
      description: "Neapolitan beef rolls braised in tomato sauce.",
      region: "Campania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Braciole-napoletane-al-sugo.html",
      ingredients: [
        "Beef slices (for braciole)",
        "Garlic",
        "Parsley",
        "Pecorino",
        "Pine nuts",
        "Tomato passata",
      ],
      type: "Secondo",
    },
  },
  4: {
    1: {
      id: 1,
      name: "Minestra di farro",
      description: "Traditional spelt soup from Molise.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cookaround.com/ricetta/zuppa-di-farro.html",
      ingredients: [
        "Farro (spelt)",
        "Carrots",
        "Onion",
        "Celery",
        "Leek",
        "Bay leaves",
        "Parsley",
        "Olive oil",
        "Salt",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Cozze alla tarantina",
      description: "Seafood main from Puglia.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cucchiaio.it/ricetta/cozze-alla-tarantina/",
      ingredients: [
        "Mussels",
        "Tomato pulp/passata",
        "Garlic",
        "Chili pepper",
        "Extra-virgin olive oil",
        "Parsley",
        "Bread (to serve)",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    3: {
      id: 3,
      name: "Prosciutto di Faeto",
      description: "Cured ham specialty from Faeto (Puglia).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.rossotono.it/selezione-rossotono/prosciutto-crudo-faeto/",
      ingredients: [
        "Prosciutto crudo di Faeto",
        "Bread",
        "Cheese (optional)",
        "Olives (optional)",
      ],
      type: "Antipasto",
    },
    4: {
      id: 4,
      name: "Focaccia barese",
      description: "Iconic Bari focaccia with tomatoes and olives.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.italianrecipebook.com/focaccia-barese/",
      ingredients: [
        "Flour",
        "Boiled potatoes",
        "Water",
        "Yeast",
        "Salt",
        "Extra-virgin olive oil",
        "Cherry tomatoes",
        "Olives",
        "Oregano",
      ],
      type: "Snack",
    },
    5: {
      id: 5,
      name: "Cacioricotta",
      description: "Aged ricotta-style cheese from Puglia.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cacioricotta",
      ingredients: ["Milk (sheep/cow mix)", "Salt", "Rennet"],
      type: "Snack",
    },
    6: {
      id: 6,
      name: "Sospiro",
      description:
        "Cream-filled sponge cake covered with fondant, from Bisceglie.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Sospiri_(dolce)",
      ingredients: ["Eggs", "Sugar", "Flour", "Pastry cream", "Fondant icing"],
      type: "Dolce",
    },
    7: {
      id: 7,
      name: "Viticoltura in Puglia",
      description: "Wine-growing tradition of Puglia (non-dish reference).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Viticoltura_in_Puglia",
      ingredients: ["Grapes", "Wine (various)"],
      type: "Snack",
    },
    8: {
      id: 8,
      name: "Panzerotto",
      description: "Fried stuffed street food from Puglia.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.soniaperonaci.it/panzerotti-pugliesi/",
      ingredients: [
        "Flour",
        "Water",
        "Yeast",
        "Salt",
        "Tomato",
        "Mozzarella",
        "Basil (optional)",
        "Oil (for frying)",
      ],
      type: "Snack",
    },
    9: {
      id: 9,
      name: "Brodetto",
      description: "Fish stew typical of coastal Molise.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/tutorial/i-consigli/brodetto-di-pesce-alla-termolese-ricetta/",
      ingredients: [
        "Mixed fish (e.g., scorpionfish, mullet)",
        "Mussels",
        "Clams",
        "Tomatoes",
        "Green peppers",
        "Garlic",
        "Parsley",
        "Olive oil",
        "Chili pepper",
        "Salt",
      ],
      type: "Secondo",
    },
    10: {
      id: 10,
      name: "Pallotte cacio e ova",
      description: "Cheese-and-egg bread balls in tomato sauce.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.soniaperonaci.it/pallotte-cacio-e-ova/",
      ingredients: [
        "Stale bread",
        "Pecorino cheese",
        "Eggs",
        "Parsley",
        "Garlic (optional)",
        "Tomato sauce",
        "Olive oil",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    11: {
      id: 11,
      name: "Pampanella",
      description: "Spicy baked pork specialty from Molise.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/spadellandoperilmondo/pampanella-molisana/",
      ingredients: [
        "Pork (loin/shoulder)",
        "Sweet paprika",
        "Hot chili",
        "White wine vinegar",
        "Garlic",
        "Olive oil",
        "Salt",
      ],
      type: "Secondo",
    },
    12: {
      id: 12,
      name: "Pane di Altamura",
      description: "Famous durum-wheat bread from Altamura.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Pane_di_Altamura",
      ingredients: [
        "Durum wheat semolina",
        "Water",
        "Salt",
        "Sourdough starter",
      ],
      type: "Snack",
    },
    13: {
      id: 13,
      name: "Pane di Laterza",
      description: "Rustic bread tradition from Laterza (Puglia).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://brotkoerbchen.blog/2020/06/10/pane-di-laterza/",
      ingredients: ["Flour", "Water", "Salt", "Sourdough starter"],
      type: "Snack",
    },
    14: {
      id: 14,
      name: "Pezzetti di cavallo",
      description: "Slow-cooked horse meat in tomato sauce (Salento-style).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.masseriachiccorizzo.it/i-sapori-contadini-della-puglia-pezzetti-di-cavallo-al-sugo/",
      ingredients: [
        "Horse meat",
        "Tomato sauce",
        "Onion",
        "Garlic",
        "Red wine",
        "Olive oil",
        "Chili pepper",
        "Bay leaf",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    15: {
      id: 15,
      name: "Scapece gallipolina",
      description:
        "Fried fish preserved with saffron, vinegar, and breadcrumbs.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://video.salento.it/5015-ricetta-della-scapece-gallipolina-piatto-storico-della-tradizione-gastronomica-salentina/",
      ingredients: [
        "Small fish (fried)",
        "Bread crumbs",
        "White wine vinegar",
        "Saffron",
        "Salt",
      ],
      type: "Antipasto",
    },
    16: {
      id: 16,
      name: "Sperone di gallo",
      description: "Olive cultivar reference from Molise (non-dish reference).",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Sperone_di_gallo",
      ingredients: ["Olive cultivar / olive oil"],
      type: "Snack",
    },
    17: {
      id: 17,
      name: "Banchetto nuziale di Bona Sforza e Sigismondo I di Polonia",
      description: "Historical banquet entry (non-dish reference).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Banchetto_nuziale_di_Bona_Sforza_e_Sigismondo_I_di_Polonia",
      ingredients: ["(Historical banquet entry)"],
      type: "Snack",
    },
    18: {
      id: 18,
      name: "Bombette",
      description:
        "Stuffed pork rolls grilled or baked, typical of Valle d’Itria.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Bombette-pugliesi.html",
      ingredients: [
        "Thin pork slices",
        "Cheese (caciocavallo/pecorino)",
        "Parsley",
        "Garlic",
        "Olive oil",
        "Salt",
        "Pepper",
      ],
      type: "Secondo",
    },
    19: {
      id: 19,
      name: "Caragnoli",
      description: "Honey-coated fried sweets from Molise.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://primochef.it/caragnoli/prodottitipici/",
      ingredients: [
        "Eggs",
        "Sugar",
        "Flour",
        "Baking powder",
        "Seed oil (for dough)",
        "Oil (for frying)",
        "Honey",
        "Lemon zest (optional)",
      ],
      type: "Dolce",
    },
    20: {
      id: 20,
      name: "Ciambotta pugliese",
      description: "Vegetable stew typical of southern Italy (Puglia variant).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.buonissimo.it/lericette/2760_Ciambotta",
      ingredients: [
        "Eggplant",
        "Zucchini",
        "Bell peppers",
        "Tomatoes",
        "Onion",
        "Olive oil",
        "Basil",
        "Salt",
        "Pepper",
      ],
      type: "Antipasto",
    },
    21: {
      id: 21,
      name: "Cicatelli",
      description:
        "Hand-rolled pasta typical of southern Italy (Puglia reference).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/zeroglutine/cicatelli-cremosi-al-pomodoro-e-stracchino/",
      ingredients: [
        "Cicatelli pasta",
        "Tomatoes",
        "Stracchino cheese",
        "Garlic",
        "Basil",
        "Olive oil",
        "Salt",
      ],
      type: "Primo",
    },
    22: {
      id: 22,
      name: "Cima di Bitonto",
      description: "Olive cultivar reference from Puglia (non-dish reference).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cima_di_Bitonto",
      ingredients: ["Olive cultivar / olive oil"],
      type: "Snack",
    },
    23: {
      id: 23,
      name: "Cima di rapa",
      description: "Turnip greens typical of southern Italian cooking.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cima_di_rapa",
      ingredients: [
        "Cime di rapa (turnip greens)",
        "Garlic",
        "Olive oil",
        "Chili pepper",
        "Salt",
      ],
      type: "Antipasto",
    },
    24: {
      id: 24,
      name: "Cipollata",
      description: "Onion-based rustic dish (Molise reference).",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cookist.it/cipollata/",
      ingredients: [
        "Onions",
        "Pancetta",
        "Sausage",
        "Vegetable broth",
        "Olive oil",
        "Parsley",
        "Salt",
        "Pepper",
        "Bread (to serve)",
      ],
      type: "Secondo",
    },
    25: {
      id: 25,
      name: "Clementine del golfo di Taranto",
      description: "Protected-origin clementines from the Gulf of Taranto.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Clementine_del_golfo_di_Taranto",
      ingredients: ["Clementines"],
      type: "Snack",
    },
    26: {
      id: 26,
      name: "Cocule",
      description: "Traditional baked good from Puglia (reference).",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cocule",
      ingredients: [
        "Flour",
        "Sugar",
        "Eggs",
        "Olive oil or lard",
        "Anise (optional)",
      ],
      type: "Dolce",
    },
    27: {
      id: 27,
      name: "Coratina",
      description:
        "Apulian olive cultivar known for robust extra-virgin olive oil.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Coratina",
      ingredients: ["Olive cultivar / extra-virgin olive oil"],
      type: "Snack",
    },
    28: {
      id: 28,
      name: "Cuddhura",
      description: "Festive braided sweet bread often baked with eggs.",
      region: "Puglia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://tavolamediterranea.com/2024/03/29/cuzzupe-o-cuddura-cu-lova/",
      ingredients: [
        "Flour",
        "Sugar",
        "Eggs",
        "Milk",
        "Butter or oil",
        "Baking powder",
        "Hard-boiled eggs (decor)",
        "Sprinkles (optional)",
      ],
      type: "Dolce",
    },
    29: {
      id: 29,
      name: "Ferratella",
      description:
        "Crisp waffle cookies traditionally made with a special iron.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Ferratelle.html",
      ingredients: [
        "Flour",
        "Eggs",
        "Sugar",
        "Seed oil",
        "Lemon zest",
        "Anise seeds (optional)",
      ],
      type: "Dolce",
    },
    30: {
      id: 30,
      name: "Millefanti",
      description: "Egg-and-cheese ‘thousand crumbs’ soup in broth.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://pastaweb.de/rezept-aromatische-mille-fanti-suppe-italienische-eierflocken-in-bruehe/",
      ingredients: [
        "Beef or vegetable broth",
        "Eggs",
        "Parmigiano Reggiano",
        "Semolina",
        "Nutmeg",
        "Salt",
        "Pepper",
        "Parsley (optional)",
      ],
      type: "Primo",
    },
    31: {
      id: 31,
      name: "Panonta",
      description:
        "Stuffed layered loaf (Miranda, Molise) eaten as hearty street food.",
      region: "Molise",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cookist.it/panonta-di-miranda/",
      ingredients: [
        "Large loaf of bread",
        "Eggs",
        "Pecorino cheese",
        "Sausage",
        "Pancetta",
        "Red peppers",
        "Garlic",
        "Parsley",
        "White wine",
        "Olive oil",
        "Salt",
      ],
      type: "Snack",
    },
  },
  5: {
    1: {
      id: 1,
      name: "Stracciatella (zuppa)",
      description: "Hearty soup from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.seriouseats.com/stracciatella-alla-romana-italian-egg-drop-soup",
      ingredients: [
        "Chicken broth",
        "Eggs",
        "Parmigiano-Reggiano",
        "Semolina or breadcrumbs",
        "Nutmeg",
        "Black pepper",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Trippa alla romana",
      description: "Meat main from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.seriouseats.com/trippa-alla-romana-braised-tripe-with-tomato-herbs-and-parmesan-recipe",
      ingredients: [
        "Pre-cooked tripe",
        "Tomatoes (passata)",
        "Onion",
        "Garlic",
        "Olive oil",
        "Mint (or mentuccia)",
        "Pecorino Romano",
      ],
      type: "Secondo",
    },
    3: {
      id: 3,
      name: "Baccalà all'abruzzese",
      description: "Seafood main from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.theinternationalkitchen.com/recipes/baccala/",
      ingredients: [
        "Salt cod (baccalà), soaked",
        "Cherry tomatoes",
        "Garlic",
        "Olive oil",
        "Oregano",
        "Olives",
        "Capers",
        "Parsley",
      ],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Carciofi alla giudia",
      description: "Fried artichokes from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.seriouseats.com/roman-jewish-fried-artichokes-carciofi-alla-giudia-recipe",
      ingredients: ["Romanesco artichokes", "Lemon", "Oil for frying", "Salt"],
      type: "Antipasto",
    },
    5: {
      id: 5,
      name: "Prosciutto amatriciano",
      description: "Cured meat from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.seriouseats.com/bucatini-pasta-amatriciana-recipe",
      ingredients: [
        "Prosciutto (or guanciale)",
        "Tomatoes",
        "Chili flakes",
        "Onion (optional)",
        "Pecorino Romano",
        "White wine",
        "Olive oil",
      ],
      type: "Snack",
    },
    6: {
      id: 6,
      name: "Pampanella (formaggio)",
      description: "Spicy specialty from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.greatitalianchefs.com/recipes/pampanella-recipe",
      ingredients: [
        "Pork (loin/belly)",
        "Sweet paprika",
        "Hot paprika or chili",
        "Garlic",
        "White wine vinegar",
        "Salt",
      ],
      type: "Secondo",
    },
    7: {
      id: 7,
      name: "Torrone tenero al cioccolato aquilano",
      description: "Chocolate nougat from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.buonissimo.it/lericette/2725_Torrone_aquilano",
      ingredients: [
        "Honey",
        "Sugar",
        "Egg whites",
        "Dark chocolate",
        "Toasted hazelnuts (or almonds)",
        "Wafer paper (ostia)",
        "Vanilla",
      ],
      type: "Dolce",
    },
    8: {
      id: 8,
      name: "Brodetto alla vastese",
      description: "Fish stew from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://italiasweetitalia.com/the-exquisite-brodetto-alla-vastese-fish-stew/",
      ingredients: [
        "Mixed fish and seafood",
        "Cherry tomatoes",
        "Garlic",
        "Olive oil",
        "White wine vinegar",
        "Chili",
        "Parsley",
      ],
      type: "Secondo",
    },
    9: {
      id: 9,
      name: "Prosciutto di Bassiano",
      description: "Cured meat from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://gourmetaly.com/boast-of-roman-food-style-pane-prosciutto-fichi-bread-prosciutto-and-figs/",
      ingredients: [
        "Prosciutto di Bassiano (cured ham)",
        "Rustic bread",
        "Fresh figs (or melon)",
        "Olive oil",
        "Black pepper",
      ],
      type: "Snack",
    },
    10: {
      id: 10,
      name: "Caprino (formaggio)",
      description: "Goat cheese from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.kitchenjournal.it/?tag=formaggio-caprino",
      ingredients: [
        "Fresh goat cheese (caprino)",
        "Olive oil",
        "Black pepper",
        "Herbs (thyme/rosemary)",
        "Bread or crostini",
      ],
      type: "Snack",
    },
    11: {
      id: 11,
      name: "Zuppa di fagioli",
      description: "Bean soup from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.ciaoitalia.com/recipes/bean-soup-zuppa-di-fagioli",
      ingredients: [
        "Cannellini beans",
        "Onion",
        "Carrot",
        "Celery",
        "Garlic",
        "Tomatoes",
        "Rosemary",
        "Olive oil",
      ],
      type: "Primo",
    },
    12: {
      id: 12,
      name: "Porchetta di Ariccia",
      description: "Roast pork from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.tasteatlas.com/porchettadiariccia/recipe",
      ingredients: [
        "Pork belly/loin (rolled)",
        "Garlic",
        "Rosemary",
        "Fennel seed",
        "Salt",
        "Black pepper",
      ],
      type: "Secondo",
    },
    13: {
      id: 13,
      name: "Cozze allo zafferano",
      description: "Mussels with saffron from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ouritaliantable.com/saffron-mussels-cozze-al-zafferano/",
      ingredients: [
        "Mussels",
        "Saffron",
        "White wine",
        "Garlic or leek",
        "Parsley",
        "Olive oil",
        "Lemon",
      ],
      type: "Antipasto",
    },
    14: {
      id: 14,
      name: "Carciofi alla romana",
      description: "Braised artichokes from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.giallozafferano.com/recipes/carciofi-alla-romana-roman-style-artichokes.html",
      ingredients: [
        "Artichokes",
        "Parsley",
        "Mint",
        "Garlic",
        "Olive oil",
        "White wine",
        "Lemon",
        "Salt",
      ],
      type: "Antipasto",
    },
    15: {
      id: 15,
      name: "Torrone tenero al cioccolato di Sulmona",
      description: "Chocolate nougat from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.tasteatlas.com/torrone/recipe/abruzzese-torrone",
      ingredients: [
        "Honey",
        "Sugar",
        "Egg whites",
        "Cocoa or dark chocolate",
        "Toasted hazelnuts",
        "Wafer paper (ostia)",
        "Vanilla",
      ],
      type: "Dolce",
    },
    16: {
      id: 16,
      name: "Capra alla neretese",
      description: "Goat stew from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://stefangourmet.com/2017/01/21/goat-stew-from-abruzzo-capra-alla-neretese/",
      ingredients: [
        "Goat meat",
        "Red bell peppers",
        "Tomatoes",
        "Onion",
        "White wine",
        "Cloves",
        "Olive oil",
        "Rosemary",
      ],
      type: "Secondo",
    },
    17: {
      id: 17,
      name: "Zuppa inglese",
      description: "Layered dessert from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.marcellinaincucina.com/zuppa-inglese/",
      ingredients: [
        "Ladyfingers or sponge cake",
        "Pastry cream",
        "Dark chocolate",
        "Alchermes liqueur",
        "Milk",
        "Egg yolks",
        "Sugar",
      ],
      type: "Dolce",
    },
    18: {
      id: 18,
      name: "Trippa",
      description: "Classic tripe dish from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://memoriediangelina.com/2020/10/10/trippa-alla-fiorentina-florentine-style-tripe/",
      ingredients: [
        "Tripe",
        "Tomato sauce",
        "Onion",
        "Garlic",
        "Olive oil",
        "Parsley",
        "Parmigiano-Reggiano",
      ],
      type: "Secondo",
    },
    19: {
      id: 19,
      name: "Coda alla vaccinara",
      description: "Oxtail stew from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.greatitalianchefs.com/recipes/coda-alla-vaccinara-recipe-roman-oxtail-stew",
      ingredients: [
        "Oxtail",
        "Celery",
        "Onion",
        "Carrot",
        "Pancetta",
        "Tomatoes",
        "Red wine",
        "Cloves/cinnamon",
        "Olive oil",
      ],
      type: "Secondo",
    },
    20: {
      id: 20,
      name: "Pane con le patate",
      description: "Potato bread from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://unamericanatragliorsi.com/2021/10/pane-con-patate-abruzzese.html/",
      ingredients: [
        "Flour",
        "Boiled potatoes",
        "Yeast",
        "Water",
        "Salt",
        "Olive oil",
      ],
      type: "Snack",
    },
    21: {
      id: 21,
      name: "Pecora alla callara",
      description: "Sheep stew from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://lifeinabruzzo.com/shepherds-bounty-il-coatto-pecora-alla-callara/",
      ingredients: [
        "Mutton or sheep meat",
        "Onion",
        "Garlic",
        "Tomatoes (passata)",
        "White wine",
        "Herbs (rosemary/thyme)",
        "Chili",
      ],
      type: "Secondo",
    },
    22: {
      id: 22,
      name: "Scapece alla vastese",
      description: "Vinegar-marinated fish from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://phood64.com/cpost/scapece-alla-vastese/",
      ingredients: [
        "Fish fillets",
        "Flour",
        "Olive oil",
        "White wine vinegar",
        "Saffron",
        "Garlic",
        "Mint",
      ],
      type: "Antipasto",
    },
    23: {
      id: 23,
      name: "Tacchino alla canzanese",
      description: "Turkey dish from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.abruzzoturismo.it/it/magazine/tacchino-alla-canzanese",
      ingredients: [
        "Turkey (leg/shoulder)",
        "Garlic",
        "Bay leaves",
        "Peppercorns",
        "White wine",
        "Salt",
      ],
      type: "Secondo",
    },
    24: {
      id: 24,
      name: "Timballo alla teramana",
      description: "Layered baked dish from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://memoriediangelina.com/2024/01/17/timballo-teramano/",
      ingredients: [
        "Scrippelle (egg crêpes)",
        "Tiny meatballs",
        "Tomato sauce",
        "Mozzarella",
        "Parmigiano-Reggiano",
        "Broth",
      ],
      type: "Primo",
    },
    25: {
      id: 25,
      name: "Peschette al tartufo",
      description: "Truffle-flavored preserve from Abruzzo.",
      region: "Abruzzo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lovetheitalianfood.com/it/tartufi/1047-peschette-al-tartufo-300-gr-sulpizio-tartufi-8028203107007.html",
      ingredients: [
        "Baby green peaches (peschette)",
        "Truffle (black/summer)",
        "Sunflower or olive oil",
        "Wine vinegar",
        "Salt",
        "Sugar",
      ],
      type: "Antipasto",
    },
    26: {
      id: 26,
      name: "Frittellone",
      description: "Fried dough from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://anitalianinmykitchen.com/frittelle/",
      ingredients: [
        "Flour",
        "Water or milk",
        "Yeast",
        "Salt",
        "Oil for frying",
        "Sugar (optional)",
      ],
      type: "Snack",
    },
    27: {
      id: 27,
      name: "Pane casareccio di Genzano",
      description: "Rustic bread from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.karenskitchenstories.com/2015/03/pane-di-genzano-twelveloaves.html",
      ingredients: [
        "Bread flour",
        "Water",
        "Yeast or sourdough starter",
        "Salt",
        "Wheat bran",
      ],
      type: "Snack",
    },
    28: {
      id: 28,
      name: "Abbacchio",
      description: "Young lamb from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://memoriediangelina.com/2024/03/27/abbacchio-alla-romana-roman-style-roast-lamb/",
      ingredients: [
        "Young lamb (abbacchio)",
        "Garlic",
        "Rosemary",
        "Sage",
        "Anchovies",
        "White wine vinegar",
        "White wine",
        "Olive oil",
      ],
      type: "Secondo",
    },
    29: {
      id: 29,
      name: "Acquacotta",
      description: "Vegetable soup from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.simplyrecipes.com/acquacotta-recipe-8757512",
      ingredients: [
        "Tomatoes",
        "Onion",
        "Celery",
        "Greens (chard/chicory)",
        "Stale bread",
        "Eggs",
        "Olive oil",
        "Basil",
      ],
      type: "Primo",
    },
    30: {
      id: 30,
      name: "Amatriciana",
      description: "Tomato-and-guanciale sauce from Lazio.",
      region: "Lazio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://blue-kitchen.com/2020/02/19/amatriciana-sauce/",
      ingredients: [
        "Guanciale (or pancetta)",
        "Tomatoes",
        "Chili",
        "Pecorino Romano",
        "Black pepper",
        "Olive oil",
      ],
      type: "Primo",
    },
  },
  6: {
    1: {
      id: 1,
      name: "Risotto alla viareggina",
      description: "A rich seafood risotto from Viareggio, Tuscany.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/allacciateilgrembiule/risotto-alla-viareggina/",
      ingredients: [
        "Riso",
        "Molluschi e crostacei misti",
        "Aglio",
        "Vino bianco",
        "Brodo di pesce",
        "Prezzemolo",
        "Olio extravergine d'oliva",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Trippa alla fiorentina",
      description: "Slow-cooked tripe in tomato sauce, a Florentine classic.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cucchiaio.it/ricetta/trippa-alla-fiorentina/",
      ingredients: [
        "Trippa",
        "Pomodori/passatа",
        "Cipolla",
        "Sedano",
        "Carota",
        "Parmigiano",
        "Olio extravergine d'oliva",
      ],
      type: "Secondo",
    },
    3: {
      id: 3,
      name: "Cozze ripiene alla viareggina",
      description:
        "Stuffed mussels baked in a savory tomato sauce from Viareggio.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Cozze-ripiene-alla-viareggina.html",
      ingredients: [
        "Cozze",
        "Pane grattugiato",
        "Uova",
        "Parmigiano",
        "Aglio",
        "Prezzemolo",
        "Pomodoro",
      ],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Frittata con gli zoccoli",
      description: "Rustic Tuscan-style frittata, hearty and filling.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/allacciateilgrembiule/frittata-con-gli-zoccoli/",
      ingredients: [
        "Uova",
        "Pancetta (rigatino)",
        "Pecorino/Parmigiano",
        "Sale",
        "Pepe",
        "Olio extravergine d'oliva",
      ],
      type: "Antipasto",
    },
    5: {
      id: 5,
      name: "Formaggio in foglia di noce",
      description:
        "Aromatic cheese aged wrapped in walnut leaves, typical of Tuscany.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cookist.it/pecorino-in-foglie-di-noce/",
      ingredients: [
        "Pecorino",
        "Foglie di noce",
        "Sale",
        "Pepe",
        "Olio extravergine d'oliva",
      ],
      type: "Snack",
    },
    6: {
      id: 6,
      name: "Torta al testo",
      description:
        "Umbrian flatbread traditionally cooked on a hot stone or pan.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.giallozafferano.it/ricetta/Torta-al-testo.html",
      ingredients: [
        "Farina",
        "Acqua",
        "Olio extravergine d'oliva",
        "Sale",
        "Lievito/bicarbonato",
      ],
      type: "Snack",
    },
    7: {
      id: 7,
      name: "Arselle alla viareggina",
      description:
        "Clams sautéed with garlic and parsley, a seaside staple in Viareggio.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.buonissimo.it/lericette/5805_Arselle_alla_viareggina",
      ingredients: [
        "Arselle (vongole)",
        "Aglio",
        "Prezzemolo",
        "Vino bianco",
        "Olio extravergine d'oliva",
        "Peperoncino",
      ],
      type: "Antipasto",
    },
    8: {
      id: 8,
      name: "Risotto al nero di seppia",
      description: "Inky-black risotto flavored with cuttlefish and its ink.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.giallozafferano.it/ricetta/Risotto-al-nero-di-seppia.html",
      ingredients: [
        "Riso",
        "Seppie",
        "Nero di seppia",
        "Cipolla",
        "Vino bianco",
        "Brodo di pesce",
        "Prezzemolo",
      ],
      type: "Primo",
    },
    9: {
      id: 9,
      name: "Testa di cinghiale alla castagnetana",
      description: "Traditional wild boar head preparation from Tuscany.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.poggiodiavolino.it/2014/02/ricetta-testa-cinghiale/",
      ingredients: [
        "Testa di cinghiale",
        "Aglio",
        "Erbe aromatiche",
        "Vino",
        "Spezie",
        "Sale",
        "Pepe",
      ],
      type: "Secondo",
    },
    10: {
      id: 10,
      name: "Frittata ai tartufi",
      description: "Umbrian frittata enriched with fragrant black truffles.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-frittata-tartufi/",
      ingredients: [
        "Uova",
        "Tartufo nero",
        "Parmigiano",
        "Sale",
        "Pepe",
        "Burro/Olio",
      ],
      type: "Antipasto",
    },
    11: {
      id: 11,
      name: "Bistecca alla fiorentina",
      description: "Thick-cut T-bone steak grilled over embers, a Tuscan icon.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Bistecca-alla-fiorentina.html",
      ingredients: [
        "Bistecca (T-bone)",
        "Sale grosso",
        "Pepe",
        "Olio extravergine d'oliva",
        "Rosmarino",
      ],
      type: "Secondo",
    },
    12: {
      id: 12,
      name: "Mazzafegato",
      description: "Umbrian liver sausage with bold, rustic flavor.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.corriere.it/cook/news/19_aprile_24/mazzafegato-insaccato-fegato-tipico-umbria-fd4efb0c-671f-11e9-9808-13d3bb4b6e37.shtml",
      ingredients: [
        "Fegato di maiale",
        "Carne suina",
        "Aglio",
        "Pepe",
        "Vino",
        "Budello naturale",
      ],
      type: "Secondo",
    },
    13: {
      id: 13,
      name: "Prosciutto di Norcia",
      description: "Protected-origin cured ham from Norcia, Umbria.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://salumitalia.it/en/ricetta/panzanella-moderna-con-prosciutto-di-norcia-igp/",
      ingredients: [
        "Prosciutto di Norcia IGP",
        "Pane raffermo",
        "Pomodoro",
        "Olio extravergine d'oliva",
        "Sale",
        "Limone",
      ],
      type: "Antipasto",
    },
    14: {
      id: 14,
      name: "Budella alla sestese",
      description: "Hearty offal stew from Sesto Fiorentino, Tuscany.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://cucinodite.it/secondi/budella-di-maiale-alla-sestese-la-ricetta-originale/",
      ingredients: [
        "Budella di maiale",
        "Pomodoro",
        "Cipolla",
        "Sedano",
        "Carota",
        "Cannella",
        "Cavolo verza",
      ],
      type: "Secondo",
    },
    15: {
      id: 15,
      name: "Cervello alla fiorentina",
      description:
        "Traditional Florentine-style brains, typically breaded and fried.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.mondocibo.it/cervello-alla-fiorentina",
      ingredients: [
        "Cervello di vitello",
        "Uova",
        "Farina",
        "Pangrattato",
        "Limone",
        "Olio/strutto",
        "Sale",
      ],
      type: "Secondo",
    },
    16: {
      id: 16,
      name: "Cicale di mare alla viareggina",
      description:
        "Mantis shrimp cooked in a garlicky tomato sauce, Viareggio-style.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.casapappagallo.it/ricette/canocchie-alla-viareggina",
      ingredients: [
        "Canocchie (cicale di mare)",
        "Aglio",
        "Pomodoro",
        "Vino bianco",
        "Peperoncino",
        "Olio extravergine d'oliva",
      ],
      type: "Secondo",
    },
    17: {
      id: 17,
      name: "Cormorano alla cacciatora",
      description:
        "Historic Viareggio fisherman’s stew-style preparation (now largely forbidden).",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cormorano_alla_cacciatora",
      ingredients: [
        "Cormorano",
        "Pomodoro",
        "Cipolla",
        "Aglio",
        "Vino",
        "Erbe aromatiche",
      ],
      type: "Secondo",
    },
    18: {
      id: 18,
      name: "Cèe alla viareggina",
      description:
        "Traditional Viareggio dish made with baby eels, crisp and aromatic.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.viareggiocomera.it/ricette-cucina-tipica-viareggina.php?id=11",
      ingredients: [
        "Cèe (anguilline)",
        "Farina di mais",
        "Aglio",
        "Salvia",
        "Scorza d'arancia",
        "Peperoncino",
        "Olio extravergine d'oliva",
      ],
      type: "Secondo",
    },
    19: {
      id: 19,
      name: "Pancotto alla viareggina",
      description:
        "Bread-based fisherman’s soup enriched with seafood and tomatoes.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-pancotto-viareggio/",
      ingredients: [
        "Pane raffermo",
        "Pomodoro",
        "Totani",
        "Gamberi",
        "Arselle",
        "Brodo di pesce",
        "Aglio",
      ],
      type: "Primo",
    },
    20: {
      id: 20,
      name: "Sedani ripieni alla pratese",
      description:
        "Celery stalks stuffed with meat, then cooked in ragù, from Prato.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.visittuscany.com/it/ricette/la-ricetta-dei-sedani-ripieni-alla-pratese/",
      ingredients: [
        "Sedano",
        "Carne macinata",
        "Mortadella",
        "Uova",
        "Parmigiano",
        "Farina",
        "Ragù",
      ],
      type: "Secondo",
    },
    21: {
      id: 21,
      name: "Stocco alla Tono",
      description:
        "Viareggio-style stockfish stew attributed to a sailor nicknamed ‘Tono’.",
      region: "Toscana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.tumangia.it/stocco-alla-tono-la-storia-e-la-ricetta-dalla-marineria-viareggina/",
      ingredients: [
        "Stoccafisso",
        "Patate",
        "Cipolla rossa",
        "Peperone verde",
        "Sedano",
        "Carota",
        "Vino bianco",
      ],
      type: "Secondo",
    },
    22: {
      id: 22,
      name: "Pane sciocco",
      description:
        "Unsalted bread typical of central Italy, especially Tuscany and Umbria.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/dolcesalatomiky/pane-sciocco/",
      ingredients: ["Farina", "Acqua", "Lievito", "Olio extravergine d'oliva"],
      type: "Snack",
    },
    23: {
      id: 23,
      name: "Arvoltolo",
      description:
        "Umbrian fried flatbread or fritter, served savory or sweet.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.gustour.it/ricette/arvoltolo-umbro",
      ingredients: ["Farina", "Acqua", "Sale", "Olio per friggere"],
      type: "Snack",
    },
    24: {
      id: 24,
      name: "Bagiana",
      description:
        "Rustic fava bean dish from central Italy, often with greens and cured pork.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.valcesano.com/bagiana-marchigiana",
      ingredients: [
        "Fave",
        "Lardo/guanciale",
        "Bietole",
        "Cipolla",
        "Finocchietto",
        "Olio extravergine d'oliva",
      ],
      type: "Primo",
    },
    25: {
      id: 25,
      name: "Brustico",
      description:
        "Lake fish grilled over reeds, served simply with oil and lemon.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.buonissimo.it/lericette/3267_Brustico",
      ingredients: [
        "Pesce di lago (tinca/persico)",
        "Aglio",
        "Limone",
        "Olio extravergine d'oliva",
        "Sale",
        "Pepe",
      ],
      type: "Secondo",
    },
    26: {
      id: 26,
      name: "Ciaramicola",
      description:
        "Perugian ring cake scented with Alchermes, topped with meringue.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.fattoincasadabenedetta.it/ricetta/ciaramicola/",
      ingredients: [
        "Farina",
        "Uova",
        "Zucchero",
        "Alchermes",
        "Lievito",
        "Meringa",
      ],
      type: "Dolce",
    },
    27: {
      id: 27,
      name: "Ciauscolo",
      description: "Soft, spreadable salami from the Marche/Umbria area.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/lacucinaromanadisoranina/crostoni-con-ciauscolo-e-stracchino/",
      ingredients: [
        "Ciauscolo",
        "Pane",
        "Stracchino",
        "Olio extravergine d'oliva",
      ],
      type: "Antipasto",
    },
    28: {
      id: 28,
      name: "Cicerchiata",
      description: "Carnival sweet: tiny fried dough balls bound with honey.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Cicerchiata.html",
      ingredients: [
        "Farina",
        "Uova",
        "Miele",
        "Zucchero",
        "Scorza di agrumi",
        "Olio per friggere",
      ],
      type: "Dolce",
    },
    29: {
      id: 29,
      name: "Cipolla di Cannara",
      description:
        "Sweet local onion from Cannara, used in many Umbrian preparations.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.umbriatourism.it/it/-/cipolline-di-cannara-in-agrodolce",
      ingredients: [
        "Cipolline di Cannara",
        "Aceto di vino bianco",
        "Zucchero (o miele)",
        "Burro",
        "Aglio",
        "Sale",
        "Pepe",
      ],
      type: "Antipasto",
    },
    30: {
      id: 30,
      name: "Crescia",
      description:
        "Umbrian/Marche flatbread, perfect for filling with cured meats and cheeses.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Crescia-sfogliata.html",
      ingredients: [
        "Farina",
        "Uovo",
        "Strutto (o olio)",
        "Sale",
        "Pepe",
        "Latte/Acqua",
      ],
      type: "Snack",
    },
    31: {
      id: 31,
      name: "Galantina",
      description:
        "Festive stuffed poultry roll served cold, sliced for platters.",
      region: "Umbria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.umbriatourism.it/it/-/galatina-di-pollo-it",
      ingredients: [
        "Pollo disossato",
        "Uova",
        "Prosciutto",
        "Pistacchi",
        "Parmigiano",
        "Carota",
        "Sedano",
      ],
      type: "Antipasto",
    },
  },
  7: {
    1: {
      id: 1,
      name: "Zuppa alla modenese",
      description: "Hearty soup from Emilia-Romagna.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cream%20of%20spinach%20soup%20%28rotated%29.jpg?width=1024",
      linkToRecipe:
        "https://www.italyrevisited.org/recipe/x_italian_soups/2312",
      ingredients: [],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Risotto con le rane",
      description: "Hearty first course from Emilia-Romagna.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Risotto%20al%20nebbiolo%20food%20pairing.jpg?width=1024",
      linkToRecipe: "https://www.chefincamicia.com/ricette/risotto-rane",
      ingredients: [],
      type: "Primo",
    },
    3: {
      id: 3,
      name: "Bollito misto",
      description: "Meat main from Emilia-Romagna.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Gran%20bollito%20misto%20piemontese.jpg?width=1024",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/ricetta/secondi/bollito-misto-la-ricetta-passo-passo/",
      ingredients: [],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Frittata con la mentuccia",
      description: "Savory starter from Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Frittata%20slice.jpg?width=1024",
      linkToRecipe:
        "https://www.buonissimo.it/lericette/frittata-con-mentuccia-fresca-268261",
      ingredients: [],
      type: "Antipasto",
    },
    5: {
      id: 5,
      name: "Brodetto alla sambenedettese",
      description: "Hearty fish stew from Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Foto%20brodetto%20.jpg?width=1080",
      linkToRecipe:
        "https://www.perleeciambelle.it/brodetto-alla-sambenedettese/",
      ingredients: [],
      type: "Secondo",
    },
    6: {
      id: 6,
      name: "Brodo di quarta",
      description: "Traditional meat broth from Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Broth%20hg.jpg?width=1080",
      linkToRecipe: "https://www.tastepiacenza.it/brodo-di-quarta/",
      ingredients: [],
      type: "Primo",
    },
    7: {
      id: 7,
      name: "Riso imbragato",
      description: "Rustic rice-and-broth soup from Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rice_soup.jpg?width=1080",
      linkToRecipe: "https://www.viaggiaeassaggia.it/riso-imbragato/",
      ingredients: [],
      type: "Primo",
    },
    8: {
      id: 8,
      name: "Faraona arrosto",
      description: "Roast guinea fowl, a classic countryside second course.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Faraona%20al%20forno.05.pronta%20per%20forno.JPG?width=1080",
      linkToRecipe: "https://ricette.giallozafferano.it/Faraona-al-forno.html",
      ingredients: [],
      type: "Secondo",
    },
    9: {
      id: 9,
      name: "Frittata di luppolo selvatico",
      description: "Omelette with wild hops shoots, springtime specialty.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Frittata%20luvertin%2005%20frittura%20finale.jpg?width=1080",
      linkToRecipe:
        "https://blog.giallozafferano.it/pelledipollo/frittata-di-luppolo-selvatico/",
      ingredients: [],
      type: "Secondo",
    },
    10: {
      id: 10,
      name: "Cotoletta alla bolognese",
      description: "Breaded veal cutlet finished with prosciutto and cheese.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Cotoletta%20alla%20Bolognese%20con%20tartufo%20nero.jpg?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Cotoletta_alla_bolognese",
      ingredients: [],
      type: "Secondo",
    },
    11: {
      id: 11,
      name: "Minestra nel sacco",
      description: "Old-fashioned Marche soup cooked in a cloth bag.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Minestra%20con%20filini%2001.jpg?width=1080",
      linkToRecipe: "https://www.agrodolce.it/ricette/minestra-nel-sacco/",
      ingredients: [],
      type: "Primo",
    },
    12: {
      id: 12,
      name: "Prosciutto di Carpegna",
      description: "Cured ham from the Marche-Apennines area.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Prosciutto%20di%20Parma%20-%20affettato2.jpg?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Prosciutto_di_Carpegna",
      ingredients: [],
      type: "Antipasto",
    },
    13: {
      id: 13,
      name: "Tortelli alla lastra",
      description: "Filled flatbread cooked on a hot stone slab.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ciabatta%20Bread.jpg?width=1080",
      linkToRecipe:
        "https://blog.giallozafferano.it/dulcisinforno/tortelli-alla-lastra/",
      ingredients: [],
      type: "Primo",
    },
    14: {
      id: 14,
      name: "Minestra vedova",
      description: "Simple, comforting vegetable soup from central Italy.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Minestra%20con%20filini%2001.jpg?width=1080",
      linkToRecipe:
        "https://ilromagnolo.info/rubriche/cucina/la-minestra-vedova-come-cucinare-la-minestra-vedva/",
      ingredients: [],
      type: "Primo",
    },
    15: {
      id: 15,
      name: "Salame di Fabriano",
      description: "Cured salami specialty from Fabriano.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Salame%20Fabriano%20fette-2.JPG?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Salame_di_Fabriano",
      ingredients: [],
      type: "Antipasto",
    },
    16: {
      id: 16,
      name: "Vincisgrassi",
      description: "Rich baked layered pasta dish from Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Vincisgrassi%20alla%20maceratese.jpg?width=1080",
      linkToRecipe: "https://ricette.giallozafferano.it/Vincisgrassi.html",
      ingredients: [],
      type: "Primo",
    },
    17: {
      id: 17,
      name: "Panada (zuppa)",
      description: "Bread-based soup, a humble traditional preparation.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Broth%20hg.jpg?width=1080",
      linkToRecipe:
        "https://blog.giallozafferano.it/allacciateilgrembiule/panada/",
      ingredients: [],
      type: "Primo",
    },
    18: {
      id: 18,
      name: "Salame matto",
      description: "Rustic loaf-style dish from the Adriatic hinterland.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Salame%20Fabriano%20fette-2.JPG?width=1080",
      linkToRecipe: "https://www.tortelliniandco.com/salame-matto-polpettone/",
      ingredients: [],
      type: "Secondo",
    },
    19: {
      id: 19,
      name: "Brodetto all'anconetana",
      description: "Fish stew from Ancona, with mixed catch and tomato.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Foto%20brodetto%20.jpg?width=1080",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/ricetta/piatti-unici/brodetto-allanconetana/",
      ingredients: [],
      type: "Secondo",
    },
    20: {
      id: 20,
      name: "Zuppa imperiale",
      description:
        "Broth with semolina-and-Parmesan cubes, comforting and rich.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Zuppa_Imperiale_%28Royale_Bolognese%29.jpg?width=1080",
      linkToRecipe: "https://ricette.giallozafferano.it/Zuppa-imperiale.html",
      ingredients: [],
      type: "Primo",
    },
    21: {
      id: 21,
      name: "Brodetto di Porto Recanati",
      description: "Coastal Marche fish stew from Porto Recanati.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Foto%20brodetto%20.jpg?width=1080",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/ricetta/primi/brodetto-di-pesce-di-porto-recanati/",
      ingredients: [],
      type: "Secondo",
    },
    22: {
      id: 22,
      name: "Crema fritta",
      description: "Fried custard bites, often served with mixed fry platters.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Italy-Italia%20Italian%20Food%20Fritto%20misto%20alla%20piemontese%20PxT.JPG?width=1080",
      linkToRecipe: "https://ricette.giallozafferano.it/Crema-fritta.html",
      ingredients: [],
      type: "Antipasto",
    },
    23: {
      id: 23,
      name: "Fritto bianco",
      description: "Light mixed fry from Marche, served without tomato sauce.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Italy-Italia%20Italian%20Food%20Fritto%20misto%20alla%20piemontese%20PxT.JPG?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Fritto_bianco",
      ingredients: [],
      type: "Antipasto",
    },
    24: {
      id: 24,
      name: "Pane di Chiaserna",
      description: "Traditional bread from a Marche hamlet.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Continental%20italian%20bread.jpg?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Pane_di_Chiaserna",
      ingredients: [],
      type: "Snack",
    },
    25: {
      id: 25,
      name: "Stoccafisso all'anconitana",
      description:
        "Stockfish stewed with potatoes, tomato and olives, Ancona-style.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stoccafisso%20all%27anconitana.jpg?width=1080",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-stoccafisso-allanconetana/",
      ingredients: [],
      type: "Secondo",
    },
    26: {
      id: 26,
      name: "Tortelli fritti",
      description: "Sweet fried pastries, often filled and sugar-coated.",
      region: "Emilia-Romagna",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tortelli%20fritti%20Modenesi%20con%20marmellata.jpg?width=1080",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/tortelli-fritti-di-natale/",
      ingredients: [],
      type: "Dolce",
    },
    27: {
      id: 27,
      name: "Acetello",
      description: "A vinegar-based traditional condiment/drink from Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anisetta%20Meletti%20%28Cafe%20Meletti%29.JPG?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Acetello",
      ingredients: [],
      type: "Snack",
    },
    28: {
      id: 28,
      name: "Anisetta",
      description: "Anise liqueur from Ascoli Piceno.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Anisetta%20Meletti%20%28Cafe%20Meletti%29.JPG?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Anisetta",
      ingredients: [],
      type: "Snack",
    },
    29: {
      id: 29,
      name: "Caffè Borghetti",
      description: "Coffee liqueur from Ancona.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caff%C3%A8Borghetti.jpg?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Caff%C3%A8_Borghetti",
      ingredients: [],
      type: "Snack",
    },
    30: {
      id: 30,
      name: "Calcioni marchigiani",
      description: "Sweet-savory baked turnovers typical of Marche.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Calcioni%20marchigiani.jpg?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Calcioni",
      ingredients: [],
      type: "Dolce",
    },
    31: {
      id: 31,
      name: "Calzolaio cocktail",
      description: "Local-style cocktail from central Italy traditions.",
      region: "Marche",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Caff%C3%A8Borghetti.jpg?width=1080",
      linkToRecipe: "https://it.wikipedia.org/wiki/Calzolaio_(cocktail)",
      ingredients: [],
      type: "Snack",
    },
  },
  8: {
    1: {
      id: 1,
      name: "Brodo di giuggiole",
      description:
        "A traditional jujube-based liqueur from Veneto—sweet, fruity, and often served as a digestif.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/ilricettariodellevergare/brodo-di-giuggiole/",
      ingredients: [
        "Giuggiole (jujubes)",
        "Red wine",
        "Sugar",
        "Quince apples",
        "Lemon",
        "Grapes",
        "Water",
      ],
      type: "Snack",
    },
    2: {
      id: 2,
      name: "Risotto all'isolana",
      description:
        "Classic Veronese risotto with Vialone Nano rice, small cuts of meat, and warm spices.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://melotti.it/dalle-ricette-di-mamma-rosetta/risotto-allisolana/",
      ingredients: [
        "Vialone Nano rice",
        "Meat broth",
        "Veal",
        "Pork loin",
        "Butter",
        "Grana Padano",
        "Rosemary",
        "Cinnamon",
      ],
      type: "Primo",
    },
    3: {
      id: 3,
      name: "Fegato alla veneziana",
      description:
        "Tender liver sautéed with slow-cooked onions—Venice’s signature offal second course, great with polenta.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Fegato-alla-veneziana.html",
      ingredients: [
        "Veal liver",
        "Onions",
        "White wine",
        "Butter",
        "Olive oil",
        "Bay leaf",
        "Salt",
        "Black pepper",
      ],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Sarde in saor",
      description:
        "Venetian sweet-and-sour sardines marinated with onions, vinegar, raisins, and pine nuts.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Sarde-in-saor.html",
      ingredients: [
        "Sardines",
        "Onions",
        "Vinegar",
        "Pine nuts",
        "Raisins",
        "Flour (for frying)",
        "Olive oil",
        "Salt",
      ],
      type: "Antipasto",
    },
    5: {
      id: 5,
      name: "Prosciutto di San Daniele",
      description:
        "PDO cured ham from San Daniele, prized for its delicate sweetness; perfect on a board with ricotta and fruit.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://principefoods.com/it/recipe/prosciutto-di-san-daniele-board-with-whipped-ricotta/",
      ingredients: [
        "Prosciutto di San Daniele",
        "Whole-milk ricotta",
        "Olive oil",
        "Dried figs",
        "Taralli or breadsticks",
        "Pistachios",
        "Olives",
        "Fresh herbs",
      ],
      type: "Antipasto",
    },
    6: {
      id: 6,
      name: "Ciabatta",
      description:
        "Iconic Venetian bread with a crisp crust and airy crumb—ideal for sandwiches and cicchetti.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/allacciateilgrembiule/pane-ciabatta/",
      ingredients: [
        "Flour (00/Manitoba)",
        "Water",
        "Fresh yeast",
        "Olive oil",
        "Salt",
        "Honey or malt",
      ],
      type: "Snack",
    },
    7: {
      id: 7,
      name: "Risotto",
      description:
        "The Italian risotto base method: toasted rice, gradual broth, and a final buttery 'mantecatura'.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.salepepe.it/tecniche-base/come-fare/come-fare-il-risotto/",
      ingredients: [
        "Risotto rice (Carnaroli/Arborio)",
        "Broth (vegetable or meat)",
        "Onion or shallot",
        "White wine",
        "Butter",
        "Parmigiano or Grana",
        "Olive oil",
        "Salt",
      ],
      type: "Primo",
    },
    8: {
      id: 8,
      name: "Agnello d'Alpago",
      description:
        "Mountain lamb from Alpago, typically braised or roasted with herbs and served with polenta.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.visitdolomitibellunesi.com/it/cosa-fare/sapori/ricette/agnello-dell-alpago",
      ingredients: [
        "Lamb (Agnello d'Alpago)",
        "Garlic",
        "Mixed herbs (rosemary/sage/juniper)",
        "Dry white wine",
        "Broth",
        "Olive oil",
        "Salt",
        "Black pepper",
      ],
      type: "Secondo",
    },
    9: {
      id: 9,
      name: "Anguilla marinata",
      description:
        "Venetian-style marinated eel: fried or grilled eel set in a fragrant vinegar marinade.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.vittoriaincucina.it/ricetta-anguilla-marinata/",
      ingredients: [
        "Eel",
        "Vinegar",
        "Sugar",
        "Salt",
        "Bay leaf",
        "Sage",
        "Flour (for dredging)",
        "Peanut oil",
      ],
      type: "Antipasto",
    },
    10: {
      id: 10,
      name: "Prosciutto di Sauris",
      description:
        "Smoky-sweet IGP ham from Sauris, often served thinly sliced as a starter with cheese and greens.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.wolfsauris.com/ricette/carpaccio-di-sauris/",
      ingredients: [
        "Prosciutto di Sauris (fiocco)",
        "Mixed salad greens",
        "Montasio cheese",
        "Walnuts",
        "Extra-virgin olive oil",
      ],
      type: "Antipasto",
    },
    11: {
      id: 11,
      name: "Frico",
      description:
        "Friulian skillet cake of potatoes and Montasio cheese—crispy outside, melty inside.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Frico-con-patate-e-cipolle.html",
      ingredients: [
        "Potatoes",
        "Montasio cheese",
        "Onion",
        "Olive oil",
        "Salt",
        "Black pepper",
      ],
      type: "Secondo",
    },
    12: {
      id: 12,
      name: "Polenta e osei",
      description:
        "A showstopper dessert shaped like polenta with tiny marzipan birds, from the Bergamo/Veneto tradition.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.soniaperonaci.it/polenta-e-osei/",
      ingredients: [
        "Sponge cake",
        "Chocolate buttercream",
        "Rum",
        "Hazelnut paste",
        "Marzipan (yellow)",
        "Candied fruit (bird shapes)",
        "Icing sugar",
      ],
      type: "Dolce",
    },
    13: {
      id: 13,
      name: "Cotechino",
      description:
        "Rich pork sausage gently simmered until tender—often paired with lentils in winter.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/article/cotechino-cottura-ideale-bollito-ricetta/",
      ingredients: [
        "Cotechino",
        "Water",
        "Aromatics (bay/onion optional)",
        "Lentils (to serve)",
      ],
      type: "Secondo",
    },
    14: {
      id: 14,
      name: "Coppa",
      description:
        "Cured pork neck salume (capocollo-style), aromatic and sliceable for antipasti boards.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/cucinavistamare/coppa-di-maiale-fatta-in-casa/",
      ingredients: [
        "Pork neck (coppa)",
        "Salt",
        "Black pepper",
        "Garlic",
        "Natural casing",
        "Red wine (optional)",
      ],
      type: "Antipasto",
    },
    15: {
      id: 15,
      name: "Gialletti",
      description:
        "Cornmeal-and-raisin biscuits (zaleti/gialletti) with a rustic crunch and golden color.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://martinaway.com/gialletti-zaleti-ricetta/",
      ingredients: [
        "Corn flour (fioretto)",
        "00 flour",
        "Butter",
        "Sugar",
        "Egg yolks",
        "Raisins",
        "Pine nuts",
        "Milk",
      ],
      type: "Dolce",
    },
    16: {
      id: 16,
      name: "Riso di Grumolo delle Abbadesse",
      description:
        "Vialone Nano rice from Grumolo delle Abbadesse—often cooked as a creamy seasonal risotto.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.risonatura.it/vialonenano/ricette-con-riso-di-grumolo-delle-abbadesse/",
      ingredients: [
        "Riso di Grumolo (Vialone Nano)",
        "White asparagus (Bassano)",
        "Meat broth",
        "Onion",
        "Prosecco",
        "Olive oil",
        "Butter",
        "Grana Padano",
      ],
      type: "Primo",
    },
    17: {
      id: 17,
      name: "Stufato d'asino",
      description:
        "Slow-braised donkey stew (musso): deep, winey, and traditionally served with polenta.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.lapeara.it/2021/04/04/stracotto-di-musso/",
      ingredients: [
        "Donkey meat (or beef)",
        "Red wine",
        "Onion",
        "Carrot",
        "Celery",
        "Bay leaf",
        "Juniper berries",
        "Broth",
        "Olive oil",
      ],
      type: "Secondo",
    },
    18: {
      id: 18,
      name: "Aglio bianco polesano",
      description:
        "Sweet, mild DOP garlic from Polesine—great in spreads, sauces, and crostoni.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.agliodop.eu/come-gustarlo/",
      ingredients: [
        "Aglio Bianco Polesano DOP",
        "Bread (crostoni)",
        "Olive oil",
        "Oregano",
        "Salt",
        "Black pepper",
      ],
      type: "Antipasto",
    },
    19: {
      id: 19,
      name: "Aglio di Resia",
      description:
        "A prized Slow Food garlic from Val Resia, used to perfume soups, creams, and rustic dishes.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.de-gusto.it/it/ricette/antipasti/zuppa-daglio.html",
      ingredients: [
        "Aglio di Resia",
        "Potatoes",
        "Broth",
        "Olive oil",
        "Bread croutons",
        "Salt",
        "Black pepper",
      ],
      type: "Antipasto",
    },
    20: {
      id: 20,
      name: "Balote",
      description:
        "Friulian polenta-and-cheese balls (balote), hearty and comforting mountain fare.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.loppure.it/la-balote-lesaltazione-dei-sapori-del-friuli/",
      ingredients: [
        "Polenta (cornmeal)",
        "Friulian 'formaggio salato' or Montasio",
        "Butter",
        "Salt",
      ],
      type: "Secondo",
    },
    21: {
      id: 21,
      name: "Barbusto",
      description:
        "A traditional black sausage from the Veneto/Trentino border, cooked and served hot from the grill or pan.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.vivigreen.eu/blog/barbusto-pat/",
      ingredients: [
        "Pork shoulder & belly",
        "Heart/lung (optional, traditional)",
        "Salt",
        "Black pepper",
        "Garlic",
        "Cinnamon",
        "Natural casing",
      ],
      type: "Secondo",
    },
    22: {
      id: 22,
      name: "Broccoletto di Custoza",
      description:
        "Tender local broccoli (Verona area) simply boiled or sautéed and served with eggs, salami, and polenta.",
      region: "Veneto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.lapeara.it/2022/10/22/broccoletto-di-custoza/",
      ingredients: [
        "Broccoletto di Custoza",
        "Olive oil",
        "Salt",
        "Hard-boiled eggs (to serve)",
        "Salami (to serve)",
      ],
      type: "Antipasto",
    },
    23: {
      id: 23,
      name: "Brovada",
      description:
        "Fermented turnip specialty from Friuli, usually warmed with aromatics and served alongside pork.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://primochef.it/brovada-friulana/prodottitipici/",
      ingredients: [
        "Brovada (fermented turnips)",
        "Garlic",
        "Olive oil",
        "Bay leaf",
        "Salt",
        "Black pepper",
        "Muset/cotechino (optional)",
      ],
      type: "Antipasto",
    },
    24: {
      id: 24,
      name: "Crauti",
      description:
        "Triestine-style sauerkraut, often stewed with aromatics and cured pork for a savory side.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/article/come-cucinare-crauti-zuppa-ricetta-nonna/",
      ingredients: [
        "Sauerkraut",
        "Garlic",
        "Onion",
        "Pancetta or lard",
        "Bay leaf",
        "Caraway or cumin",
        "Olive oil",
        "Black pepper",
      ],
      type: "Antipasto",
    },
    25: {
      id: 25,
      name: "Crema carsolina",
      description:
        "Trieste-area layered puff pastry cake filled with a rich vanilla cream and whipped cream.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/nonsolodolcedilorena/ricetta-crema-carsolina-zavata/",
      ingredients: [
        "Milk",
        "Egg yolks",
        "Sugar",
        "Flour",
        "Vanilla",
        "Whipping cream",
        "Puff pastry",
        "Icing sugar",
      ],
      type: "Dolce",
    },
    26: {
      id: 26,
      name: "Distillato di pere",
      description:
        "Pear distillate made by fermenting pears and distilling the spirit—aromatic and clean.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.donnamoderna.com/come-preparare-un-distillato-di-pere-454970",
      ingredients: ["Pears", "Sugar", "Yeast (fermentation)", "Water"],
      type: "Snack",
    },
    27: {
      id: 27,
      name: "Frìtoła",
      description:
        "Triestine Carnival fritters—soft yeasted dough fried and dotted with raisins and nuts.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/unanaturalistaincucina/frittelle-triestine-fritole/",
      ingredients: [
        "Flour",
        "Milk",
        "Yeast",
        "Sugar",
        "Eggs",
        "Raisins",
        "Pine nuts",
        "Lemon zest",
        "Oil (for frying)",
      ],
      type: "Dolce",
    },
    28: {
      id: 28,
      name: "Gröstl",
      description:
        "Tyrolean potato-and-speck skillet hash topped with a fried egg—popular in Alpine regions.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.tirol.at/aktivitaeten/kulinarik/rezepte/tiroler-groestl",
      ingredients: [
        "Boiled potatoes",
        "Speck/bacon",
        "Cooked beef",
        "Onion",
        "Butter",
        "Caraway",
        "Chives",
        "Eggs",
      ],
      type: "Secondo",
    },
    29: {
      id: 29,
      name: "Guanciale",
      description:
        "Cured pork cheek used for depth and richness—essential in many Italian sauces and stews.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.bbqspark.it/post/il-guanciale-ricetta-fatta-in-casa-da-70-giorni",
      ingredients: [
        "Pork jowl",
        "Salt",
        "Black pepper",
        "Garlic",
        "Herbs/spices (optional)",
        "Red or white wine (for rinsing)",
      ],
      type: "Antipasto",
    },
    30: {
      id: 30,
      name: "Gubana",
      description:
        "Friulian festive swirl bread filled with nuts, dried fruit, spices, and a splash of grappa.",
      region: "Friuli-Venezia Giulia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Gubana.html",
      ingredients: [
        "Flour",
        "Yeast",
        "Milk",
        "Butter",
        "Eggs",
        "Sugar",
        "Walnuts",
        "Hazelnuts",
        "Raisins",
        "Pine nuts",
        "Grappa/rum",
        "Candied orange",
        "Spices",
      ],
      type: "Dolce",
    },
  },
  9: {
    1: {
      id: 1,
      name: "Risotto alla certosina",
      description: "Hearty first course from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-risotto-certosina/",
      ingredients: [
        "Riso",
        "Gamberi d’acqua dolce",
        "Piselli",
        "Funghi",
        "Cosce di rana",
        "Vino bianco",
        "Burro",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Frittata con le ortiche",
      description: "Savory first course from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Frittata-di-ortiche.html",
      ingredients: ["Uova", "Ortiche", "Parmigiano", "Burro", "Sale", "Pepe"],
      type: "Primo",
    },
    3: {
      id: 3,
      name: "Cotoletta alla milanese",
      description: "Classic comfort food from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Cotoletta-alla-milanese.html",
      ingredients: [
        "Costoletta di vitello",
        "Uova",
        "Pane grattugiato",
        "Burro chiarificato",
        "Sale",
      ],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Risotto alla milanese",
      description: "Hearty first course from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Risotto-alla-milanese.html",
      ingredients: [
        "Riso Carnaroli",
        "Zafferano",
        "Brodo",
        "Cipolla",
        "Burro",
        "Grana Padano",
        "Vino bianco",
      ],
      type: "Primo",
    },
    5: {
      id: 5,
      name: "Frittata con le rane",
      description: "Savory starter from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/ricetta/secondi/frittata-di-rane/",
      ingredients: [
        "Cosce di rana",
        "Uova",
        "Burro",
        "Parmigiano",
        "Latte",
        "Sale",
        "Pepe",
      ],
      type: "Antipasto",
    },
    6: {
      id: 6,
      name: "Margottini alla bergamasca",
      description: "Savory starter from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.salepepe.it/ricette/antipasti/con-formaggio/margottini-alla-bergamasca/",
      ingredients: [
        "Semolino",
        "Brodo",
        "Formaggio (taleggio/groviera)",
        "Tuorli d’uovo",
        "Burro",
        "Pane grattugiato",
      ],
      type: "Antipasto",
    },
    7: {
      id: 7,
      name: "Riso alla pilota",
      description: "Hearty first course from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Riso-alla-pilota.html",
      ingredients: [
        "Riso Vialone Nano",
        "Salsiccia mantovana",
        "Burro",
        "Grana Padano",
        "Acqua",
        "Sale",
      ],
      type: "Primo",
    },
    8: {
      id: 8,
      name: "Riso in cagnone",
      description: "Hearty first course from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.cucchiaio.it/ricetta/ricetta-riso-cagnone/",
      ingredients: ["Riso", "Burro", "Salvia", "Aglio", "Grana Padano", "Sale"],
      type: "Primo",
    },
    9: {
      id: 9,
      name: "Asparago rosa di Mezzago",
      description: "Seasonal specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.agricolarino.it/ricette_3.html",
      ingredients: [
        "Asparagi rosa",
        "Uova",
        "Burro",
        "Parmigiano",
        "Sale",
        "Pepe",
      ],
      type: "Antipasto",
    },
    10: {
      id: 10,
      name: "Bossolà bresciano",
      description: "Traditional sweet treat from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.bresciaatavola.it/it/ricette/bossola-bresciano/",
      ingredients: [
        "Farina",
        "Fecola di patate",
        "Zucchero",
        "Burro",
        "Uova",
        "Lievito",
        "Latte",
      ],
      type: "Dolce",
    },
    11: {
      id: 11,
      name: "Polenta taragna",
      description: "Rustic comfort food from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Polenta-taragna.html",
      ingredients: [
        "Farina di mais",
        "Farina di grano saraceno",
        "Acqua",
        "Burro",
        "Formaggio (Branzi/Casera)",
        "Sale",
      ],
      type: "Secondo",
    },
    12: {
      id: 12,
      name: "Bresaola",
      description: "Cured meat specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/unavitaincucina/bresaola-fatta-in-casa/",
      ingredients: [
        "Carne bovina (magatello)",
        "Sale",
        "Pepe",
        "Rosmarino",
        "Alloro",
        "Ginepro",
      ],
      type: "Antipasto",
    },
    13: {
      id: 13,
      name: "Bruscitti",
      description: "Savory meat dish from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Polenta-e-bruscitt.html",
      ingredients: [
        "Manzo tritato fine",
        "Burro",
        "Pancetta/lardo",
        "Aglio",
        "Semi di finocchio",
        "Vino rosso",
        "Sale",
      ],
      type: "Secondo",
    },
    14: {
      id: 14,
      name: "Cappellacci di zucca",
      description: "Stuffed pasta specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-cappellacci-zucca/",
      ingredients: [
        "Zucca",
        "Farina",
        "Uova",
        "Parmigiano",
        "Noce moscata",
        "Burro",
        "Salvia",
      ],
      type: "Primo",
    },
    15: {
      id: 15,
      name: "Capù",
      description: "Savory wrapped dish from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/ledolcezzedimammanene/involtini-di-verza/",
      ingredients: [
        "Verza o coste",
        "Carne macinata",
        "Pane raffermo",
        "Uovo",
        "Parmigiano",
        "Passata di pomodoro",
        "Pancetta",
      ],
      type: "Antipasto",
    },
    16: {
      id: 16,
      name: "Casoncelli",
      description: "Hearty filled specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Casoncelli.html",
      ingredients: [
        "Farina",
        "Uova",
        "Carne mista",
        "Pane grattugiato",
        "Grana Padano",
        "Uvetta/Amaretti",
        "Burro e salvia",
      ],
      type: "Primo",
    },
    17: {
      id: 17,
      name: "Cassœula",
      description: "Rich winter stew from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Casoeula.html",
      ingredients: [
        "Verza",
        "Costine di maiale",
        "Salsiccia (verzini)",
        "Cotenne",
        "Carote",
        "Sedano",
        "Vino bianco",
      ],
      type: "Secondo",
    },
    18: {
      id: 18,
      name: "Chisciöi",
      description: "Crispy fritters from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.soniaperonaci.it/chiscioi/",
      ingredients: [
        "Farina di grano saraceno",
        "Farina 00",
        "Formaggio Casera",
        "Acqua",
        "Grappa (facoltativa)",
        "Sale",
        "Strutto/olio",
      ],
      type: "Snack",
    },
    19: {
      id: 19,
      name: "Cotoletta",
      description: "Breaded cutlet classic from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Cotoletta-alla-milanese.html",
      ingredients: [
        "Carne (vitello)",
        "Uova",
        "Pane grattugiato",
        "Burro",
        "Sale",
      ],
      type: "Secondo",
    },
    20: {
      id: 20,
      name: "Cuz",
      description: "Slow-cooked meat specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.bresciaatavola.it/it/ricette/il-cuz-di-corteno-golgi/",
      ingredients: [
        "Carne di pecora/castrato",
        "Grasso",
        "Acqua",
        "Ginepro",
        "Sale",
      ],
      type: "Secondo",
    },
    21: {
      id: 21,
      name: "Foiade",
      description: "Homestyle pasta squares from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.casapappagallo.it/ricette/foiade",
      ingredients: [
        "Farina",
        "Uova",
        "Sale",
        "Burro",
        "Formaggio (Branzi/Casera)",
        "Ragù o funghi (opz.)",
      ],
      type: "Primo",
    },
    22: {
      id: 22,
      name: "Gremolada",
      description: "Fresh herb-and-lemon condiment from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.alimentipedia.it/ricette/gremolada/",
      ingredients: [
        "Prezzemolo",
        "Aglio",
        "Scorza di limone",
        "Acciuga (facoltativa)",
        "Sale",
      ],
      type: "Snack",
    },
    23: {
      id: 23,
      name: "Laghi Lombardi",
      description: "Lake-area culinary tradition from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.in-lombardia.it/it/visitare-la-lombardia/turismo-enogastronomico-lombardia/ricette-recupero-tradizione-lombarda",
      ingredients: [
        "Pesce di lago",
        "Polenta",
        "Erbe aromatiche",
        "Olio EVO",
        "Sale",
      ],
      type: "Snack",
    },
    24: {
      id: 24,
      name: "Malfatti (gastronomia)",
      description: "Rustic dumpling-style specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Malfatti-bresciani.html",
      ingredients: [
        "Spinaci",
        "Ricotta",
        "Uova",
        "Farina",
        "Parmigiano",
        "Burro",
        "Noce moscata",
      ],
      type: "Primo",
    },
    25: {
      id: 25,
      name: "Manfrigole",
      description: "Baked crêpe rolls from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.calendariovaltellinese.com/ricetta/manfrigole",
      ingredients: [
        "Farina",
        "Uova",
        "Latte",
        "Formaggio Casera",
        "Burro",
        "Besciamella",
        "Bresaola (opz.)",
      ],
      type: "Primo",
    },
    26: {
      id: 26,
      name: "Mantovana (gastronomia)",
      description: "Mantuan culinary tradition from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.mantova.com/ricette-mantovane/",
      ingredients: ["Zucca", "Mostarda", "Amaretti", "Grana Padano", "Burro"],
      type: "Snack",
    },
    27: {
      id: 27,
      name: "Marubini",
      description: "Filled pasta in broth from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Marubini.html",
      ingredients: [
        "Farina",
        "Uova",
        "Carne mista",
        "Grana Padano",
        "Noce moscata",
        "Brodo di carne",
      ],
      type: "Primo",
    },
    28: {
      id: 28,
      name: "Miascia",
      description: "Bread-and-fruit cake from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/torta-di-pane-e-frutta-miascia/",
      ingredients: [
        "Pane raffermo",
        "Latte",
        "Uova",
        "Zucchero",
        "Mela",
        "Pera",
        "Uvetta",
      ],
      type: "Dolce",
    },
    29: {
      id: 29,
      name: "Missoltini",
      description: "Lake fish specialty from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://primochef.it/missoltini-con-polenta/prodottitipici/",
      ingredients: [
        "Missoltini (agoni essiccati)",
        "Olio EVO",
        "Aceto",
        "Aglio",
        "Prezzemolo",
        "Polenta",
        "Sale",
      ],
      type: "Secondo",
    },
    30: {
      id: 30,
      name: "Mostarda",
      description: "Sweet-spicy fruit condiment from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Mostarda-di-Cremona.html",
      ingredients: ["Frutta mista", "Zucchero", "Essenza di senape", "Acqua"],
      type: "Snack",
    },
    31: {
      id: 31,
      name: "Mostarda di Voghera",
      description: "Local mostarda variation from Lombardia.",
      region: "Lombardia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.focusoltrepo.it/made-in-oltrepo/mostarda-di-voghera/",
      ingredients: [
        "Frutta mista",
        "Zucchero",
        "Essenza di senape",
        "Sciroppo",
        "Spezie (opz.)",
      ],
      type: "Snack",
    },
  },
  10: {
    1: {
      id: 1,
      name: "Zuppa di datteri alla Lericina",
      description: "Hearty soup from Liguria; Lericina-based.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/ricettepanedolci/zuppa-di-datteri-alla-lericina/",
      ingredients: ["Dates", "Potatoes", "Onion", "Olive Oil", "Broth"],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Risotto al barolo",
      description: "Hearty first course from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Risotto-al-Barolo.html",
      ingredients: [
        "Carnaroli Rice",
        "Barolo Wine",
        "Onion",
        "Butter",
        "Parmigiano Reggiano",
      ],
      type: "Primo",
    },
    3: {
      id: 3,
      name: "Brasato al barolo",
      description: "Meat main from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Brasato-al-barolo.html",
      ingredients: [
        "Beef (chuck/shoulder)",
        "Barolo Wine",
        "Carrots",
        "Celery",
        "Onion",
      ],
      type: "Secondo",
    },
    4: {
      id: 4,
      name: "Seppie in zimino",
      description: "Seafood main from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Seppie-in-zimino.html",
      ingredients: [
        "Cuttlefish",
        "Swiss chard",
        "Tomato passata",
        "Garlic",
        "Olive Oil",
      ],
      type: "Secondo",
    },
    5: {
      id: 5,
      name: "Focaccia con le cipolle",
      description: "Classic street food from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.soniaperonaci.it/focaccia-con-le-cipolle/",
      ingredients: ["Flour", "Water", "Yeast", "Onions", "Olive Oil"],
      type: "Snack",
    },
    6: {
      id: 6,
      name: "Focaccia con il formaggio",
      description: "Traditional cheese from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://ricette.giallozafferano.it/Focaccia-di-Recco.html",
      ingredients: [
        "Flour",
        "Water",
        "Olive Oil",
        "Salt",
        "Stracchino/Crescenza",
      ],
      type: "Antipasto",
    },
    7: {
      id: 7,
      name: "Fritto misto alla piemontese",
      description: "Regional specialty from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Fritto-misto-alla-piemontese.html",
      ingredients: [
        "Veal cutlets",
        "Semolina",
        "Amaretti",
        "Eggs",
        "Breadcrumbs",
      ],
      type: "Secondo",
    },
    8: {
      id: 8,
      name: "Minestra maritata (gastronomia piemontese)",
      description: "Hearty soup from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Minestra_maritata_%28gastronomia_piemontese%29",
      ingredients: ["Rice", "Spinach", "Eggs", "Grated cheese", "Broth"],
      type: "Primo",
    },
    9: {
      id: 9,
      name: "Polenta d'Ivrea",
      description: "Hearty first course from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://blog.katuma.it/polentina-ivrea-ricetta/",
      ingredients: ["Corn flour", "00 flour", "Butter", "Eggs", "Sugar"],
      type: "Dolce",
    },
    10: {
      id: 10,
      name: "Coniglio alla ligure",
      description: "Meat main from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Coniglio-alla-Ligure.html",
      ingredients: [
        "Rabbit",
        "Taggiasca olives",
        "Pine nuts",
        "Rosemary",
        "Red wine",
      ],
      type: "Secondo",
    },
    11: {
      id: 11,
      name: "Focaccia genovese",
      description: "Classic street food from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Focaccia-fugassa-alla-genovese.html",
      ingredients: ["Flour", "Water", "Yeast", "Olive Oil", "Coarse salt"],
      type: "Snack",
    },
    12: {
      id: 12,
      name: "Focaccette al formaggio",
      description: "Traditional cheese from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/allacciateilgrembiule/focaccette-al-formaggio/",
      ingredients: [
        "Flour",
        "Water",
        "Olive Oil",
        "Salt",
        "Stracchino/Crescenza",
      ],
      type: "Antipasto",
    },
    13: {
      id: 13,
      name: "Caffè alla valdostana",
      description: "Regional specialty from Valle d'Aosta.",
      region: "Valle d'Aosta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lacucinaitaliana.it/ricetta/bevande/caffe-alla-valdostana/",
      ingredients: ["Coffee", "Grappa", "Génépy", "Sugar", "Citrus zest"],
      type: "Snack",
    },
    14: {
      id: 14,
      name: "Polenta saracena",
      description: "Hearty first course from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://giardinociliegi.blogspot.com/2023/12/ricetta-delle-langhe-polenta-saracena.html",
      ingredients: [
        "Buckwheat flour",
        "Water",
        "Salt",
        "Butter",
        "Toma/cheese sauce",
      ],
      type: "Primo",
    },
    15: {
      id: 15,
      name: "Pollo alla Marengo",
      description: "Meat main from Piemonte; Marengo-based.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Pollo-alla-Marengo.html",
      ingredients: ["Chicken", "Tomatoes", "Mushrooms", "White wine", "Garlic"],
      type: "Secondo",
    },
    16: {
      id: 16,
      name: "Focaccia novese",
      description: "Classic street food from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/ilmandorloinfioreblog/focaccia-novese/",
      ingredients: ["Flour", "Water", "Yeast", "Lard", "Olive Oil"],
      type: "Snack",
    },
    17: {
      id: 17,
      name: "Toma della Bassa Valle d'Aosta",
      description: "Traditional cheese from Valle d'Aosta.",
      region: "Valle d'Aosta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.buonissimo.it/ingredienti/toma-194917",
      ingredients: [
        "Cow's milk",
        "Salt",
        "Rennet",
        "Milk cultures",
        "(served with) Bread",
      ],
      type: "Antipasto",
    },
    18: {
      id: 18,
      name: "Carne cruda alla piemontese",
      description: "Regional specialty from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucchiaio.it/ricetta/ricetta-carne-cruda-piemontese/",
      ingredients: [
        "Lean beef/veal",
        "Olive Oil",
        "Lemon juice",
        "Salt",
        "Pepper",
      ],
      type: "Antipasto",
    },
    19: {
      id: 19,
      name: "Cotoletta alla valdostana",
      description: "Regional specialty from Valle d'Aosta.",
      region: "Valle d'Aosta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.negroni.com/it/ricette/secondi/cotoletta-alla-valdostana-la-ricetta-originale",
      ingredients: [
        "Veal cutlets",
        "Fontina",
        "Cooked ham",
        "Eggs",
        "Breadcrumbs",
      ],
      type: "Secondo",
    },
    20: {
      id: 20,
      name: "Jambon alla brace di Saint-Oyen",
      description: "Regional specialty from Valle d'Aosta; Saint-Oyen-based.",
      region: "Valle d'Aosta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lovevda.it/it/banca-dati/10/salumi/valle-d-aosta/jambon-alla-brace-di-saint-oyen/9014751",
      ingredients: [
        "Pork ham",
        "Herbs/spices",
        "Wood-fire roasting",
        "Salt",
        "Local beer (basting)",
      ],
      type: "Antipasto",
    },
    21: {
      id: 21,
      name: "Pesto alla genovese",
      description: "Regional specialty from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Pesto-alla-Genovese.html",
      ingredients: [
        "Basil",
        "Pine nuts",
        "Garlic",
        "Parmigiano Reggiano",
        "Olive Oil",
      ],
      type: "Antipasto",
    },
    22: {
      id: 22,
      name: "Festival delle sagre astigiane",
      description: "Regional specialty from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://visit.asti.it/en/september-in-asti/festival-of-festivals/",
      ingredients: [
        "Seasonal Piedmont dishes",
        "Asti DOC/DOCG wines",
        "Local produce",
        "Traditional recipes",
        "Sagre stands",
      ],
      type: "Snack",
    },
    23: {
      id: 23,
      name: "Robiola della Val Bormida",
      description: "Regional specialty from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.mangiareinliguria.it/prodotti-tipici-liguri/latte-formaggi-liguri/robiola-della-val-bormida",
      ingredients: [
        "Sheep's milk (or mixed)",
        "Salt",
        "Rennet",
        "Milk cultures",
        "(served with) Bread",
      ],
      type: "Antipasto",
    },
    24: {
      id: 24,
      name: "Toumin dal Mel",
      description: "Regional specialty from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://blog.giallozafferano.it/chezdansimo/suppli-al-forno-con-sorpresa-al-tumin-dal-mel/",
      ingredients: [
        "Toumin dal Mel cheese",
        "Rice (for arancini/supplì)",
        "Tomato sauce",
        "Eggs",
        "Breadcrumbs",
      ],
      type: "Antipasto",
    },
    25: {
      id: 25,
      name: "Trenette al pesto",
      description: "Regional specialty from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Bavette-al-pesto-patate-e-fagiolini.html",
      ingredients: [
        "Trenette pasta",
        "Pesto alla genovese",
        "Potatoes",
        "Green beans",
        "Parmigiano",
      ],
      type: "Primo",
    },
    26: {
      id: 26,
      name: "Frittelle di lattuga",
      description: "Regional specialty from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.cucinaligure.info/2022/03/20/frisceu-de-leituga-frittelle-di-lattuga/",
      ingredients: ["Flour", "Eggs", "Lettuce", "Yeast", "Frying oil"],
      type: "Snack",
    },
    27: {
      id: 27,
      name: "Moco delle Valli della Bormida",
      description: "Regional specialty from Liguria.",
      region: "Liguria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.latitudeslife.com/2023/08/che-cose-il-moco-dove-si-raccoglie-come-si-cucina/",
      ingredients: [
        "Moco (cicerchia-type legume)",
        "Water (soaking)",
        "Olive Oil",
        "Aromatics (garlic/onion)",
        "Herbs",
      ],
      type: "Primo",
    },
    28: {
      id: 28,
      name: "Pane nero",
      description: "Regional specialty from Piemonte.",
      region: "Piemonte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.lacascatadeisapori.it/pane-nero-di-segale-lo-pan-ner-della-valle-d-aosta/",
      ingredients: [
        "Rye flour",
        "Wheat flour",
        "Water",
        "Sourdough/yeast",
        "Salt",
      ],
      type: "Snack",
    },
    29: {
      id: 29,
      name: "Valle d'Aosta Jambon de Bosses",
      description: "Regional specialty from Valle d'Aosta.",
      region: "Valle d'Aosta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.fontina-dop.it/ricette/bruschette-con-fontina-dop-alpeggio-jambon-de-bosses-pesche-grigliate-pesto-di-basilico-e-pinoli/",
      ingredients: [
        "Jambon de Bosses (cured ham)",
        "Bread",
        "Fontina",
        "Basil pesto",
        "Peaches (optional)",
      ],
      type: "Antipasto",
    },
    30: {
      id: 30,
      name: "Boudin (insaccato)",
      description: "Regional specialty from Valle d'Aosta.",
      region: "Valle d'Aosta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://www.ilbabbuinoghiotto.com/boudin-valdostano/",
      ingredients: [
        "Pork/bovine blood (optional)",
        "Boiled potatoes",
        "Beetroot",
        "Lard/pancetta",
        "Spices (nutmeg/cinnamon)",
      ],
      type: "Antipasto",
    },
  },
  11: {
    1: {
      id: 1,
      name: "Zuppa d'orzo",
      description: "Traditional barley soup from Trentino-Alto Adige.",
      region: "Trentino-Alto Adige",
      image:
        "https://blog.giallozafferano.it/annatorte/wp-content/uploads/2018/01/zuppa-dorzo-alla-trentina-vert.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/annatorte/zuppa-dorzo-alla-trentina/",
      ingredients: [
        "Pearl barley",
        "Potatoes",
        "Carrot",
        "Onion",
        "Celery",
        "Broth",
        "Olive oil",
        "Salt",
        "Pepper",
      ],
      type: "Primo",
    },
    2: {
      id: 2,
      name: "Canederli",
      description:
        "Bread dumplings from the Alpine tradition, often served in broth or with butter.",
      region: "Trentino-Alto Adige",
      image: "https://ptps.stbm.it/t/uh8ulz_large.jpg",
      linkToRecipe:
        "https://ricette.giallozafferano.it/Canederli-alla-Tirolese-Knodel.html",
      ingredients: [
        "Stale bread",
        "Milk",
        "Eggs",
        "Speck",
        "Onion",
        "Parsley",
        "Chives",
        "Butter",
        "Flour",
        "Broth",
      ],
      type: "Primo",
    },
    3: {
      id: 3,
      name: "Salame all'aglio della Val Rendena",
      description: "Garlic salami typical of Val Rendena in Trentino.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ1Xdkq52ziXAP6_GtSC1aGNxOQWmQO3ILQ&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Salame_all%27aglio_della_Val_Rendena",
      ingredients: [
        "Pork",
        "Garlic",
        "Salt",
        "Black pepper",
        "Spices",
        "Natural casing",
      ],
      type: "Antipasto",
    },
    4: {
      id: 4,
      name: "Alta Badia (formaggio)",
      description:
        "Semi-hard cheese associated with the Dolomites area of Alta Badia.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Formaggio_Alta_Badia.jpg/1280px-Formaggio_Alta_Badia.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Alta_Badia_(formaggio)",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    5: {
      id: 5,
      name: "Cornetti alla vaniglia",
      description:
        "Vanilla crescent cookies popular in Alto Adige and Central Europe.",
      region: "Trentino-Alto Adige",
      image:
        "https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2020/12/Vanillekipferl-9436_2new.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/dulcisinforno/vanillekipferl-cornetti-alla-vaniglia/",
      ingredients: [
        "Flour",
        "Butter",
        "Sugar",
        "Ground almonds/hazelnuts",
        "Vanilla",
        "Powdered sugar",
        "Egg yolk",
        "Salt",
      ],
      type: "Dolce",
    },
    6: {
      id: 6,
      name: "Salame all'aglio di Caderzone",
      description:
        "Garlic salami from Caderzone, part of the Val Rendena tradition.",
      region: "Trentino-Alto Adige",
      image:
        "https://km0.com/wp-content/uploads/2023/01/prodotti_km0_1_1200.jpg",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Salame_all%27aglio_di_Caderzone",
      ingredients: [
        "Pork",
        "Garlic",
        "Salt",
        "Black pepper",
        "Spices",
        "Natural casing",
      ],
      type: "Antipasto",
    },
    7: {
      id: 7,
      name: "Asiago (formaggio)",
      description:
        "Famous Alpine cheese, produced in different ages from fresh to long-matured.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Formaggio_Asiago_Dop.jpg/1280px-Formaggio_Asiago_Dop.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Asiago_(formaggio)",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    8: {
      id: 8,
      name: "Carne fumada della Val di Cembra",
      description: "Smoked and cured beef specialty from the Cembra Valley.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFIFAivEeZv6qllEKMcBZ7noDpW0u9fvzxw&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Carne_fumada_della_Val_di_Cembra",
      ingredients: [
        "Beef",
        "Salt",
        "Black pepper",
        "Juniper",
        "Bay leaf",
        "Rosemary",
        "Smoke (wood)",
      ],
      type: "Secondo",
    },
    9: {
      id: 9,
      name: "Canestrato (formaggio trentino)",
      description:
        "Traditional Trentino cheese, historically shaped in basket molds.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZYdBCikss5j5aLlnJy6NEpA5KEh9w9ZH2A&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Canestrato_(formaggio_trentino)",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    10: {
      id: 10,
      name: "Carne salmistrada della Val di Cembra",
      description:
        "Salt-cured beef specialty from Val di Cembra, often thinly sliced.",
      region: "Trentino-Alto Adige",
      image:
        "https://images.dissapore.com/wp-content/uploads/2019/05/Show-Cooking-Chef-Alfio-Ghezzi-01.jpg?width=660&height=0&quality=75",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Carne_salmistrada_della_Val_di_Cembra",
      ingredients: [
        "Beef",
        "Salt",
        "Black pepper",
        "Juniper",
        "Bay leaf",
        "Rosemary",
        "Smoke (wood)",
      ],
      type: "Secondo",
    },
    11: {
      id: 11,
      name: "Formaggio contadino semigrasso di Lagundo",
      description: "Semi-fat farmhouse cheese typical of the Lagundo area.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dFLlEXwna6SLOLwvd6t5-KIOCpj93pTuJQ&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Formaggio_contadino_semigrasso_di_Lagundo",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    12: {
      id: 12,
      name: "Cacciatore nostrano all'aglio di Caderzone",
      description:
        "Small-format garlic salami from Caderzone, part of local winter traditions.",
      region: "Trentino-Alto Adige",
      image:
        "https://www.vivigreen.eu/wp-content/uploads/2022/01/pancetta-arrotolata-val-rendena.jpg",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Cacciatore_nostrano_all%27aglio_di_Caderzone",
      ingredients: [
        "Pork",
        "Garlic",
        "Salt",
        "Black pepper",
        "Spices",
        "Natural casing",
      ],
      type: "Antipasto",
    },
    13: {
      id: 13,
      name: "Formaggio di capra di Lagundo",
      description:
        "Goat cheese from Lagundo, a small-scale mountain dairy tradition.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Algunder_Ziegenk%C3%A4se_-_Formaggio_di_capra_di_Lagundo.jpg/960px-Algunder_Ziegenk%C3%A4se_-_Formaggio_di_capra_di_Lagundo.jpg",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Formaggio_di_capra_di_Lagundo",
      ingredients: ["Goat's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    14: {
      id: 14,
      name: "Lucanica mochena di cavallo",
      description:
        "Mocheni-style horse sausage from Trentino’s Germanic-speaking valley tradition.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-_-_6qMjUhbc8txKMowMUmv1--cZIdxhBA&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Lucanica_mochena_di_cavallo",
      ingredients: [
        "Pork",
        "Garlic",
        "Salt",
        "Black pepper",
        "Spices",
        "Natural casing",
      ],
      type: "Secondo",
    },
    15: {
      id: 15,
      name: "Treccia Mochena",
      description: "Traditional dessert from Trentino.",
      region: "Trentino-Alto Adige",
      image:
        "https://blog.giallozafferano.it/idolcidiamiciincucina/wp-content/uploads/2019/05/Treccia-Mochena.jpg",
      linkToRecipe:
        "https://blog.giallozafferano.it/idolcidiamiciincucina/wp-content/uploads/2019/05/Treccia-Mochena.jpg",
      ingredients: ["Flour", "Yeast", "Eggs", "Sugar"],
      type: "Antipasto",
    },
    16: {
      id: 16,
      name: "Pancetta nostrana all'aglio di Caderzone",
      description:
        "Rolled garlic pancetta typical of Caderzone’s cured-meat tradition.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIyW6GNCzIi7eCor51dB4tg2zwsVp70Jgjw&s",
      linkToRecipe:
        "https://it.wikipedia.org/wiki/Pancetta_nostrana_all%27aglio_di_Caderzone",
      ingredients: [
        "Pork",
        "Garlic",
        "Salt",
        "Black pepper",
        "Spices",
        "Natural casing",
      ],
      type: "Antipasto",
    },
    17: {
      id: 17,
      name: "Ortler (formaggio)",
      description:
        "Alpine cheese named after the Ortler massif, made in South Tyrolean tradition.",
      region: "Trentino-Alto Adige",
      image:
        "https://www.h-h-shop.com/images/product_images/original_images/Ortler-K-se-Mila-ganzer-Laib-ca-2-5-kg--2016-02-29CET17-40-02_0.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Ortler_(formaggio)",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    18: {
      id: 18,
      name: "Aschbach magro",
      description:
        "Lean local cheese specialty from South Tyrol’s dairy tradition.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Aschbach_magro.jpg/1280px-Aschbach_magro.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Aschbach_magro",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    19: {
      id: 19,
      name: "Stelvio (formaggio)",
      description:
        "DOP-style Alpine cheese with a strong aroma, produced in South Tyrol.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e9/Formaggio_Stelvio.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Stelvio_(formaggio)",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    20: {
      id: 20,
      name: "Asparago bianco di Zambana",
      description:
        "White asparagus from the Zambana area, prized for its tenderness and delicate taste.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BZRhFOmnioj2LtMxK7KtJH-chjtvFNBjbA&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Asparago_bianco_di_Zambana",
      ingredients: [
        "White asparagus",
        "Butter",
        "Lemon",
        "Salt",
        "Black pepper",
      ],
      type: "Antipasto",
    },
    21: {
      id: 21,
      name: "Vezzena (formaggio)",
      description:
        "Traditional aged cheese from the Trentino highlands, known for savory depth.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Vezzena_(formaggio)",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    22: {
      id: 22,
      name: "Bela Badia",
      description:
        "Soft, creamy cheese associated with the Badia/Dolomites area.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bela_Badia.jpg/1280px-Bela_Badia.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Bela_Badia",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    23: {
      id: 23,
      name: "Brezel",
      description:
        "Alpine-style pretzel commonly found in Trentino-Alto Adige bakeries.",
      region: "Trentino-Alto Adige",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Brezel_l_B%C3%A4ckerei-Raisch.jpg/2560px-Brezel_l_B%C3%A4ckerei-Raisch.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Brezel",
      ingredients: [
        "Wheat flour",
        "Water",
        "Yeast",
        "Salt",
        "Baking soda/lye wash",
      ],
      type: "Snack",
    },
    24: {
      id: 24,
      name: "Brusti",
      description:
        "Traditional pork sausages from mountainous Trentino-Alto Adige areas.",
      region: "Trentino-Alto Adige",
      image:
        "https://dishes-delicious.de/wp-content/uploads/2025/05/Crostini-mit-Salsiccia-und-Robiola.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Brusti",
      ingredients: [
        "Pork",
        "Garlic",
        "Salt",
        "Black pepper",
        "Spices",
        "Natural casing",
      ],
      type: "Secondo",
    },
    25: {
      id: 25,
      name: "Béchi-panzalini",
      description: "Traditional Trentino bread loaf (filone a due tagli).",
      region: "Trentino-Alto Adige",
      image:
        "https://www.topfooditaly.net/wp-content/uploads/2020/03/fiadone-salato-abruzzo-380x288.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/B%C3%A9chi-panzalini",
      ingredients: ["Wheat flour", "Water", "Yeast", "Salt"],
      type: "Snack",
    },
    26: {
      id: 26,
      name: "Caciottina Montanara",
      description:
        "Small mountain-style caciotta cheese, often served on boards or melted in dishes.",
      region: "Trentino-Alto Adige",
      image:
        "https://d15j9y5wlusr11.cloudfront.net/filehub/image/f22be364-28f6-46b7-a1ab-8c9bb8225743/55162/ricetta.png.420x510_q80_crop-smart_upscale.jpg",
      linkToRecipe: "https://it.wikipedia.org/wiki/Caciottina_Montanara",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    27: {
      id: 27,
      name: "Nidi di patate con uova",
      description:
        "Appetizer from Trentino featuring potato nests filled with eggs.",
      region: "Trentino-Alto Adige",
      image: "https://ricetta.it/Uploads/Imgs/nidi-di-patate-con-uova.jpg.webp",
      linkToRecipe: "https://www.caffedianterivo.it/it/ricette/",
      ingredients: ["Potatoes", "Eggs", "Parmesan", "Butter", "Salt", "Pepper"],
      type: "Antipasto",
    },
    28: {
      id: 28,
      name: "Carne fumada di Siror",
      description:
        "Smoked beef specialty from Siror, traditionally cured, aged, and thinly sliced.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://foodnetwork.it/ricette-antipasti/carne-fumada-di-siror-con-cavolo-cappuccio-stufato-al-cumino-con-crumble-di-pane-nero",
      ingredients: [
        "Beef",
        "Salt",
        "Black pepper",
        "Juniper",
        "Bay leaf",
        "Rosemary",
        "Smoke (wood)",
      ],
      type: "Secondo",
    },
    29: {
      id: 29,
      name: "Carne salada del Trentino",
      description:
        "Cured beef from Trentino, often served as carpaccio with beans, oil, and lemon.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe:
        "https://www.galbani.it/abcucina/come-fare/come-cucinare-la-carne/carne-salada-come-si-mangia",
      ingredients: [
        "Beef (eye of round)",
        "Salt",
        "Garlic",
        "Juniper berries",
        "Bay leaf",
        "Rosemary",
        "Black pepper",
      ],
      type: "Secondo",
    },
    30: {
      id: 30,
      name: "Casolet",
      description:
        "Trentino cheese from Val di Sole/Val di Non tradition, often semi-soft and aromatic.",
      region: "Trentino-Alto Adige",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeekgzS8BxbdoDXtAjUf4SzKRW0KI0FyKKQ&s",
      linkToRecipe: "https://it.wikipedia.org/wiki/Casolet",
      ingredients: ["Cow's milk", "Salt", "Rennet", "Lactic cultures"],
      type: "Antipasto",
    },
    31: {
      id: 31,
      name: "Spezzatino di Castrato",
      description:
        "Traditional mutton stew from Trentino, slow-cooked with herbs and vegetables.",
      region: "Trentino-Alto Adige",
      image:
        "https://www.cucinare.it/i/NzZiNTM14BNGRZ8L3VwbG9hZHMvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTIvc3BlenphdGlub19kaV9jYXN0cmF0b18xNDQ5ODc4NzkzLmpwZ3w4NDB8NTcyfGpwZWd8/840x572-spezzatino_di_castrato_1449878793.jpeg",
      linkToRecipe: "https://www.cucinare.it/ricetta/spezzatino-di-castrato",
      ingredients: ["Mutton", "Onion", "Carrot", "Celery", "Red wine", "Broth"],
      type: "Secondo",
    },
  },
};
