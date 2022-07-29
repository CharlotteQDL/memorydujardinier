//A mettre hors d'un composant pour éviter que cette variable se recréée à chaque rerender du composant concerné
const initialCardList = [
  {
    id: 1,
    url: "/images/abeille.jpg",
    name: "l'abeille",
    category: "ami du jardiner",
    author: "📷 : Mariya 🌸🌺🌼 de Pixabay",
    link:
      "https://pixabay.com/fr/photos/abeille-insecte-fleur-pollinisation-5618012/",
    detail:
      "Je butine les fleurs et transporte ainsi leur pollen, permettant à de nouvelles fleurs de naître : c'est la pollinisation. Les apiculteurs récoltent le miel que je fabrique et stocke dans les alvéoles de ma ruche.",
    pair: 2,
    isVisible: false,
    isFound: false,
  },
  {
    id: 2,
    url: "/images/frelonAsiatique.jpg",
    name: "le frelon asiatique",
    category: "ennemi du jardiner",
    author: "📷 : Alain GENERAL de Pixabay",
    link:
      "https://pixabay.com/fr/photos/insecte-frelon-asiatique-france-4683232/",
    detail:
      "Je viens d'Asie et je suis un prédateur de l'abeille. J'ai la capacité de voler en stationnaire, pour attraper les abeilles à la sortie de leur ruche.",
    pair: 1,
    isVisible: false,
    isFound: false,
  },
  {
    id: 3,
    url: "/images/herisson.jpg",
    name: "le hérisson",
    category: "ami du jardiner",
    author: "📷 : Alexas_Fotos de Pixabay",
    link:
      "https://pixabay.com/fr/photos/enfant-h%c3%a9risson-jeune-h%c3%a9risson-1759006/",
    detail:
      "Je vis la nuit, mes bébés sont d'ailleurs aveugles à la naissance. On m'apprécie car en plus d'être mignon, je débarrasse le jardin d'escargots ou insectes ravageurs.",
    pair: 4,
    isVisible: false,
    isFound: false,
  },
  {
    id: 4,
    url: "/images/escargot.jpg",
    name: "l'escargot",
    category: "ennemi du jardinier",
    author: "📷 : István Mihály de Pixabay",
    link: "https://pixabay.com/fr/photos/escargot-coquille-d-escargot-405384/",
    detail:
      "Je me déplace uniquement en avançant grâce à mon grand pied et je raffole de la salade : c'est pourquoi ses feuilles sont parfois toutes trouées !",
    pair: 3,
    isVisible: false,
    isFound: false,
  },
  {
    id: 5,
    url: "/images/chauveSouris.jpg",
    name: "la chauve-souris",
    category: "ami du jardinier",
    author: "📷 : Franck Barske de Pixabay",
    link:
      "https://pixabay.com/fr/photos/chauve-souris-g%c3%a9ante-chiropt%c3%a8res-3501269/",
    detail:
      "Je vis la nuit et 'vois avec les oreilles'. Je suis le seul mammifère capable de voler et je me nourris, entre autres, de moustiques.",
    pair: 6,
    isVisible: false,
    isFound: false,
  },
  {
    id: 6,
    url: "/images/moustique.jpg",
    name: "le moustique",
    category: "ennemi du jardinier",
    author: "📷 : mika mamy de Pixabay",
    link:
      "https://pixabay.com/fr/photos/moustique-macro-insecte-scarab%c3%a9e-719613/",
    detail:
      "On m'applaudit sur mon passage, mais pas vraiment pour m'acclamer ! Mes piqûres sont parfois très agaçantes !",
    pair: 5,
    isVisible: false,
    isFound: false,
  },
  {
    id: 7,
    url: "/images/verDeTerre.jpg",
    name: "le ver de terre",
    category: "ami du jardinier",
    author: "📷 : Natfot de Pixabay",
    link:
      "https://pixabay.com/fr/photos/ver-de-terre-sol-salet%c3%a9-macro-686593/",
    detail:
      "J'aère la terre en creusant mes galeries. Tous les vers de terre de la planète pèsent plus que tous les autres animaux réunis !",
    pair: 8,
    isVisible: false,
    isFound: false,
  },
  {
    id: 8,
    url: "/images/taupe.jpg",
    name: "la taupe",
    category: "ennemi du jardinier",
    author: "📷 : Tabble de Pixabay",
    link:
      "https://pixabay.com/fr/photos/animal-m%c3%b4le-jardin-prairie-1347755/",
    detail:
      "Comme le ver de terre dont je me nourris principalement, je creuse des galeries. Mais le jardinier apprécie peu mes taupinières, qu'il ne trouve pas esthétiques !",
    pair: 7,
    isVisible: false,
    isFound: false,
  },
  {
    id: 9,
    url: "/images/coccinelle.jpg",
    name: "la coccinelle",
    category: "ami du jardinier",
    author: "📷 : Myriams-Fotos de Pixabay",
    link:
      "https://pixabay.com/fr/photos/coccinelle-scarab%c3%a9e-coccinellidae-1480102/",
    detail:
      "Je mange notamment les oeufs d'insectes comme la piéride du chou. Parmi les presque 6 000 espèces de coccinelles, on trouve surtout en France celle à 7 points.",
    pair: 10,
    isVisible: false,
    isFound: false,
  },
  {
    id: 10,
    url: "/images/pieride.jpg",
    name: "la piéride du chou",
    category: "ennemi du jardinier",
    author: "📷 : AnnaAr de Pixabay",
    link:
      "https://pixabay.com/fr/photos/pi%c3%a9ride-du-chou-papillon-1852698/",
    detail:
      "Je ponds mes oeufs jaunes au coeur des feuilles du chou car mes larves se nourrissent de ce légume.",
    pair: 9,
    isVisible: false,
    isFound: false,
  },
  {
    id: 11,
    url: "/images/mesange.jpg",
    name: "la mésange",
    category: "ami du jardinier",
    author: "📷 : ray jennings de Pixabay",
    link:
      "https://pixabay.com/fr/photos/m%c3%a9sange-bleue-oiseau-mignonne-915445/",
    detail:
      "Je niche dans des trous d'arbre. Je suis granivore et me nourris aussi d'insectes comme la chenille processionnaire.",
    pair: 12,
    isVisible: false,
    isFound: false,
  },
  {
    id: 12,
    url: "/images/chenille.jpg",
    name: "la chenille processionnaire",
    category: "ennemi du jardinier",
    author: "📷 : Marc Pascual de Pixabay ",
    link:
      "https://pixabay.com/fr/photos/processionnaire-chenille-ligne-1189371/",
    detail:
      "On me trouve le long des arbres. Ma piqûre et mes poils urticants peuvent être dangereux pour l'Homme.",
    pair: 11,
    isVisible: false,
    isFound: false,
  },
  {
    id: 13,
    url: "/images/perceOreille.jpg",
    name: "le perce-oreilles",
    category: "ami du jardinier",
    author: "📷 : Beverly Buckley de Pixabay",
    link:
      "https://pixabay.com/fr/photos/insecte-ravageur-perce-oreille-4692389/",
    detail:
      "Malgré mon apparence, je suis utile dans le jardin car je me nourris de matière en décomposition, de larves d'insectes, d'œufs de limaces, ou de pucerons.",
    pair: 14,
    isVisible: false,
    isFound: false,
  },
  {
    id: 14,
    url: "/images/puceron.jpg",
    name: "le puceron",
    category: "ennemi du jardinier",
    author: "📷 : DerWeg de Pixabay",
    link: "https://pixabay.com/fr/photos/puceron-insecte-feuille-vert-6635004/",
    detail:
      "Je suis un parasite et je suce la sève des plantes, ce qui les empêche de bien se développer.",
    pair: 13,
    isVisible: false,
    isFound: false,
  },
  {
    id: 15,
    url: "/images/crapaud.jpg",
    name: "le crapaud",
    category: "ami du jardinier",
    author: "📷 : Kathy Büscher de Pixabay",
    link:
      "https://pixabay.com/fr/photos/crapaud-commun-crapaud-amphibiens-2382959/",
    detail:
      "Je suis un amphibien à la peau rugueuse, recouverte de pustules, qui résiste ainsi aux blessures. Je mange (entre autres) des mouches.",
    pair: 16,
    isVisible: false,
    isFound: false,
  },
  {
    id: 16,
    url: "/images/mouche.jpg",
    name: "la mouche",
    category: "ennemi du jardinier",
    author: "📷 : adege de Pixabay ",
    link:
      "https://pixabay.com/fr/photos/voler-insecte-mousse-yeux-compos%c3%a9s-4264943/",
    detail:
      "Je ne suis pas dangereuse mais mes larves peuvent, en mangeant les poils de leurs racines, empêcher les plantes de se nourrir et donc de bien grandir.",
    pair: 15,
    isVisible: false,
    isFound: false,
  },
];

export default initialCardList;
