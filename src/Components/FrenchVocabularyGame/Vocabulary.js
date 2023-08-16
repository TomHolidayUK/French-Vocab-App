const vocabulary = [
  {
    English: "to be",
    French: "être",
    index: 1,
    type: "verb"
  },
  {
    English: "to have",
    French: "avoir",
    index: 2,
    type: "verb"
  },
  {
    English: "I",
    French: "je",
    index: 3,
    type: "others"
  },
  {
    English: "not",
    French: "ne",
    index: 4,
    type: "others"
  },
  {
    English: "you",
    French: "tu",
    index: 5,
    type: "others"
  },
  {
    English: "you (plural or formal)",
    French: "vous",
    index: 6,
    type: "others"
  },
  {
    English: "he, it",
    French: "il",
    index: 7,
    type: "others"
  },
  {
    English: "and",
    French: "et",
    index: 8,
    type: "others"
  },
  {
    English: "a, an (masculine) ",
    French: "un",
    index: 9,
    type: "others"
  },
  {
    English: "to go",
    French: "aller",
    index: 10,
    type: "verb"
  },
  {
    English: "in",
    French: "en",
    index: 11,
    type: "others"
  },
  {
    English: "to do, make",
    French: "faire",
    index: 12,
    type: "verb"
  },
  {
    English: "all, everything",
    French: "tout",
    index: 13,
    type: "adjective"
  },
  {
    English: "we (informal)",
    French: "on",
    index: 14,
    type: "others"
  },
  {
    English: "a, an (feminine)",
    French: "une",
    index: 15,
    type: "others"
  },
  {
    English: "my (plural nouns) ",
    French: "mes",
    index: 16,
    type: "adjective"
  },
  {
    English: "for",
    French: "pour",
    index: 17,
    type: "others"
  },
  {
    English: "some (plural noun)",
    French: "des",
    index: 18,
    type: "others"
  },
  {
    English: "to say, tell",
    French: "dire",
    index: 19,
    type: "verb"
  },
  {
    English: "to be able to",
    French: "pouvoir",
    index: 20,
    type: "verb"
  },
  {
    English: "to want",
    French: "vouloir",
    index: 21,
    type: "verb"
  },
  {
    English: "but",
    French: "mais",
    index: 22,
    type: "others"
  },
  {
    English: "me, myself",
    French: "me",
    index: 23,
    type: "others"
  },
  {
    English: "we (formal)",
    French: "nous",
    index: 24,
    type: "others"
  },
  {
    English: "in, into",
    French: "dans",
    index: 25,
    type: "others"
  },
  {
    English: "she",
    French: "elle",
    index: 26,
    type: "others"
  },
  {
    English: "to know",
    French: "savoir",
    index: 27,
    type: "verb"
  },
  {
    English: "where",
    French: "où",
    index: 28,
    type: "others"
  },
  {
    English: "good",
    French: "bien",
    index: 29,
    type: "noun"
  },
  {
    English: "to see",
    French: "voir",
    index: 30,
    type: "verb"
  },
  {
    English: "more",
    French: "plus",
    index: 31,
    type: "others"
  },
  {
    English: "no",
    French: "non",
    index: 32,
    type: "others"
  },
  {
    English: "you, yourself",
    French: "te",
    index: 33,
    type: "others"
  },
  {
    English: "my (masculine singular)",
    French: "mon",
    index: 34,
    type: "adjective"
  },
  {
    English: "with",
    French: "avec",
    index: 35,
    type: "others"
  },
  {
    English: "what ",
    French: "quoi",
    index: 36,
    type: "others"
  },
  {
    English: "to have to, must",
    French: "devoir",
    index: 37,
    type: "verb"
  },
  {
    English: "yes",
    French: "oui",
    index: 38,
    type: "others"
  },
  {
    English: "they",
    French: "ils",
    index: 39,
    type: "others"
  },
  {
    English: "like",
    French: "comme",
    index: 40,
    type: "others"
  },
  {
    English: "to come",
    French: "venir",
    index: 41,
    type: "verb"
  },
  {
    English: "here",
    French: "ici",
    index: 42,
    type: "others"
  },
  {
    English: "nothing",
    French: "rien",
    index: 43,
    type: "others"
  },
  {
    English: "to follow",
    French: "suivre",
    index: 44,
    type: "verb"
  },
  {
    English: "why",
    French: "pourquoi",
    index: 45,
    type: "others"
  },
  {
    English: "to speak, talk",
    French: "parler",
    index: 46,
    type: "verb"
  },
  {
    English: "to take, get",
    French: "prendre",
    index: 47,
    type: "verb"
  },
  {
    English: "this, that (feminine singular)",
    French: "cette",
    index: 48,
    type: "others"
  },
  {
    English: "when",
    French: "quand",
    index: 49,
    type: "others"
  },
  {
    English: "then",
    French: "alors",
    index: 50,
    type: "others"
  },
  {
    English: "a thing",
    French: "une chose",
    index: 51,
    type: "noun"
  },
  {
    English: "his, her, its (masculine)",
    French: "son",
    index: 52,
    type: "adjective"
  },
  {
    English: "to believe",
    French: "croire",
    index: 53,
    type: "verb"
  },
  {
    English: "to like",
    French: "aimer",
    index: 54,
    type: "verb"
  },
  {
    English: "to must, have to",
    French: "falloir",
    index: 55,
    type: "verb"
  },
  {
    English: "how",
    French: "comment",
    index: 56,
    type: "others"
  },
  {
    English: "very",
    French: "très",
    index: 57,
    type: "others"
  },
  {
    English: "or",
    French: "ou",
    index: 58,
    type: "others"
  },
  {
    English: "to pass, spend",
    French: "passer",
    index: 59,
    type: "verb"
  },
  {
    English: "to think",
    French: "penser",
    index: 60,
    type: "verb"
  },
  {
    English: "also, too",
    French: "aussi",
    index: 61,
    type: "others"
  },
  {
    English: "never",
    French: "jamais",
    index: 62,
    type: "others"
  },
  {
    English: "to wait for",
    French: "attendre",
    index: 63,
    type: "verb"
  },
  {
    English: "to find",
    French: "trouver",
    index: 64,
    type: "verb"
  },
  {
    English: "to leave (thing/person not place)",
    French: "laisser",
    index: 65,
    type: "verb"
  },
  {
    English: "small",
    French: "petit",
    index: 66,
    type: "adjective"
  },
  {
    English: "thank you",
    French: "merci",
    index: 67,
    type: "others"
  },
  {
    English: "same",
    French: "même",
    index: 68,
    type: "adjective"
  },
  {
    English: "his, her, its (feminine)",
    French: "sa",
    index: 69,
    type: "adjective"
  },
  {
    English: "your (feminine)",
    French: "ta",
    index: 70,
    type: "adjective"
  },
  {
    English: "other",
    French: "autre",
    index: 71,
    type: "adjective"
  },
  {
    English: "to arrive",
    French: "arriver",
    index: 72,
    type: "verb"
  },
  {
    English: "these, those (plural masculine)",
    French: "ces",
    index: 73,
    type: "adjective"
  },
  {
    English: "to give",
    French: "donner",
    index: 74,
    type: "verb"
  },
  {
    English: "to look at",
    French: "regarder",
    index: 75,
    type: "verb"
  },
  {
    English: "still, again",
    French: "encore",
    index: 76,
    type: "others"
  },
  {
    English: "to call, ring",
    French: "appeler",
    index: 77,
    type: "verb"
  },
  {
    English: "is it",
    French: "est-ce que",
    index: 78,
    type: "others"
  },
  {
    English: "not much, few",
    French: "peu",
    index: 79,
    type: "adjective"
  },
  {
    English: "the man",
    French: "le homme",
    index: 80,
    type: "noun"
  },
  {
    English: "to go, leave",
    French: "partir",
    index: 81,
    type: "verb"
  },
  {
    English: "my (feminine singular)",
    French: "ma",
    index: 82,
    type: "adjective"
  },
  {
    English: "always",
    French: "toujours",
    index: 83,
    type: "others"
  },
  {
    English: "the day",
    French: "le jour",
    index: 84,
    type: "noun"
  },
  {
    English: "woman, wife",
    French: "la femme",
    index: 85,
    type: "noun"
  },
  {
    English: "the weather",
    French: "le temps",
    index: 86,
    type: "noun"
  },
  {
    English: "now",
    French: "maintenant",
    index: 87,
    type: "others"
  },
  {
    English: "our (singular) ",
    French: "notre",
    index: 88,
    type: "adjective"
  },
  {
    English: "the life",
    French: "la vie",
    index: 89,
    type: "noun"
  },
  {
    English: "two",
    French: "deux",
    index: 90,
    type: "adjective"
  },
  {
    English: "to put, put on ",
    French: "mettre",
    index: 91,
    type: "verb"
  },
  {
    English: "to stay",
    French: "rester",
    index: 92,
    type: "verb"
  },
  {
    English: "without",
    French: "sans",
    index: 93,
    type: "others"
  },
  {
    English: "alone",
    French: "seul",
    index: 94,
    type: "adjective"
  },
  {
    English: "to stop",
    French: "arrêter",
    index: 95,
    type: "verb"
  },
  {
    English: "really, very",
    French: "vraiment",
    index: 96,
    type: "others"
  },
  {
    English: "to know",
    French: "connaître",
    index: 97,
    type: "verb"
  },
  {
    English: "some",
    French: "quelque",
    index: 98,
    type: "adjective"
  },
  {
    English: "on, over",
    French: "sûr",
    index: 99,
    type: "adjective"
  },
  {
    English: "to kill",
    French: "tuer",
    index: 100,
    type: "verb"
  },
  {
    English: "to die",
    French: "mourir",
    index: 101,
    type: "verb"
  },
  {
    English: "to ask, ask for",
    French: "demander",
    index: 102,
    type: "verb"
  },
  {
    English: "just",
    French: "juste",
    index: 103,
    type: "adjective"
  },
  {
    English: "maybe",
    French: "peut-être",
    index: 104,
    type: "others"
  },
  {
    English: "god",
    French: "dieu",
    index: 105,
    type: "noun"
  },
  {
    English: "time, times",
    French: "fois",
    index: 106,
    type: "noun"
  },
  {
    English: "the father",
    French: "le père",
    index: 107,
    type: "noun"
  },
  {
    English: "to understand",
    French: "comprendre",
    index: 108,
    type: "verb"
  },
  {
    English: "to go out, leave, take out",
    French: "sortir",
    index: 109,
    type: "verb"
  },
  {
    English: "a person",
    French: "une personne",
    index: 110,
    type: "noun"
  },
  {
    English: "a year",
    French: "un an",
    index: 111,
    type: "noun"
  },
  {
    English: "too much, too ",
    French: "trop",
    index: 112,
    type: "others"
  },
  {
    English: "the daughter",
    French: "la fille",
    index: 113,
    type: "noun"
  },
  {
    English: "of the (à + les)",
    French: "aux",
    index: 114,
    type: "others"
  },
  {
    English: "the world",
    French: "le monde",
    index: 115,
    type: "noun"
  },
  {
    English: "a friend",
    French: "un ami",
    index: 116,
    type: "noun"
  },
  {
    English: "true, real",
    French: "vrai",
    index: 117,
    type: "adjective"
  },
  {
    English: "after",
    French: "après",
    index: 118,
    type: "others"
  },
  {
    English: "badly",
    French: "mal",
    index: 119,
    type: "others"
  },
  {
    English: "his, her, its (plural)",
    French: "ses",
    index: 120,
    type: "adjective"
  },
  {
    English: "before",
    French: "avant",
    index: 121,
    type: "others"
  },
  {
    English: "the gentleman",
    French: "le monsieur",
    index: 122,
    type: "noun"
  },
  {
    English: "a child",
    French: "un enfant",
    index: 123,
    type: "noun"
  },
  {
    English: "big, tall",
    French: "grand",
    index: 124,
    type: "adjective"
  },
  {
    English: "to hear, listen to",
    French: "entendre",
    index: 125,
    type: "verb"
  },
  {
    English: "to look for",
    French: "chercher",
    index: 126,
    type: "verb"
  },
  {
    English: "the time",
    French: "la heure",
    index: 127,
    type: "noun"
  },
  {
    English: "better",
    French: "mieux",
    index: 128,
    type: "adjective"
  },
  {
    English: "your (plural)",
    French: "tes",
    index: 129,
    type: "adjective"
  },
  {
    English: "to help",
    French: "aider",
    index: 130,
    type: "verb"
  },
  {
    English: "the mother",
    French: "la mère",
    index: 131,
    type: "noun"
  },
  {
    English: "already",
    French: "déjà",
    index: 132,
    type: "others"
  },
  {
    English: "beautiful (femenine)",
    French: "beau",
    index: 133,
    type: "adjective"
  },
  {
    English: "to try",
    French: "essayer",
    index: 134,
    type: "verb"
  },
  {
    English: "which (masculine)",
    French: "quel",
    index: 135,
    type: "others"
  },
  {
    English: "your (plural, from ''votre'')",
    French: "vos",
    index: 136,
    type: "adjective"
  },
  {
    English: "since",
    French: "depuis",
    index: 137,
    type: "others"
  },
  {
    English: "someone, somebody",
    French: "quelqu'un",
    index: 138,
    type: "others"
  },
  {
    English: "much, many, a lot",
    French: "beaucoup",
    index: 139,
    type: "others"
  },
  {
    English: "to come back, return",
    French: "revenir",
    index: 140,
    type: "verb"
  },
  {
    English: "so, therefore",
    French: "donc",
    index: 141,
    type: "others"
  },
  {
    English: "to fancy, like",
    French: "plaire",
    index: 142,
    type: "verb"
  },
  {
    English: "the house",
    French: "la maison",
    index: 143,
    type: "noun"
  },
  {
    English: "the people",
    French: "les gens",
    index: 144,
    type: "noun"
  },
  {
    English: "the night",
    French: "la nuit",
    index: 145,
    type: "noun"
  },
  {
    English: "the evening",
    French: "le soir",
    index: 146,
    type: "noun"
  },
  {
    English: "the name, noun",
    French: "le nom",
    index: 147,
    type: "noun"
  },
  {
    English: "hello ",
    French: "bonjour",
    index: 148,
    type: "noun"
  },
  {
    English: "to play",
    French: "jouer",
    index: 149,
    type: "verb"
  },
  {
    English: "their",
    French: "leur",
    index: 150,
    type: "adjective"
  },
  {
    English: "to finish",
    French: "finir",
    index: 151,
    type: "verb"
  },
  {
    English: "the fear",
    French: "la peur",
    index: 152,
    type: "noun"
  },
  {
    English: "dead",
    French: "mort",
    index: 153,
    type: "adjective"
  },
  {
    English: "because",
    French: "parce que",
    index: 154,
    type: "others"
  },
  {
    English: "to lose",
    French: "perdre",
    index: 155,
    type: "verb"
  },
  {
    English: "mummy, mama, mom",
    French: "maman",
    index: 156,
    type: "noun"
  },
  {
    English: "to smell, sniff, feel",
    French: "sentir",
    index: 157,
    type: "verb"
  },
  {
    English: "to return, go home",
    French: "rentrer",
    index: 158,
    type: "verb"
  },
  {
    English: "first",
    French: "premier",
    index: 159,
    type: "adjective"
  },
  {
    English: "the problem",
    French: "le problème",
    index: 160,
    type: "noun"
  },
  {
    English: "the money",
    French: "l'argent",
    index: 161,
    type: "noun"
  },
  {
    English: "which (feminine)",
    French: "quelle",
    index: 162,
    type: "others"
  },
  {
    English: "to live",
    French: "vivre",
    index: 163,
    type: "verb"
  },
  {
    English: "last",
    French: "dernier",
    index: 164,
    type: "adjective"
  },
  {
    English: "to hold, keep",
    French: "tenir",
    index: 165,
    type: "verb"
  },
  {
    English: "this, that (before vowel and mute h)",
    French: "cet",
    index: 166,
    type: "others"
  },
  {
    English: "the hand",
    French: "la main",
    index: 167,
    type: "noun"
  },
  {
    English: "this, that (formal) ",
    French: "cela",
    index: 168,
    type: "others"
  },
  {
    English: "quickly, fast",
    French: "vite",
    index: 169,
    type: "others"
  },
  {
    English: "to forget",
    French: "oublier",
    index: 170,
    type: "verb"
  },
  {
    English: "the air",
    French: "l'air",
    index: 171,
    type: "noun"
  },
  {
    English: "son",
    French: "fils",
    index: 172,
    type: "noun"
  },
  {
    English: "to work",
    French: "travailler",
    index: 173,
    type: "verb"
  },
  {
    English: "less",
    French: "moins",
    index: 174,
    type: "others"
  },
  {
    English: "head",
    French: "la tête",
    index: 175,
    type: "noun"
  },
  {
    English: "the blow, shot, punch",
    French: "le coup",
    index: 176,
    type: "noun"
  },
  {
    English: "to listen to",
    French: "écouter",
    index: 177,
    type: "verb"
  },
  {
    English: "le reason",
    French: "la raison",
    index: 178,
    type: "noun"
  },
  {
    English: "to eat",
    French: "manger",
    index: 179,
    type: "verb"
  },
  {
    English: "love",
    French: "l'amour",
    index: 180,
    type: "noun"
  },
  {
    English: "to enter",
    French: "entrer",
    index: 181,
    type: "verb"
  },
  {
    English: "whose, of which",
    French: "dont",
    index: 182,
    type: "others"
  },
  {
    English: "new (masculine)",
    French: "nouveau",
    index: 183,
    type: "adjective"
  },
  {
    English: "to become",
    French: "devenir",
    index: 184,
    type: "verb"
  },
  {
    English: "to start",
    French: "commencer",
    index: 185,
    type: "verb"
  },
  {
    English: "shit (vulgar)",
    French: "merde",
    index: 186,
    type: "others"
  },
  {
    English: "the moment",
    French: "le moment",
    index: 187,
    type: "noun"
  },
  {
    English: "the car",
    French: "la voiture",
    index: 188,
    type: "noun"
  },
  {
    English: "old",
    French: "vieux",
    index: 189,
    type: "adjective"
  },
  {
    English: "tomorrow",
    French: "demain",
    index: 190,
    type: "others"
  },
  {
    English: "to review",
    French: "revoir",
    index: 191,
    type: "verb"
  },
  {
    English: "they (feminine)",
    French: "elles",
    index: 192,
    type: "others"
  },
  {
    English: "to pay",
    French: "payer",
    index: 193,
    type: "verb"
  },
  {
    English: "mad, crazy (masculine)",
    French: "fou",
    index: 194,
    type: "adjective"
  },
  {
    English: "to pull, draw, shoot",
    French: "tirer",
    index: 195,
    type: "verb"
  },
  {
    English: "to open",
    French: "ouvrir",
    index: 196,
    type: "verb"
  },
  {
    English: "the eye",
    French: "l'oeil",
    index: 197,
    type: "noun"
  },
  {
    English: "the fact",
    French: "le fait",
    index: 198,
    type: "noun"
  },
  {
    English: "to change",
    French: "changer",
    index: 199,
    type: "verb"
  },
  {
    English: "the question",
    French: "la question",
    index: 200,
    type: "noun"
  },
  {
    English: "to fall",
    French: "tomber",
    index: 201,
    type: "verb"
  },
  {
    English: "enough",
    French: "assez",
    index: 202,
    type: "others"
  },
  {
    English: "to have sex (vulgar)",
    French: "foutre",
    index: 203,
    type: "verb"
  },
  {
    English: "to forgive",
    French: "excuser",
    index: 204,
    type: "verb"
  },
  {
    English: "the case, business, matter",
    French: "l'affaire",
    index: 205,
    type: "noun"
  },
  {
    English: "to sleep",
    French: "dormir",
    index: 206,
    type: "verb"
  },
  {
    English: "how much, how many",
    French: "combien",
    index: 207,
    type: "others"
  },
  {
    English: "the brother",
    French: "le frère",
    index: 208,
    type: "noun"
  },
  {
    English: "the work",
    French: "le travail",
    index: 209,
    type: "noun"
  },
  {
    English: "the idea",
    French: "l'idée",
    index: 210,
    type: "noun"
  },
  {
    English: "then",
    French: "puis",
    index: 211,
    type: "others"
  },
  {
    English: "the family",
    French: "la famille",
    index: 212,
    type: "noun"
  },
  {
    English: "the trick",
    French: "le truc",
    index: 213,
    type: "noun"
  },
  {
    English: "three",
    French: "trois",
    index: 214,
    type: "adjective"
  },
  {
    English: "so much",
    French: "tant",
    index: 215,
    type: "others"
  },
  {
    English: "the memory",
    French: "la mémoire",
    index: 216,
    type: "noun"
  },
  {
    English: "nor",
    French: "ni",
    index: 217,
    type: "others"
  },
  {
    English: "to occupy",
    French: "occuper",
    index: 218,
    type: "verb"
  },
  {
    English: "between",
    French: "entre",
    index: 219,
    type: "preposition"
  },
  {
    English: "to walk",
    French: "marcher",
    index: 220,
    type: "verb"
  },
  {
    English: "luck, fortune",
    French: "chance",
    index: 221,
    type: "noun"
  },
  {
    English: "today",
    French: "aujourd'hui",
    index: 222,
    type: "others"
  },
  {
    English: "to send",
    French: "envoyer",
    index: 223,
    type: "verb"
  },
  {
    English: "the history, story",
    French: "l'histoire",
    index: 224,
    type: "noun"
  },
  {
    English: "young",
    French: "jeune",
    index: 225,
    type: "adjective"
  },
  {
    English: "late",
    French: "tard",
    index: 226,
    type: "adjective"
  },
  {
    English: "to learn",
    French: "apprendre",
    index: 227,
    type: "verb"
  },
  {
    English: "the minute",
    French: "la minute",
    index: 228,
    type: "noun"
  },
  {
    English: "to drink",
    French: "boire",
    index: 229,
    type: "verb"
  },
  {
    English: "to keep, save",
    French: "garder",
    index: 230,
    type: "verb"
  },
  {
    English: "some, a few",
    French: "quelques",
    index: 231,
    type: "adjective"
  },
  {
    English: "the type",
    French: "le type",
    index: 232,
    type: "noun"
  },
  {
    English: "the door",
    French: "la porte",
    index: 233,
    type: "noun"
  },
  {
    English: "to show",
    French: "montrer",
    index: 234,
    type: "verb"
  },
  {
    English: "the guy, bloke",
    French: "le mec",
    index: 235,
    type: "noun"
  },
  {
    English: "to sit ",
    French: "asseoir",
    index: 236,
    type: "verb"
  },
  {
    English: "to carry, wear",
    French: "porter",
    index: 237,
    type: "verb"
  },
  {
    English: "attention",
    French: "attention",
    index: 238,
    type: "noun"
  },
  {
    English: "the year",
    French: "l'année",
    index: 239,
    type: "noun"
  },
  {
    English: "under",
    French: "sous",
    index: 240,
    type: "others"
  },
  {
    English: "ready",
    French: "prêt",
    index: 241,
    type: "adjective"
  },
  {
    English: "against",
    French: "contre",
    index: 242,
    type: "others"
  },
  {
    English: "to pray",
    French: "prier",
    index: 243,
    type: "verb"
  },
  {
    English: "during",
    French: "pendant",
    index: 244,
    type: "preposition"
  },
  {
    English: "the month",
    French: "le mois",
    index: 245,
    type: "noun"
  },
  {
    English: "better",
    French: "meilleur",
    index: 246,
    type: "adjective"
  },
  {
    English: "to serve",
    French: "servir",
    index: 247,
    type: "verb"
  },
  {
    English: "Mrs",
    French: "madame",
    index: 248,
    type: "noun"
  },
  {
    English: "whore, hooker",
    French: "putain",
    index: 249,
    type: "noun"
  },
  {
    English: "to write",
    French: "écrire",
    index: 250,
    type: "verb"
  },
  {
    English: "the part",
    French: "la part",
    index: 251,
    type: "noun"
  },
  {
    English: "the water",
    French: "l'eau",
    index: 252,
    type: "noun"
  },
  {
    English: "the blood",
    French: "le sang",
    index: 253,
    type: "noun"
  },
  {
    English: "the place",
    French: "la place",
    index: 254,
    type: "noun"
  },
  {
    English: "to hope for",
    French: "espérer",
    index: 255,
    type: "verb"
  },
  {
    English: "full",
    French: "plein",
    index: 256,
    type: "adjective"
  },
  {
    English: "to be upset",
    French: "se désoler",
    index: 257,
    type: "verb"
  },
  {
    English: "them, they",
    French: "eux",
    index: 258,
    type: "others"
  },
  {
    English: "to find",
    French: "retrouver",
    index: 259,
    type: "verb"
  },
  {
    English: "the town, city",
    French: "la ville",
    index: 260,
    type: "noun"
  },
  {
    English: "the earth",
    French: "la terre",
    index: 261,
    type: "noun"
  },
  {
    English: "to win, earn",
    French: "gagner",
    index: 262,
    type: "verb"
  },
  {
    English: "the week",
    French: "la semaine",
    index: 263,
    type: "noun"
  },
  {
    English: "to buy",
    French: "acheter",
    index: 264,
    type: "verb"
  },
  {
    English: "long, for a long time",
    French: "longtemps",
    index: 265,
    type: "others"
  },
  {
    English: "the bedroom",
    French: "la chambre",
    index: 266,
    type: "noun"
  },
  {
    English: "the coast",
    French: "la côté",
    index: 267,
    type: "noun"
  },
  {
    English: "right",
    French: "droit",
    index: 268,
    type: "adjective"
  },
  {
    English: "to remember",
    French: "rappeler",
    index: 269,
    type: "verb"
  },
  {
    English: "to read",
    French: "lire",
    index: 270,
    type: "verb"
  },
  {
    English: "the case",
    French: "le cas",
    index: 271,
    type: "noun"
  },
  {
    English: "the word",
    French: "le mot",
    index: 272,
    type: "noun"
  },
  {
    English: "only",
    French: "seulement",
    index: 273,
    type: "others"
  },
  {
    English: "here is, here are",
    French: "voici",
    index: 274,
    type: "others"
  },
  {
    English: "to go up",
    French: "monter",
    index: 275,
    type: "verb"
  },
  {
    English: "sorry",
    French: "désolé",
    index: 276,
    type: "adjective"
  },
  {
    English: "to leave",
    French: "quitter",
    index: 277,
    type: "verb"
  },
  {
    English: "the police",
    French: "la police",
    index: 278,
    type: "noun"
  },
  {
    English: "the morning",
    French: "le matin",
    index: 279,
    type: "noun"
  },
  {
    English: "to take, bring",
    French: "emmener",
    index: 280,
    type: "verb"
  },
  {
    English: "to touch",
    French: "toucher",
    index: 281,
    type: "verb"
  },
  {
    English: "to continue",
    French: "continuer",
    index: 282,
    type: "verb"
  },
  {
    English: "in front of",
    French: "devant",
    index: 283,
    type: "others"
  },
  {
    English: "strong, loud",
    French: "fort",
    index: 284,
    type: "adjective"
  },
  {
    English: "big, large, fat",
    French: "gros",
    index: 285,
    type: "adjective"
  },
  {
    English: "finally",
    French: "enfin",
    index: 286,
    type: "others"
  },
  {
    English: "the husband",
    French: "le mari",
    index: 287,
    type: "noun"
  },
  {
    English: "over there",
    French: "là-bas",
    index: 288,
    type: "others"
  },
  {
    English: "to be important, to matter",
    French: "importer",
    index: 289,
    type: "verb"
  },
  {
    English: "the train",
    French: "le train",
    index: 290,
    type: "noun"
  },
  {
    English: "to miss",
    French: "manquer",
    index: 291,
    type: "verb"
  },
  {
    English: "to tell",
    French: "raconter",
    index: 292,
    type: "verb"
  },
  {
    English: "together",
    French: "ensemble",
    index: 293,
    type: "others"
  },
  {
    English: "the film",
    French: "le film",
    index: 294,
    type: "noun"
  },
  {
    English: "to answer, reply",
    French: "répondre",
    index: 295,
    type: "verb"
  },
  {
    English: "the boy",
    French: "le garçon",
    index: 296,
    type: "noun"
  },
  {
    English: "darling",
    French: "chéri",
    index: 297,
    type: "noun"
  },
  {
    English: "the body",
    French: "le corps",
    index: 298,
    type: "noun"
  },
  {
    English: "that one (singular masculine)",
    French: "celui-là",
    index: 299,
    type: "others"
  },
  {
    English: "happy",
    French: "heureux",
    index: 300,
    type: "adjective"
  },
  {
    English: "far",
    French: "loin",
    index: 301,
    type: "adjective"
  },
  {
    English: "no, not any; none ",
    French: "aucun",
    index: 302,
    type: "others"
  },
  {
    English: "poor",
    French: "pauvre",
    index: 303,
    type: "adjective"
  },
  {
    English: "to save",
    French: "sauver",
    index: 304,
    type: "verb"
  },
  {
    English: "each, every",
    French: "chaque",
    index: 305,
    type: "adjective"
  },
  {
    English: "to turn over, flip",
    French: "retourner",
    index: 306,
    type: "verb"
  },
  {
    English: "to meet",
    French: "rencontrer",
    index: 307,
    type: "verb"
  },
  {
    English: "the heart",
    French: "le coeur",
    index: 308,
    type: "noun"
  },
  {
    English: "to fly, steal",
    French: "voler",
    index: 309,
    type: "verb"
  },
  {
    English: "to close",
    French: "fermer",
    index: 310,
    type: "verb"
  },
  {
    English: "to be worth",
    French: "valoir",
    index: 311,
    type: "verb"
  },
  {
    English: "to go down",
    French: "descendre",
    index: 312,
    type: "verb"
  },
  {
    English: "the fire",
    French: "le feu",
    index: 313,
    type: "noun"
  },
  {
    English: "the doctor",
    French: "le docteur",
    index: 314,
    type: "noun"
  },
  {
    English: "to be enough, suffice",
    French: "suffire",
    index: 315,
    type: "verb"
  },
  {
    English: "the way, manner",
    French: "façon",
    index: 316,
    type: "noun"
  },
  {
    English: "important",
    French: "important",
    index: 317,
    type: "adjective"
  },
  {
    English: "to seem, appear",
    French: "sembler",
    index: 318,
    type: "verb"
  },
  {
    English: "to count",
    French: "compter",
    index: 319,
    type: "verb"
  },
  {
    English: "towards, about (time, age)",
    French: "vers",
    index: 320,
    type: "others"
  },
  {
    English: "nice, pretty, lovely",
    French: "joli",
    index: 321,
    type: "adjective"
  },
  {
    English: "the dot",
    French: "le point",
    index: 322,
    type: "noun"
  },
  {
    English: "black",
    French: "noir",
    index: 323,
    type: "adjective, noun"
  },
  {
    English: "yesterday",
    French: "hier",
    index: 324,
    type: "others"
  },
  {
    English: "the dog",
    French: "le chien",
    index: 325,
    type: "noun"
  },
  {
    English: "the war",
    French: "la guerre",
    index: 326,
    type: "noun"
  },
  {
    English: "the kind, type",
    French: "le genre",
    index: 327,
    type: "noun"
  },
  {
    English: "to marry",
    French: "se marier",
    index: 328,
    type: "verb"
  },
  {
    English: "the weapon",
    French: "l'arme",
    index: 329,
    type: "noun"
  },
  {
    English: "the cause",
    French: "la cause",
    index: 330,
    type: "noun"
  },
  {
    English: "the place, location",
    French: "le endroit",
    index: 331,
    type: "noun"
  },
  {
    English: "the order, command",
    French: "l'ordre",
    index: 332,
    type: "noun"
  },
  {
    English: "to lay",
    French: "poser",
    index: 333,
    type: "verb"
  },
  {
    English: "the rest",
    French: "le reste",
    index: 334,
    type: "noun"
  },
  {
    English: "the foot",
    French: "la pied",
    index: 335,
    type: "noun"
  },
  {
    English: "the desire",
    French: "l'envie",
    index: 336,
    type: "noun"
  },
  {
    English: "near",
    French: "près",
    index: 337,
    type: "adjective "
  },
  {
    English: "the end",
    French: "le fin",
    index: 338,
    type: "noun"
  },
  {
    English: "to worry",
    French: "inquiéter",
    index: 339,
    type: "verb"
  },
  {
    English: "to move",
    French: "déplacer",
    index: 340,
    type: "verb"
  },
  {
    English: "rather, quite",
    French: "plutôt",
    index: 341,
    type: "others"
  },
  {
    English: "to bring",
    French: "apporter",
    index: 342,
    type: "verb"
  },
  {
    English: "the photo",
    French: "la photo",
    index: 343,
    type: "noun"
  },
  {
    English: "to decide",
    French: "décider",
    index: 344,
    type: "verb"
  },
  {
    English: "like this",
    French: "comme ça",
    index: 345,
    type: "others"
  },
  {
    English: "certain, sure",
    French: "certain",
    index: 346,
    type: "others"
  },
  {
    English: "to sell",
    French: "vendre",
    index: 347,
    type: "verb"
  },
  {
    English: "the school",
    French: "l'école",
    index: 348,
    type: "noun"
  },
  {
    English: "the boss",
    French: "le chef",
    index: 349,
    type: "noun"
  },
  {
    English: "to turn",
    French: "tourner",
    index: 350,
    type: "verb"
  },
  {
    English: "to hide",
    French: "cacher",
    index: 351,
    type: "verb"
  },
  {
    English: "the country",
    French: "le pays",
    index: 352,
    type: "noun"
  },
  {
    English: "that one (masculine plural) ",
    French: "ceux-là",
    index: 353,
    type: "others"
  },
  {
    English: "possbile",
    French: "possible",
    index: 354,
    type: "adjective"
  },
  {
    English: "to explain",
    French: "expliquer",
    index: 355,
    type: "verb"
  },
  {
    English: "to beat",
    French: "battre",
    index: 356,
    type: "verb"
  },
  {
    English: "sorrow, grief, saddness",
    French: "peine",
    index: 357,
    type: "noun"
  },
  {
    English: "the book",
    French: "le livre",
    index: 358,
    type: "noun"
  },
  {
    English: "to act",
    French: "agir",
    index: 359,
    type: "verb"
  },
  {
    English: "to imagine",
    French: "imaginer",
    index: 360,
    type: "verb"
  },
  {
    English: "the tower",
    French: "la tour",
    index: 361,
    type: "noun"
  },
  {
    English: "to love",
    French: "adorer",
    index: 362,
    type: "verb"
  },
  {
    English: "the truth",
    French: "la vérité",
    index: 363,
    type: "noun"
  },
  {
    English: "to receive",
    French: "recevoir",
    index: 364,
    type: "verb"
  },
  {
    English: "kind",
    French: "gentil",
    index: 365,
    type: "adjective"
  },
  {
    English: "to throw",
    French: "jeter",
    index: 366,
    type: "verb"
  },
  {
    English: "to cry ",
    French: "pleurer",
    index: 367,
    type: "verb"
  },
  {
    English: "the baby",
    French: "le bébé",
    index: 368,
    type: "noun"
  },
  {
    English: "the part",
    French: "la partie",
    index: 369,
    type: "noun"
  },
  {
    English: "new (feminine)",
    French: "nouvelle",
    index: 370,
    type: "adjective"
  },
  {
    English: "the game",
    French: "le jeu",
    index: 371,
    type: "noun"
  },
  {
    English: "the instant",
    French: "l'instant",
    index: 372,
    type: "noun"
  },
  {
    English: "the relative, parent",
    French: "le parent",
    index: 373,
    type: "noun"
  },
  {
    English: "hard (not soft)",
    French: "dur",
    index: 374,
    type: "adjective"
  },
  {
    English: "the service",
    French: "le service",
    index: 375,
    type: "noun"
  },
  {
    English: "a pleasure",
    French: "un plaisir",
    index: 376,
    type: "noun"
  },
  {
    English: "to promise",
    French: "promettre",
    index: 377,
    type: "verb"
  },
  {
    English: "to lie",
    French: "mentir",
    index: 378,
    type: "verb"
  },
  {
    English: "the sister",
    French: "la sœur",
    index: 379,
    type: "noun"
  },
  {
    English: "soon",
    French: "bientôt",
    index: 380,
    type: "others"
  },
  {
    English: "the bed",
    French: "le lit",
    index: 381,
    type: "noun"
  },
  {
    English: "to use",
    French: "utiliser",
    index: 382,
    type: "verb"
  },
  {
    English: "the place",
    French: "le lieu",
    index: 383,
    type: "noun"
  },
  {
    English: "to go to bed",
    French: "se coucher",
    index: 384,
    type: "verb"
  },
  {
    English: "almost",
    French: "presque",
    index: 385,
    type: "others"
  },
  {
    English: "outside",
    French: "dehors",
    index: 386,
    type: "others"
  },
  {
    English: "the past",
    French: "le passé",
    index: 387,
    type: "noun"
  },
  {
    English: "to prefer",
    French: "préférer",
    index: 388,
    type: "verb"
  },
  {
    English: "pleased, glad",
    French: "content",
    index: 389,
    type: "adjective"
  },
  {
    English: "behind",
    French: "derrière",
    index: 390,
    type: "others"
  },
  {
    English: "to offer",
    French: "offrir",
    index: 391,
    type: "verb"
  },
  {
    English: "king",
    French: "le roi",
    index: 392,
    type: "noun"
  },
  {
    English: "the glass",
    French: "le verre",
    index: 393,
    type: "noun"
  },
  {
    English: "to wake up",
    French: "se réveiller",
    index: 394,
    type: "verb"
  },
  {
    English: "the help",
    French: "l'aide",
    index: 395,
    type: "noun"
  },
  {
    English: "daytime",
    French: "journée",
    index: 396,
    type: "noun"
  },
  {
    English: "to prepare",
    French: "préparer",
    index: 397,
    type: "verb"
  },
  {
    English: "the number",
    French: "le nombre",
    index: 398,
    type: "noun"
  },
  {
    English: "to allow",
    French: "permettre",
    index: 399,
    type: "verb"
  },
  {
    English: "to bring back",
    French: "ramener",
    index: 400,
    type: "verb"
  },
  {
    English: "to remove, kidnap",
    French: "enlever",
    index: 401,
    type: "verb"
  },
  {
    English: "calm",
    French: "calme",
    index: 402,
    type: "adjective"
  },
  {
    English: "to let go of",
    French: "lâcher",
    index: 403,
    type: "verb"
  },
  {
    English: "to choose",
    French: "choisir",
    index: 404,
    type: "verb"
  },
  {
    English: "the music",
    French: "la musique",
    index: 405,
    type: "noun"
  },
  {
    English: "to drive",
    French: "conduire",
    index: 406,
    type: "verb"
  },
  {
    English: "the fault",
    French: "la faute",
    index: 407,
    type: "noun"
  },
  {
    English: "to calm down",
    French: "se calmer",
    index: 408,
    type: "verb"
  },
  {
    English: "the dinner",
    French: "le dîner",
    index: 409,
    type: "noun"
  },
  {
    English: "the marriage, wedding",
    French: "le mariage",
    index: 410,
    type: "noun"
  },
  {
    English: "the office, desk",
    French: "le bureau",
    index: 411,
    type: "noun"
  },
  {
    English: "the road",
    French: "la route",
    index: 412,
    type: "noun"
  },
  {
    English: "to sing",
    French: "chanter",
    index: 413,
    type: "verb"
  },
  {
    English: "the secret",
    French: "le secret",
    index: 414,
    type: "noun"
  },
  {
    English: "to disappear",
    French: "disparaître",
    index: 415,
    type: "verb"
  },
  {
    English: "to lift",
    French: "lever",
    index: 416,
    type: "verb"
  },
  {
    English: "to introduce",
    French: "présenter",
    index: 417,
    type: "verb"
  },
  {
    English: "to accept",
    French: "accepter",
    index: 418,
    type: "verb"
  },
  {
    English: "to kiss",
    French: "baiser",
    index: 419,
    type: "verb"
  },
  {
    English: "otherwise",
    French: "sinon",
    index: 420,
    type: "others"
  },
  {
    English: "the idiot",
    French: "l'idiot",
    index: 421,
    type: "noun"
  },
  {
    English: "long",
    French: "long",
    index: 422,
    type: "adjective"
  },
  {
    English: "coffee",
    French: "le café",
    index: 423,
    type: "noun"
  },
  {
    English: "clean",
    French: "propre",
    index: 424,
    type: "adjective"
  },
  {
    English: "the trust",
    French: "la confiance",
    index: 425,
    type: "noun"
  },
  {
    English: "five",
    French: "cinq",
    index: 426,
    type: "adjective"
  },
  {
    English: "good evening, good night",
    French: "bonsoir",
    index: 427,
    type: "noun"
  },
  {
    English: "the phone",
    French: "le téléphone",
    index: 428,
    type: "noun"
  },
  {
    English: "to break",
    French: "casser",
    index: 429,
    type: "verb"
  },
  {
    English: "next",
    French: "prochain",
    index: 430,
    type: "adjective"
  },
  {
    English: "to hit",
    French: "frapper",
    index: 431,
    type: "verb"
  },
  {
    English: "easy",
    French: "facile",
    index: 432,
    type: "adjective"
  },
  {
    English: "the dream",
    French: "le rêve",
    index: 433,
    type: "noun"
  },
  {
    English: "a friend",
    French: "un copain",
    index: 434,
    type: "noun"
  },
  {
    English: "ill",
    French: "malade",
    index: 435,
    type: "adjective"
  },
  {
    English: "the street",
    French: "la rue",
    index: 436,
    type: "noun"
  },
  {
    English: "low",
    French: "bas",
    index: 437,
    type: "adjective"
  },
  {
    English: "the letter",
    French: "la lettre",
    index: 438,
    type: "noun"
  },
  {
    English: "to ignore",
    French: "ignorer",
    index: 439,
    type: "verb"
  },
  {
    English: "the party",
    French: "la fête",
    index: 440,
    type: "noun"
  },
  {
    English: "to cut",
    French: "couper",
    index: 441,
    type: "verb"
  },
  {
    English: "the mind",
    French: "l'esprit",
    index: 442,
    type: "noun"
  },
  {
    English: "to stop talking",
    French: "taire",
    index: 443,
    type: "verb"
  },
  {
    English: "the lord",
    French: "le seigneur",
    index: 444,
    type: "noun"
  },
  {
    English: "the cop, policeman",
    French: "le flic",
    index: 445,
    type: "noun"
  },
  {
    English: "sometimes",
    French: "parfois",
    index: 446,
    type: "others "
  },
  {
    English: "the captain",
    French: "le capitaine",
    index: 447,
    type: "noun"
  },
  {
    English: "age",
    French: "âge",
    index: 448,
    type: "noun"
  },
  {
    English: "as much, as many",
    French: "autant",
    index: 449,
    type: "others"
  },
  {
    English: "the force, strength",
    French: "la force",
    index: 450,
    type: "noun"
  },
  {
    English: "the piece",
    French: "la pièce",
    index: 451,
    type: "noun"
  },
  {
    English: "four",
    French: "quatre",
    index: 452,
    type: "adjective"
  },
  {
    English: "the bum, ass",
    French: "le cul",
    index: 453,
    type: "noun"
  },
  {
    English: "difficult",
    French: "difficile",
    index: 454,
    type: "adjective"
  },
  {
    English: "the arm",
    French: "le bras",
    index: 455,
    type: "noun"
  },
  {
    English: "to deceive",
    French: "tromper",
    index: 456,
    type: "verb"
  },
  {
    English: "above all",
    French: "surtout",
    index: 457,
    type: "others"
  },
  {
    English: "to look like, to resemble",
    French: "ressembler",
    index: 458,
    type: "verb"
  },
  {
    English: "to swear",
    French: "jurer",
    index: 459,
    type: "verb"
  },
  {
    English: "the plan",
    French: "le plan",
    index: 460,
    type: "noun"
  },
  {
    English: "the prison",
    French: "la prison",
    index: 461,
    type: "noun"
  },
  {
    English: "dirty",
    French: "sale",
    index: 462,
    type: "adjective"
  },
  {
    English: "to run",
    French: "courir",
    index: 463,
    type: "verb"
  },
  {
    English: "the top",
    French: "l'haut",
    index: 464,
    type: "noun"
  },
  {
    English: "the state",
    French: "l'état",
    index: 465,
    type: "noun"
  },
  {
    English: "to put back",
    French: "remettre",
    index: 466,
    type: "verb"
  },
  {
    English: "the map",
    French: "la carte",
    index: 467,
    type: "noun"
  },
  {
    English: "the peace",
    French: "la paix",
    index: 468,
    type: "noun"
  },
  {
    English: "exactly",
    French: "exactement",
    index: 469,
    type: "others"
  },
  {
    English: "funny",
    French: "drôle",
    index: 470,
    type: "adjective"
  },
  {
    English: "to refuse",
    French: "refuser",
    index: 471,
    type: "verb"
  },
  {
    English: "the president",
    French: "le président",
    index: 472,
    type: "noun"
  },
  {
    English: "the course, class",
    French: "le cours",
    index: 473,
    type: "noun"
  },
  {
    English: "serious",
    French: "grave",
    index: 474,
    type: "adjective"
  },
  {
    English: "to finish",
    French: "terminer",
    index: 475,
    type: "verb"
  },
  {
    English: "the sky",
    French: "le ciel",
    index: 476,
    type: "noun"
  },
  {
    English: "everywhere",
    French: "partout",
    index: 477,
    type: "others"
  },
  {
    English: "the soul",
    French: "l'âme",
    index: 478,
    type: "noun"
  },
  {
    English: "the boss",
    French: "patron",
    index: 479,
    type: "noun"
  },
  {
    English: "to amuse, entertain",
    French: "amuser",
    index: 480,
    type: "verb"
  },
  {
    English: "that one (feminine singular) ",
    French: "celle-là",
    index: 481,
    type: "others"
  },
  {
    English: "the face",
    French: "le visage",
    index: 482,
    type: "noun"
  },
  {
    English: "to interest",
    French: "intéresser",
    index: 483,
    type: "verb"
  },
  {
    English: "to recognize",
    French: "reconnaître",
    index: 484,
    type: "verb"
  },
  {
    English: "to laugh",
    French: "rire",
    index: 485,
    type: "verb"
  },
  {
    English: "the doctor",
    French: "le médecin",
    index: 486,
    type: "noun"
  },
  {
    English: "report, connection, link, relationship",
    French: "le rapport",
    index: 487,
    type: "noun"
  },
  {
    English: "to forgive",
    French: "pardonner",
    index: 488,
    type: "verb"
  },
  {
    English: "the opinion",
    French: "l'avis",
    index: 489,
    type: "noun"
  },
  {
    English: "to embrace",
    French: "embrasser",
    index: 490,
    type: "verb"
  },
  {
    English: "the return",
    French: "le retour",
    index: 491,
    type: "noun"
  },
  {
    English: "simple",
    French: "simple",
    index: 492,
    type: "adjective"
  },
  {
    English: "to dance",
    French: "danser",
    index: 493,
    type: "verb"
  },
  {
    English: "to exist",
    French: "exister",
    index: 494,
    type: "verb"
  },
  {
    English: "different",
    French: "différent",
    index: 495,
    type: "adjective"
  },
  {
    English: "often",
    French: "souvent",
    index: 496,
    type: "others"
  },
  {
    English: "the light",
    French: "la lumière",
    index: 497,
    type: "noun"
  },
  {
    English: "great",
    French: "génial",
    index: 498,
    type: "adjective"
  },
  {
    English: "free",
    French: "libre",
    index: 499,
    type: "adjective"
  },
  {
    English: "a dollar",
    French: "un dollar",
    index: 500,
    type: "noun"
  },
  {
    English: "surely",
    French: "sûrement",
    index: 501,
    type: "others"
  },
  {
    English: "the same",
    French: "pareil",
    index: 502,
    type: "adjective"
  },
  {
    English: "the hospital",
    French: "l'hôpital",
    index: 503,
    type: "noun"
  },
  {
    English: "to be successful, succeed",
    French: "réussir",
    index: 504,
    type: "verb"
  },
  {
    English: "odd, strange, bizarre",
    French: "bizarre",
    index: 505,
    type: "adjective"
  },
  {
    English: "the voice",
    French: "la voix",
    index: 506,
    type: "noun"
  },
  {
    English: "to protect",
    French: "protéger",
    index: 507,
    type: "verb"
  },
  {
    English: "honour",
    French: "honneur",
    index: 508,
    type: "noun"
  },
  {
    English: "early",
    French: "tôt",
    index: 509,
    type: "others"
  },
  {
    English: "the team",
    French: "l'équipe",
    index: 510,
    type: "noun"
  },
  {
    English: "to prevent",
    French: "prévenir",
    index: 511,
    type: "verb"
  },
  {
    English: "the horse",
    French: "le cheval",
    index: 512,
    type: "noun"
  },
  {
    English: "elsewhere, somewhere else",
    French: "ailleurs",
    index: 513,
    type: "others"
  },
  {
    English: "the master",
    French: "le maître",
    index: 514,
    type: "noun"
  },
  {
    English: "the plane",
    French: "l'avion",
    index: 515,
    type: "noun"
  },
  {
    English: "to live in",
    French: "habiter",
    index: 516,
    type: "verb"
  },
  {
    English: "the hunger",
    French: "la faim",
    index: 517,
    type: "noun"
  },
  {
    English: "then, next, afterwards",
    French: "ensuite",
    index: 518,
    type: "others"
  },
  {
    English: "cold",
    French: "froid",
    index: 519,
    type: "adjective"
  },
  {
    English: "normal",
    French: "normal",
    index: 520,
    type: "adjective"
  },
  {
    English: "to disturb, upset",
    French: "déranger",
    index: 521,
    type: "verb"
  },
  {
    English: "to resume",
    French: "reprendre",
    index: 522,
    type: "verb"
  },
  {
    English: "the uncle",
    French: "l'oncle",
    index: 523,
    type: "noun"
  },
  {
    English: "price, prize",
    French: "le prix",
    index: 524,
    type: "noun"
  },
  {
    English: "the delay",
    French: "le retard",
    index: 525,
    type: "noun"
  },
  {
    English: "to destroy",
    French: "détruire",
    index: 526,
    type: "verb"
  },
  {
    English: "the present, gift",
    French: "le cadeau",
    index: 527,
    type: "noun"
  },
  {
    English: "to push, press",
    French: "pousser",
    index: 528,
    type: "verb"
  },
  {
    English: "the face",
    French: "la face",
    index: 529,
    type: "noun"
  },
  {
    English: "the mouth",
    French: "la gueule",
    index: 530,
    type: "noun"
  },
  {
    English: "the path",
    French: "le chemin",
    index: 531,
    type: "noun"
  },
  {
    English: "alive",
    French: "vivant",
    index: 532,
    type: "adjective"
  },
  {
    English: "the general (military)",
    French: "le général",
    index: 533,
    type: "noun"
  },
  {
    English: "the boat",
    French: "le bateau",
    index: 534,
    type: "noun"
  },
  {
    English: "a million",
    French: "un million",
    index: 535,
    type: "noun"
  },
  {
    English: "the bag",
    French: "le sac",
    index: 536,
    type: "noun"
  },
  {
    English: "impossible",
    French: "impossible",
    index: 537,
    type: "adjective"
  },
  {
    English: "a second",
    French: "une second",
    index: 538,
    type: "noun"
  },
  {
    English: "silly",
    French: "bête",
    index: 539,
    type: "adjective"
  },
  {
    English: "to discover",
    French: "découvrir",
    index: 540,
    type: "verb"
  },
  {
    English: "the error",
    French: "l'erreur",
    index: 541,
    type: "noun"
  },
  {
    English: "the sun",
    French: "le soleil",
    index: 542,
    type: "noun"
  },
  {
    English: "the trip, journey",
    French: "le voyage",
    index: 543,
    type: "noun"
  },
  {
    English: "to jump",
    French: "sauter",
    index: 544,
    type: "verb"
  },
  {
    English: "to dream",
    French: "rêver",
    index: 545,
    type: "verb"
  },
  {
    English: "to hate",
    French: "détester",
    index: 546,
    type: "verb"
  },
  {
    English: "clear",
    French: "clair",
    index: 547,
    type: "adjective"
  },
  {
    English: "fake, wrong",
    French: "faux",
    index: 548,
    type: "adjective"
  },
  {
    English: "to seem, appear, be published",
    French: "paraître",
    index: 549,
    type: "verb"
  },
  {
    English: "the ball",
    French: "le ballon",
    index: 550,
    type: "noun"
  },
  {
    English: "to prevent",
    French: "empêcher",
    index: 551,
    type: "verb"
  },
  {
    English: "to keep, maintain",
    French: "maintenir",
    index: 552,
    type: "verb"
  },
  {
    English: "hair",
    French: "cheveux",
    index: 553,
    type: "noun"
  },
  {
    English: "paper",
    French: "papier",
    index: 554,
    type: "noun"
  },
  {
    English: "present (time)",
    French: "présent",
    index: 555,
    type: "adjective"
  },
  {
    English: "the subject, topic, theme",
    French: "le sujet",
    index: 556,
    type: "noun"
  },
  {
    English: "to suppose, assume",
    French: "supposer",
    index: 557,
    type: "verb"
  },
  {
    English: "quiet",
    French: "tranquille",
    index: 558,
    type: "adjective"
  },
  {
    English: "nine",
    French: "neuf",
    index: 559,
    type: "adjective"
  },
  {
    English: "to marry",
    French: "épouser",
    index: 560,
    type: "verb"
  },
  {
    English: "white",
    French: "blanc",
    index: 561,
    type: "adjective"
  },
  {
    English: "table",
    French: "la table",
    index: 562,
    type: "noun"
  },
  {
    English: "ten",
    French: "dix",
    index: 563,
    type: "adjective"
  },
  {
    English: "the key",
    French: "la clé",
    index: 564,
    type: "noun"
  },
  {
    English: "the agent",
    French: "l'agent",
    index: 565,
    type: "noun"
  },
  {
    English: "to approach",
    French: "approcher",
    index: 566,
    type: "verb"
  },
  {
    English: "the sense, meaning",
    French: "le sens",
    index: 567,
    type: "noun"
  },
  {
    English: "to fear",
    French: "craindre",
    index: 568,
    type: "verb"
  },
  {
    English: "six",
    French: "six",
    index: 569,
    type: "adjective"
  },
  {
    English: "the message",
    French: "le message",
    index: 570,
    type: "noun"
  },
  {
    English: "to shout",
    French: "crier",
    index: 571,
    type: "verb"
  },
  {
    English: "the room, hall",
    French: "la salle",
    index: 572,
    type: "noun"
  },
  {
    English: "to invite",
    French: "inviter",
    index: 573,
    type: "verb"
  },
  {
    English: "the effect",
    French: "l'effet",
    index: 574,
    type: "noun"
  },
  {
    English: "to reflect, think ",
    French: "réfléchir",
    index: 575,
    type: "verb"
  },
  {
    English: "the species, kind",
    French: "l'espèce",
    index: 576,
    type: "noun"
  },
  {
    English: "to arrange",
    French: "arranger",
    index: 577,
    type: "verb"
  },
  {
    English: "to be born",
    French: "naître",
    index: 578,
    type: "verb"
  },
  {
    English: "wood",
    French: "bois",
    index: 579,
    type: "noun"
  },
  {
    English: "the camp",
    French: "le camp",
    index: 580,
    type: "noun"
  },
  {
    English: "sort, kind",
    French: "sorte",
    index: 581,
    type: "noun"
  },
  {
    English: "the hotel",
    French: "l'hôtel",
    index: 582,
    type: "noun"
  },
  {
    English: "the start, beginning",
    French: "le début",
    index: 583,
    type: "noun"
  },
  {
    English: "suffer",
    French: "souffrir",
    index: 584,
    type: "verb"
  },
  {
    English: "the leg",
    French: "la jambe",
    index: 585,
    type: "noun"
  },
  {
    English: "to thank",
    French: "remercier",
    index: 586,
    type: "verb"
  },
  {
    English: "the choice",
    French: "le choix",
    index: 587,
    type: "noun"
  },
  {
    English: "the safety, security",
    French: "la sécurité",
    index: 588,
    type: "noun"
  },
  {
    English: "the lawyer",
    French: "l'avocat",
    index: 589,
    type: "noun"
  },
  {
    English: "to catch",
    French: "attraper",
    index: 590,
    type: "verb"
  },
  {
    English: "the client",
    French: "le client",
    index: 591,
    type: "noun"
  },
  {
    English: "the current",
    French: "le courant",
    index: 592,
    type: "noun"
  },
  {
    English: "to dispatch",
    French: "dépêcher",
    index: 593,
    type: "verb"
  },
  {
    English: "the people",
    French: "les peuple",
    index: 594,
    type: "noun"
  },
  {
    English: "the lady",
    French: "la dame",
    index: 595,
    type: "noun"
  },
  {
    English: "to verify, check",
    French: "vérifier",
    index: 596,
    type: "verb"
  },
  {
    English: "to abandon",
    French: "abandonner",
    index: 597,
    type: "verb"
  },
  {
    English: "the newspaper, diary",
    French: "le journal",
    index: 598,
    type: "noun"
  },
  {
    English: "to burn",
    French: "brûler",
    index: 599,
    type: "verb"
  },
  {
    English: "gold",
    French: "l'or",
    index: 600,
    type: "noun"
  },
  {
    English: "the law",
    French: "la loi",
    index: 601,
    type: "noun"
  },
  {
    English: "the bottom",
    French: "le fond",
    index: 602,
    type: "noun"
  },
  {
    English: "kid (colloquial)",
    French: "le gosse",
    index: 603,
    type: "noun"
  },
  {
    English: "the money",
    French: "le fric",
    index: 604,
    type: "noun"
  },
  {
    English: "the situation",
    French: "la situation",
    index: 605,
    type: "noun"
  },
  {
    English: "except",
    French: "sauf",
    index: 606,
    type: "others"
  },
  {
    English: "the accident",
    French: "l'accident",
    index: 607,
    type: "noun"
  },
  {
    English: "the doubt",
    French: "le doute",
    index: 608,
    type: "noun"
  },
  {
    English: "the scene",
    French: "la scène",
    index: 609,
    type: "noun"
  },
  {
    English: "the soldier",
    French: "le soldat",
    index: 610,
    type: "noun"
  },
  {
    English: "loving",
    French: "aimant",
    index: 611,
    type: "adjective"
  },
  {
    English: "to assure",
    French: "assurer",
    index: 612,
    type: "verb"
  },
  {
    English: "the evidence, proof",
    French: "la preuve",
    index: 613,
    type: "noun"
  },
  {
    English: "the human",
    French: "l'humain",
    index: 614,
    type: "adjective"
  },
  {
    English: "the sea",
    French: "la mer",
    index: 615,
    type: "noun"
  },
  {
    English: "the silence",
    French: "le silence",
    index: 616,
    type: "noun"
  },
  {
    English: "the TV",
    French: "la télé",
    index: 617,
    type: "noun"
  },
  {
    English: "the victim",
    French: "la victime",
    index: 618,
    type: "noun"
  },
  {
    English: "completely",
    French: "complètement",
    index: 619,
    type: "others"
  },
  {
    English: "the whore",
    French: "la pute",
    index: 620,
    type: "noun"
  },
  {
    English: "the guard",
    French: "le garde",
    index: 621,
    type: "noun"
  },
  {
    English: "the murder",
    French: "le meurtre",
    index: 622,
    type: "noun"
  },
  {
    English: "the group",
    French: "le groupe",
    index: 623,
    type: "noun"
  },
  {
    English: "the crime",
    French: "le crime",
    index: 624,
    type: "noun"
  },
  {
    English: "to treat",
    French: "traiter",
    index: 625,
    type: "verb"
  },
  {
    English: "gently",
    French: "doucement",
    index: 626,
    type: "others"
  },
  {
    English: "to hurt",
    French: "blesser",
    index: 627,
    type: "verb"
  },
  {
    English: "the colonel",
    French: "le colonel",
    index: 628,
    type: "noun"
  },
  {
    English: "sad",
    French: "triste",
    index: 629,
    type: "adjective"
  },
  {
    English: "the shame",
    French: "la honte",
    index: 630,
    type: "noun"
  },
  {
    English: "red",
    French: "rouge",
    index: 631,
    type: "adjective"
  },
  {
    English: "to disengage",
    French: "dégager",
    index: 632,
    type: "verb"
  },
  {
    English: "the evening, party",
    French: "la soirée",
    index: 633,
    type: "noun"
  },
  {
    English: "dangerous",
    French: "dangereux",
    index: 634,
    type: "adjective"
  },
  {
    English: "the army",
    French: "l'armée",
    index: 635,
    type: "noun"
  },
  {
    English: "to spin",
    French: "filer",
    index: 636,
    type: "verb"
  },
  {
    English: "to risk",
    French: "risquer",
    index: 637,
    type: "verb"
  },
  {
    English: "the back (body)",
    French: "le dos",
    index: 638,
    type: "noun"
  },
  {
    English: "the call",
    French: "l'appel",
    index: 639,
    type: "noun"
  },
  {
    English: "the visit",
    French: "la visite",
    index: 640,
    type: "noun"
  },
  {
    English: "to lead, conduct, carry out",
    French: "mener",
    index: 641,
    type: "verb"
  },
  {
    English: "the flower",
    French: "la fleur",
    index: 642,
    type: "noun"
  },
  {
    English: "to attack",
    French: "attaquer",
    index: 643,
    type: "verb"
  },
  {
    English: "the corner",
    French: "le coin",
    index: 644,
    type: "noun"
  },
  {
    English: "the prince",
    French: "le prince",
    index: 645,
    type: "noun"
  },
  {
    English: "worse",
    French: "pire",
    index: 646,
    type: "adjective"
  },
  {
    English: "the teacher",
    French: "le professeur",
    index: 647,
    type: "noun"
  },
  {
    English: "to smoke",
    French: "fumer",
    index: 648,
    type: "verb"
  },
  {
    English: "to repeat",
    French: "répéter",
    index: 649,
    type: "verb"
  },
  {
    English: "the habit",
    French: "l'habitude",
    index: 650,
    type: "noun"
  },
  {
    English: "to sign",
    French: "signer",
    index: 651,
    type: "verb"
  },
  {
    English: "to file",
    French: "ficher",
    index: 652,
    type: "verb"
  },
  {
    English: "to deserve",
    French: "mériter",
    index: 653,
    type: "verb"
  },
  {
    English: "the response, answer",
    French: "la réponse",
    index: 654,
    type: "noun"
  },
  {
    English: "to join",
    French: "rejoindre",
    index: 655,
    type: "verb"
  },
  {
    English: "to discuss",
    French: "discuter",
    index: 656,
    type: "verb"
  },
  {
    English: "the village",
    French: "le village",
    index: 657,
    type: "noun"
  },
  {
    English: "to move forward, advance",
    French: "avancer",
    index: 658,
    type: "verb"
  },
  {
    English: "bullshit",
    French: "connerie",
    index: 659,
    type: "noun"
  },
  {
    English: "to rest",
    French: "reposer",
    index: 660,
    type: "verb"
  },
  {
    English: "to escape",
    French: "échapper",
    index: 661,
    type: "verb"
  },
  {
    English: "the shape",
    French: "la forme",
    index: 662,
    type: "noun"
  },
  {
    English: "the noise, sound, rumour",
    French: "le bruit",
    index: 663,
    type: "noun"
  },
  {
    English: "the devil",
    French: "le diable",
    index: 664,
    type: "noun"
  },
  {
    English: "the example",
    French: "l'exemple",
    index: 665,
    type: "noun"
  },
  {
    English: "to charge (electronics)",
    French: "charger",
    index: 666,
    type: "verb"
  },
  {
    English: "cat",
    French: "le chat",
    index: 667,
    type: "noun"
  },
  {
    English: "the enemy",
    French: "l'ennemi",
    index: 668,
    type: "noun"
  },
  {
    English: "the appointment",
    French: "le rendez-vous",
    index: 669,
    type: "noun"
  },
  {
    English: "standing, standing up",
    French: "debout",
    index: 670,
    type: "others"
  },
  {
    English: "to oblige",
    French: "obliger",
    index: 671,
    type: "verb"
  },
  {
    English: "the hole",
    French: "le trou",
    index: 672,
    type: "noun"
  },
  {
    English: "to accompany",
    French: "accompagner",
    index: 673,
    type: "verb"
  },
  {
    English: "the window",
    French: "la fenêtre",
    index: 674,
    type: "noun"
  },
  {
    English: "to dare",
    French: "oser",
    index: 675,
    type: "verb"
  },
  {
    English: "the impression",
    French: "l'impression",
    index: 676,
    type: "noun"
  },
  {
    English: "the inside",
    French: "l'intérieur",
    index: 677,
    type: "noun"
  },
  {
    English: "the mouth",
    French: "la bouche",
    index: 678,
    type: "noun"
  },
  {
    English: "the line",
    French: "la ligne",
    index: 679,
    type: "noun"
  },
  {
    English: "absolutely",
    French: "absolument",
    index: 680,
    type: "others"
  },
  {
    English: "soft",
    French: "doux",
    index: 681,
    type: "adjective"
  },
  {
    English: "to regret ",
    French: "regretter",
    index: 682,
    type: "verb"
  },
  {
    English: "the wall",
    French: "le mur",
    index: 683,
    type: "noun"
  },
  {
    English: "hell",
    French: "l'enfer",
    index: 684,
    type: "noun"
  },
  {
    English: "to prove",
    French: "prouver",
    index: 685,
    type: "verb"
  },
  {
    English: "the box",
    French: "la boîte",
    index: 686,
    type: "noun"
  },
  {
    English: "health",
    French: "la santé",
    index: 687,
    type: "noun"
  },
  {
    English: "to cover, cover up, shield ",
    French: "couvrir",
    index: 688,
    type: "verb"
  },
  {
    English: "magnificent, amazing",
    French: "magnifique",
    index: 689,
    type: "adjective"
  },
  {
    English: "to get, obtain ",
    French: "obtenir",
    index: 690,
    type: "verb"
  },
  {
    English: "the kitchen",
    French: "la cuisine",
    index: 691,
    type: "noun"
  },
  {
    English: "the view ",
    French: "la vue",
    index: 692,
    type: "noun"
  },
  {
    English: "terrible",
    French: "terrible",
    index: 693,
    type: "adjective"
  },
  {
    English: "to avoid",
    French: "éviter",
    index: 694,
    type: "verb"
  },
  {
    English: "the skin",
    French: "la peau",
    index: 695,
    type: "noun"
  },
  {
    English: "bastard (expletive)",
    French: "salaud",
    index: 696,
    type: "noun"
  },
  {
    English: "the advice",
    French: "le conseil",
    index: 697,
    type: "noun"
  },
  {
    English: "to joke",
    French: "plaisanter",
    index: 698,
    type: "verb"
  },
  {
    English: "around",
    French: "autour",
    index: 699,
    type: "others"
  },
  {
    English: "the wine ",
    French: "le vin",
    index: 700,
    type: "noun"
  },
  {
    English: "exact",
    French: "exact",
    index: 701,
    type: "adjective"
  },
  {
    English: "to fire (from a job)",
    French: "virer",
    index: 702,
    type: "verb"
  },
  {
    English: "to support ",
    French: "supporter",
    index: 703,
    type: "verb"
  },
  {
    English: "to adjust, resolve, address",
    French: "régler",
    index: 704,
    type: "verb"
  },
  {
    English: "the finger",
    French: "le doigt",
    index: 705,
    type: "noun"
  },
  {
    English: "strange, odd",
    French: "étrange",
    index: 706,
    type: "adjective"
  },
  {
    English: "to wish ",
    French: "souhaiter",
    index: 707,
    type: "verb"
  },
  {
    English: "the mission ",
    French: "mission",
    index: 708,
    type: "noun"
  },
  {
    English: "to create",
    French: "créer",
    index: 709,
    type: "verb"
  },
  {
    English: "the song",
    French: "la chanson",
    index: 710,
    type: "noun"
  },
  {
    English: "to monitor",
    French: "surveiller",
    index: 711,
    type: "verb"
  },
  {
    English: "simply",
    French: "simplement",
    index: 712,
    type: "others"
  },
  {
    English: "to restart",
    French: "recommencer",
    index: 713,
    type: "verb"
  },
  {
    English: "the dress",
    French: "la robe",
    index: 714,
    type: "noun"
  },
  {
    English: "hot",
    French: "chaud",
    index: 715,
    type: "adjective"
  },
  {
    English: "the ticket",
    French: "le billet",
    index: 716,
    type: "noun"
  },
  {
    English: "special",
    French: "spécial",
    index: 717,
    type: "adjective"
  },
  {
    English: "the average",
    French: "la moyenne",
    index: 718,
    type: "noun"
  },
  {
    English: "friendly",
    French: "amical",
    index: 719,
    type: "adjective"
  },
  {
    English: "the ship",
    French: "le vaisseau",
    index: 720,
    type: "noun"
  },
  {
    English: "myself",
    French: "moi-même",
    index: 721,
    type: "others"
  },
  {
    English: "to cost ",
    French: "coûter",
    index: 722,
    type: "verb"
  },
  {
    English: "the surprise",
    French: "la surprise",
    index: 723,
    type: "noun"
  },
  {
    English: "understood, included",
    French: "compris",
    index: 724,
    type: "adjective"
  },
  {
    English: "the birthday",
    French: "l'anniversaire",
    index: 725,
    type: "noun"
  },
  {
    English: "the sign",
    French: "le signe",
    index: 726,
    type: "noun"
  },
  {
    English: "the flight",
    French: "le vol",
    index: 727,
    type: "noun"
  },
  {
    English: "the colour",
    French: "la couleur",
    index: 728,
    type: "noun"
  },
  {
    English: "the image",
    French: "l'image",
    index: 729,
    type: "noun"
  },
  {
    English: "to bet",
    French: "parier",
    index: 730,
    type: "verb"
  },
  {
    English: "the east",
    French: "l'est",
    index: 731,
    type: "noun"
  },
  {
    English: "the tree",
    French: "l'arbre",
    index: 732,
    type: "noun"
  },
  {
    English: "the beer",
    French: "la bière",
    index: 733,
    type: "noun"
  },
  {
    English: "the fish",
    French: "le poisson",
    index: 734,
    type: "noun"
  },
  {
    English: "according to",
    French: "selon",
    index: 735,
    type: "preposition"
  },
  {
    English: "the interest",
    French: "l'intérêt",
    index: 736,
    type: "noun"
  },
  {
    English: "lieutenant",
    French: "lieutenant",
    index: 737,
    type: "noun"
  },
  {
    English: "the danger, hazard",
    French: "le danger",
    index: 738,
    type: "noun"
  },
  {
    English: "to belong to",
    French: "appartenir",
    index: 739,
    type: "verb"
  },
  {
    English: "to note, notice, point out",
    French: "remarquer",
    index: 740,
    type: "verb"
  },
  {
    English: "the animal",
    French: "l'animal",
    index: 741,
    type: "noun"
  },
  {
    English: "to withdraw",
    French: "retirer",
    index: 742,
    type: "verb"
  },
  {
    English: "the edge",
    French: "le bord",
    index: 743,
    type: "noun"
  },
  {
    English: "to attempt, try ",
    French: "tenter",
    index: 744,
    type: "verb"
  },
  {
    English: "freedom",
    French: "liberté",
    index: 745,
    type: "noun"
  },
  {
    English: "the rule",
    French: "la règle",
    index: 746,
    type: "noun"
  },
  {
    English: "the bank ",
    French: "la banque",
    index: 747,
    type: "noun"
  },
  {
    English: "marvellous, wonderful",
    French: "merveilleux",
    index: 748,
    type: "adjective"
  },
  {
    English: "proud",
    French: "fier",
    index: 749,
    type: "adjective"
  },
  {
    English: "to share",
    French: "partager",
    index: 750,
    type: "verb"
  },
  {
    English: "the class",
    French: "la classe",
    index: 751,
    type: "noun"
  },
  {
    English: "the folder",
    French: "dossier",
    index: 752,
    type: "noun"
  },
  {
    English: "happiness",
    French: "bonheur",
    index: 753,
    type: "noun"
  },
  {
    English: "to defend",
    French: "défendre",
    index: 754,
    type: "verb"
  },
  {
    English: "to tire",
    French: "fatiguer",
    index: 755,
    type: "verb"
  },
  {
    English: "the radio",
    French: "la radio",
    index: 756,
    type: "noun"
  },
  {
    English: "to predict",
    French: "prévoir",
    index: 757,
    type: "verb"
  },
  {
    English: "the comrade",
    French: "le camarade",
    index: 758,
    type: "noun"
  },
  {
    English: "to doubt",
    French: "douter",
    index: 759,
    type: "verb"
  },
  {
    English: "the bird",
    French: "l'oiseau",
    index: 760,
    type: "noun"
  },
  {
    English: "the wind",
    French: "le vent",
    index: 761,
    type: "noun"
  },
  {
    English: "the research, search",
    French: "la recherche",
    index: 762,
    type: "noun"
  },
  {
    English: "to enjoy, appreciate",
    French: "apprécier",
    index: 763,
    type: "verb"
  },
  {
    English: "the system",
    French: "le système",
    index: 764,
    type: "noun"
  },
  {
    English: "the farm",
    French: "la ferme",
    index: 765,
    type: "noun"
  },
  {
    English: "able, capable",
    French: "capable",
    index: 766,
    type: "adjective"
  },
  {
    English: "to flee",
    French: "fuir",
    index: 767,
    type: "verb"
  },
  {
    English: "boredom",
    French: "ennui",
    index: 768,
    type: "noun"
  },
  {
    English: "the aunt",
    French: "la tante",
    index: 769,
    type: "noun"
  },
  {
    English: "the hero ",
    French: "le héros",
    index: 770,
    type: "noun"
  },
  {
    English: "excellent",
    French: "excellent",
    index: 771,
    type: "adjective"
  },
  {
    English: "pity",
    French: "pitié",
    index: 772,
    type: "noun"
  },
  {
    English: "the apartment",
    French: "l'appartement",
    index: 773,
    type: "noun"
  },
  {
    English: "to breathe",
    French: "respirer",
    index: 774,
    type: "verb"
  },
  {
    English: "entire, whole",
    French: "entier",
    index: 775,
    type: "adjective"
  },
  {
    English: "to retrieve, to recover",
    French: "récupérer",
    index: 776,
    type: "verb"
  },
  {
    English: "the pain ",
    French: "la douleur",
    index: 777,
    type: "noun"
  },
  {
    English: "to free",
    French: "libérer",
    index: 778,
    type: "verb"
  },
  {
    English: "the feeling",
    French: "le sentiment",
    index: 779,
    type: "noun"
  },
  {
    English: "the grandfather",
    French: "le grand-père",
    index: 780,
    type: "noun"
  },
  {
    English: "society ",
    French: "société",
    index: 781,
    type: "noun"
  },
  {
    English: "to throw",
    French: "lancer",
    index: 782,
    type: "verb"
  },
  {
    English: "the nose",
    French: "le nez",
    index: 783,
    type: "noun"
  },
  {
    English: "joy",
    French: "joie",
    index: 784,
    type: "noun"
  },
  {
    English: "the relationship",
    French: "la relation",
    index: 785,
    type: "noun"
  },
  {
    English: "the witness",
    French: "la témoin",
    index: 786,
    type: "noun"
  },
  {
    English: "the actor",
    French: "l'acteur",
    index: 787,
    type: "noun"
  },
  {
    English: "a half ",
    French: "une moitié",
    index: 788,
    type: "noun"
  },
  {
    English: "amazing, incredible",
    French: "incroyable",
    index: 789,
    type: "adjective"
  },
  {
    English: "the bath",
    French: "le bain",
    index: 790,
    type: "noun"
  },
  {
    English: "to last, take (time)",
    French: "durer",
    index: 791,
    type: "verb"
  },
  {
    English: "the market",
    French: "le marché",
    index: 792,
    type: "noun"
  },
  {
    English: "to wash",
    French: "laver",
    index: 793,
    type: "verb"
  },
  {
    English: "the tooth ",
    French: "la dent",
    index: 794,
    type: "noun"
  },
  {
    English: "in there",
    French: "là-dedans",
    index: 795,
    type: "others"
  },
  {
    English: "Miss (single woman)",
    French: "mademoiselle",
    index: 796,
    type: "noun"
  },
  {
    English: "the address",
    French: "l'adresse",
    index: 797,
    type: "noun"
  },
  {
    English: "the cousin",
    French: "le cousin",
    index: 798,
    type: "noun"
  },
  {
    English: "rich",
    French: "riche",
    index: 799,
    type: "adjective"
  },
  {
    English: "the company",
    French: "l'enterprise",
    index: 800,
    type: "noun"
  },
  {
    English: "to ring",
    French: "sonner",
    index: 801,
    type: "verb"
  },
  {
    English: "the shoe",
    French: "la chaussure",
    index: 802,
    type: "noun"
  },
  {
    English: "the ear",
    French: "l'oreille",
    index: 803,
    type: "noun"
  },
  {
    English: "the grand mother",
    French: "la grand-mère",
    index: 804,
    type: "noun"
  },
  {
    English: "ancient",
    French: "ancien",
    index: 805,
    type: "adjective"
  },
  {
    English: "the art ",
    French: "l'art",
    index: 806,
    type: "noun"
  },
  {
    English: "to guess",
    French: "deviner",
    index: 807,
    type: "verb"
  },
  {
    English: "useless",
    French: "inutile",
    index: 808,
    type: "adjective"
  },
  {
    English: "to delight",
    French: "ravir",
    index: 809,
    type: "verb"
  },
  {
    English: "a joke",
    French: "une blague",
    index: 810,
    type: "noun"
  },
  {
    English: "the future",
    French: "l'avenir",
    index: 811,
    type: "noun"
  },
  {
    English: "the beauty",
    French: "la beauté",
    index: 812,
    type: "noun"
  },
  {
    English: "the race",
    French: "la course",
    index: 813,
    type: "noun"
  },
  {
    English: "to cross",
    French: "traverser",
    index: 814,
    type: "verb"
  },
  {
    English: "the experience",
    French: "l'expérience",
    index: 815,
    type: "noun"
  },
  {
    English: "the care",
    French: "le soin",
    index: 816,
    type: "noun"
  },
  {
    English: "left ",
    French: "gauche",
    index: 817,
    type: "noun"
  },
  {
    English: "stupid",
    French: "stupide",
    index: 818,
    type: "adjective"
  },
  {
    English: "to retain",
    French: "retenir",
    index: 819,
    type: "verb"
  },
  {
    English: "the list",
    French: "la liste",
    index: 820,
    type: "noun"
  },
  {
    English: "to climb",
    French: "escalader",
    index: 821,
    type: "verb"
  },
  {
    English: "to realise",
    French: "réaliser",
    index: 822,
    type: "verb"
  },
  {
    English: "to mock",
    French: "moquer",
    index: 823,
    type: "verb"
  },
  {
    English: "to study",
    French: "étudier",
    index: 824,
    type: "verb"
  },
  {
    English: "to install",
    French: "installer",
    index: 825,
    type: "verb"
  },
  {
    English: "the courage",
    French: "le courage",
    index: 826,
    type: "noun"
  },
  {
    English: "blue",
    French: "bleu",
    index: 827,
    type: "adjective"
  },
  {
    English: "the middle",
    French: "the milieu",
    index: 828,
    type: "noun"
  },
  {
    English: "to propose",
    French: "proposer",
    index: 829,
    type: "verb"
  },
  {
    English: "the contact",
    French: "le contact",
    index: 830,
    type: "noun"
  },
  {
    English: "the inspector",
    French: "l'inspecteur",
    index: 831,
    type: "noun"
  },
  {
    English: "cute",
    French: "mignon",
    index: 832,
    type: "adjective"
  },
  {
    English: "the project",
    French: "le projet",
    index: 833,
    type: "noun"
  },
  {
    English: "probably",
    French: "probablement",
    index: 834,
    type: "others"
  },
  {
    English: "the role",
    French: "le rôle",
    index: 835,
    type: "noun"
  },
  {
    English: "the risk",
    French: "le risque",
    index: 836,
    type: "noun"
  },
  {
    English: "the action",
    French: "l'action",
    index: 837,
    type: "noun"
  },
  {
    English: "the angel",
    French: "l'ange",
    index: 838,
    type: "noun"
  },
  {
    English: "the advance",
    French: "l'avance",
    index: 839,
    type: "noun"
  },
  {
    English: "interesting",
    French: "intéressant",
    index: 840,
    type: "adjective"
  },
  {
    English: "among, amongst",
    French: "parmi",
    index: 841,
    type: "others"
  },
  {
    English: "the language",
    French: "la langue",
    index: 842,
    type: "noun"
  },
  {
    English: "to take away ",
    French: "emporter",
    index: 843,
    type: "verb"
  },
  {
    English: "the tea",
    French: "le thé",
    index: 844,
    type: "noun"
  },
  {
    English: "the anger",
    French: "la colère",
    index: 845,
    type: "noun"
  },
  {
    English: "the departure, start",
    French: "le départ",
    index: 846,
    type: "noun"
  },
  {
    English: "the era, age, period",
    French: "l'époque",
    index: 847,
    type: "noun"
  },
  {
    English: "the thief",
    French: "le voleur",
    index: 848,
    type: "noun"
  },
  {
    English: "to cease, stop",
    French: "cesser",
    index: 849,
    type: "verb"
  },
  {
    English: "the holiday",
    French: "la vacance",
    index: 850,
    type: "noun"
  },
  {
    English: "up there",
    French: "là-haut",
    index: 851,
    type: "others"
  },
  {
    English: "the machine",
    French: "la machine",
    index: 852,
    type: "noun"
  },
  {
    English: "to mean, signify",
    French: "signifier",
    index: 853,
    type: "verb"
  },
  {
    English: "to fix",
    French: "réparer",
    index: 854,
    type: "verb"
  },
  {
    English: "to build",
    French: "construire",
    index: 855,
    type: "verb"
  },
  {
    English: "the bread",
    French: "le pain",
    index: 856,
    type: "noun"
  },
  {
    English: "the bar, pub",
    French: "le bar",
    index: 857,
    type: "noun"
  },
  {
    English: "the club",
    French: "le club",
    index: 858,
    type: "noun"
  },
  {
    English: "the summer",
    French: "l'été",
    index: 859,
    type: "noun"
  },
  {
    English: "horrible",
    French: "horrible",
    index: 860,
    type: "adjective"
  },
  {
    English: "to take advantage of, enjoy",
    French: "profiter",
    index: 861,
    type: "verb"
  },
  {
    English: "the stone",
    French: "la pierre",
    index: 862,
    type: "noun"
  },
  {
    English: "to rain ",
    French: "pleuvoir",
    index: 863,
    type: "verb"
  },
  {
    English: "several",
    French: "plusieurs",
    index: 864,
    type: "adjective"
  },
  {
    English: "the ice, ice cream",
    French: "la glace",
    index: 865,
    type: "noun"
  },
  {
    English: "the decision",
    French: "la décision",
    index: 866,
    type: "noun"
  },
  {
    English: "the judge",
    French: "le juge",
    index: 867,
    type: "noun"
  },
  {
    English: "the control",
    French: "le contrôle",
    index: 868,
    type: "noun"
  },
  {
    English: "to separate",
    French: "séparer",
    index: 869,
    type: "verb"
  },
  {
    English: "seven",
    French: "sept",
    index: 870,
    type: "adjective"
  },
  {
    English: "the disease, illness",
    French: "la maladie",
    index: 871,
    type: "noun"
  },
  {
    English: "the neighborhood",
    French: "le quartier",
    index: 872,
    type: "noun"
  },
  {
    English: "to desire",
    French: "désirer",
    index: 873,
    type: "verb"
  },
  {
    English: "the damage",
    French: "les dommage",
    index: 874,
    type: "noun"
  },
  {
    English: "the cigarette",
    French: "la cigarette",
    index: 875,
    type: "noun"
  },
  {
    English: "to hang out ",
    French: "traîner",
    index: 876,
    type: "verb"
  },
  {
    English: "to respect",
    French: "respecter",
    index: 877,
    type: "verb"
  },
  {
    English: "to direct, run, manage",
    French: "diriger",
    index: 878,
    type: "verb"
  },
  {
    English: "to fight",
    French: "combattre",
    index: 879,
    type: "verb"
  },
  {
    English: "the thread",
    French: "le fil",
    index: 880,
    type: "noun"
  },
  {
    English: "the fight ",
    French: "le combat",
    index: 881,
    type: "noun"
  },
  {
    English: "to pursue, continue",
    French: "poursuivre",
    index: 882,
    type: "verb"
  },
  {
    English: "the church",
    French: "l'église",
    index: 883,
    type: "noun"
  },
  {
    English: "the director",
    French: "le directeur",
    index: 884,
    type: "noun"
  },
  {
    English: "the request, application, demand",
    French: "la demande",
    index: 885,
    type: "noun"
  },
  {
    English: "to force",
    French: "forcer",
    index: 886,
    type: "verb"
  },
  {
    English: "the bomb",
    French: "la bombe",
    index: 887,
    type: "noun"
  },
  {
    English: "the killer, murderer",
    French: "le tueur",
    index: 888,
    type: "noun"
  },
  {
    English: "to grow",
    French: "grandir",
    index: 889,
    type: "verb"
  },
  {
    English: "Sunday",
    French: "dimanche",
    index: 890,
    type: "noun"
  },
  {
    English: "to remember",
    French: "se souvenir",
    index: 891,
    type: "verb"
  },
  {
    English: "the queen ",
    French: "la reine",
    index: 892,
    type: "noun"
  },
  {
    English: "to have dinner",
    French: "dîner",
    index: 893,
    type: "verb"
  },
  {
    English: "high",
    French: "haut",
    index: 894,
    type: "adjective"
  },
  {
    English: "le cerveau",
    French: "the brain ",
    index: 895,
    type: "noun"
  },
  {
    English: "the opinion",
    French: "l'opinion",
    index: 896,
    type: "noun"
  },
  {
    English: "to warn",
    French: "avertir",
    index: 897,
    type: "verb"
  },
  {
    English: "the packback ",
    French: "le sac à dos",
    index: 898,
    type: "noun"
  },
  {
    English: "second",
    French: "deuxième",
    index: 899,
    type: "adjective"
  },
  {
    English: "third",
    French: "troisième",
    index: 900,
    type: "adjective"
  },
  {
    English: "fourth",
    French: "quatrième",
    index: 901,
    type: "adjective"
  },
  {
    English: "the officer",
    French: "l'officier",
    index: 902,
    type: "noun"
  },
  {
    English: "the official",
    French: "l'officiel",
    index: 903,
    type: "noun"
  },
  {
    English: "the direction",
    French: "la direction",
    index: 904,
    type: "noun"
  },
  {
    English: "the meaning, significance",
    French: "la signification",
    index: 905,
    type: "noun"
  },
  {
    English: "to organise",
    French: "organiser",
    index: 906,
    type: "verb"
  },
  {
    English: "the forrest ",
    French: "la forêt",
    index: 907,
    type: "noun"
  },
  {
    English: "the mountain",
    French: "la montagne",
    index: 908,
    type: "noun"
  },
  {
    English: "the ocean",
    French: "l'océan",
    index: 909,
    type: "noun"
  },
  {
    English: "the beach ",
    French: "la plage",
    index: 910,
    type: "noun"
  },
  {
    English: "the jungle",
    French: "la jungle",
    index: 911,
    type: "noun"
  },
  {
    English: "the cloud ",
    French: "le nuage",
    index: 912,
    type: "noun"
  },
  {
    English: "cloudy",
    French: "nuageux",
    index: 913,
    type: "adjective"
  },
  {
    English: "sunny",
    French: "ensoleillé",
    index: 914,
    type: "adjective"
  },
  {
    English: "the rain",
    French: "la pluie",
    index: 915,
    type: "noun"
  },
  {
    English: "rainy",
    French: "pluvieux",
    index: 916,
    type: "adjective"
  },
  {
    English: "to snow",
    French: "neiger",
    index: 917,
    type: "verb"
  },
  {
    English: "snowy",
    French: "neigeux",
    index: 918,
    type: "adjective"
  },
  {
    English: "the snow",
    French: "la neige",
    index: 919,
    type: "noun"
  },
  {
    English: "windy",
    French: "venteux",
    index: 920,
    type: "adjective"
  },
  {
    English: "the connection",
    French: "la connexion",
    index: 921,
    type: "noun"
  },
  {
    English: "the tent",
    French: "la tente",
    index: 922,
    type: "noun"
  },
  {
    English: "to camp",
    French: "camper",
    index: 923,
    type: "verb"
  },
  {
    English: "the floor",
    French: "le plancher",
    index: 924,
    type: "noun"
  },
  {
    English: "the roof",
    French: "le toit",
    index: 925,
    type: "noun"
  },
  {
    English: "the selection",
    French: "la sélection",
    index: 926,
    type: "noun"
  },
  {
    English: "the guest",
    French: "l'invité",
    index: 927,
    type: "noun"
  },
  {
    English: "the host",
    French: "l'hôte",
    index: 928,
    type: "noun"
  },
  {
    English: "until ",
    French: "jusqu'à",
    index: 929,
    type: "others"
  },
  {
    English: "a soda",
    French: "un soda",
    index: 930,
    type: "noun"
  },
  {
    English: "the drink",
    French: "la boisson",
    index: 931,
    type: "noun"
  },
  {
    English: "the knife",
    French: "le couteau",
    index: 932,
    type: "noun"
  },
  {
    English: "to cook",
    French: "cuisiner",
    index: 933,
    type: "verb"
  },
  {
    English: "to fish ",
    French: "pêcher",
    index: 934,
    type: "verb"
  },
  {
    English: "the human being",
    French: "l'être humain",
    index: 935,
    type: "noun"
  },
  {
    English: "the cow ",
    French: "la vache",
    index: 936,
    type: "noun"
  },
  {
    English: "the pig ",
    French: "le Cochon",
    index: 937,
    type: "noun"
  },
  {
    English: "to hunt ",
    French: "chasser",
    index: 938,
    type: "verb"
  },
  {
    English: "the high school ",
    French: "le lycée",
    index: 939,
    type: "noun"
  },
  {
    English: "the fridge",
    French: "le frigo",
    index: 940,
    type: "noun"
  },
  {
    English: "the microwave",
    French: "le micro-onde",
    index: 941,
    type: "noun"
  },
  {
    English: "the people",
    French: "les personnes",
    index: 942,
    type: "noun"
  },
  {
    English: "genuine, authentic",
    French: "authentique",
    index: 943,
    type: "adjective"
  },
  {
    English: "the thought",
    French: "la pensée",
    index: 944,
    type: "noun"
  },
  {
    English: "the punishment ",
    French: "la punition",
    index: 945,
    type: "noun"
  },
  {
    English: "the speech",
    French: "le discours",
    index: 946,
    type: "noun"
  },
  {
    English: "first, firstly ",
    French: "d'abord",
    index: 947,
    type: "others"
  },
  {
    English: "something",
    French: "quelque chose",
    index: 948,
    type: "others"
  },
  {
    English: "the bakery",
    French: "la boulangerie",
    index: 949,
    type: "noun"
  },
  {
    English: "the countryside",
    French: "la campagne",
    index: 950,
    type: "noun"
  },
  {
    English: "the coin",
    French: "la pièce",
    index: 951,
    type: "noun"
  },
  {
    English: "the best",
    French: "le meilleur",
    index: 952,
    type: "noun"
  },
  {
    English: "the worst",
    French: "le pire",
    index: 953,
    type: "noun"
  },
  {
    English: "heaven",
    French: "le paradis",
    index: 954,
    type: "noun"
  },
  {
    English: "to charge (money)",
    French: "facturer",
    index: 955,
    type: "verb"
  },
  {
    English: "to stand up",
    French: "se lever",
    index: 956,
    type: "verb"
  },
  {
    English: "inside, indoors",
    French: "à l'intérieur",
    index: 957,
    type: "adjective"
  },
  {
    English: "lucky",
    French: "chanceux",
    index: 958,
    type: "adjective"
  },
  {
    English: "bright",
    French: "brillant",
    index: 959,
    type: "adjective"
  },
  {
    English: "dark",
    French: "sombre",
    index: 960,
    type: "adjective"
  },
  {
    English: "the leaf ",
    French: "la feuille",
    index: 961,
    type: "noun"
  },
  {
    English: "the branch ",
    French: "la branche",
    index: 962,
    type: "noun"
  },
  {
    English: "the grass",
    French: "l'herbe",
    index: 963,
    type: "noun"
  },
  {
    English: "the field, land",
    French: "le terrain",
    index: 964,
    type: "noun"
  },
  {
    English: "the food",
    French: "la nourriture ",
    index: 965,
    type: "noun"
  },
  {
    English: "western",
    French: "occidental",
    index: 966,
    type: "adjective"
  },
  {
    English: "west",
    French: "l'ouest",
    index: 967,
    type: "noun"
  },
  {
    English: "south",
    French: "le sud",
    index: 968,
    type: "noun"
  },
  {
    English: "north",
    French: "le nord",
    index: 969,
    type: "noun"
  },
  {
    English: "to retire",
    French: "prendre sa retraite",
    index: 970,
    type: "verb"
  },
  {
    English: "the objective, goal, aim",
    French: "l'objectif",
    index: 971,
    type: "noun"
  },
  {
    English: "the skirt",
    French: "la jupe",
    index: 972,
    type: "noun"
  },
  {
    English: "the news",
    French: "les nouvelles",
    index: 973,
    type: "noun"
  },
  {
    English: "the clothes",
    French: "les vêtements",
    index: 974,
    type: "noun"
  },
  {
    English: "complete, full",
    French: "complet",
    index: 975,
    type: "adjective"
  },
  {
    English: "the democracy",
    French: "la démocratie",
    index: 976,
    type: "noun"
  },
  {
    English: "the shower",
    French: "la douche",
    index: 977,
    type: "noun"
  },
  {
    English: "to shower oneself",
    French: "se doucher",
    index: 978,
    type: "verb"
  },
  {
    English: "to wash oneself",
    French: "se laver",
    index: 979,
    type: "verb"
  },
  {
    English: "to brush one's teeth",
    French: "se brosser les dents",
    index: 980,
    type: "verb"
  },
  {
    English: "the seed",
    French: "la graine",
    index: 981,
    type: "noun"
  },
  {
    English: "half",
    French: "moitié",
    index: 982,
    type: "adjective"
  },
  {
    English: "the tattoo",
    French: "le tatouage",
    index: 983,
    type: "noun"
  },
  {
    English: "the location",
    French: "l'emplacement",
    index: 984,
    type: "noun"
  },
  {
    English: "the poverty",
    French: "la pauvreté",
    index: 985,
    type: "noun"
  },
  {
    English: "the drug",
    French: "la drogue",
    index: 986,
    type: "noun"
  },
  {
    English: "the chemical",
    French: "le produit chimique",
    index: 987,
    type: "noun"
  },
  {
    English: "mathematics",
    French: "les mathématiques",
    index: 988,
    type: "noun"
  },
  {
    English: "science",
    French: "la science ",
    index: 989,
    type: "noun"
  },
  {
    English: "to care for oneself",
    French: "se soucier",
    index: 990,
    type: "verb"
  },
  {
    English: "the court (law)",
    French: "le tribunal",
    index: 991,
    type: "noun"
  },
  {
    English: "the pitch, court (sports)",
    French: "le terrain",
    index: 992,
    type: "noun"
  },
  {
    English: "the volcano ",
    French: "le volcan",
    index: 993,
    type: "noun"
  },
  {
    English: "the river",
    French: "la rivière",
    index: 994,
    type: "noun"
  },
  {
    English: "the lake",
    French: "le lac",
    index: 995,
    type: "noun"
  },
  {
    English: "the worker",
    French: "le travailleur",
    index: 996,
    type: "noun"
  },
  {
    English: "the wave",
    French: "la vague",
    index: 997,
    type: "noun"
  },
  {
    English: "the traveller",
    French: "le voyageur",
    index: 998,
    type: "noun"
  },
  {
    English: "complicated",
    French: "compliqué",
    index: 999,
    type: "adjective"
  },
  {
    English: "the thirst",
    French: "la soif",
    index: 1000,
    type: "noun"
  }
]
export default vocabulary;
