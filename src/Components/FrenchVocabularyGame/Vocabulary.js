// const vocabulary = [
//     {
//       English: "the road",
//       French: "le rue",
//       index: 0,
//       type: "nouns"
//     },
//     {
//       English: "the bread",
//       French: "le pain",
//       index: 1,
//       type: "nouns"
//     },
//     {
//       English: "after",
//       French: "après",
//       index: 2,
//       type: "adjectives"
//     },
//     {
//       English: "to work",
//       French: "travailler",
//       index: 3,
//       type: "verbs"
//     },
//     {
//       English: "often",
//       French: "souvent",
//       index: 4,
//       type: "adjectives"
//     },
//     {
//       English: "together",
//       French: "ensemble",
//       index: 5,
//       type: "adjectives"
//     },
//     {
//       English: "next",
//       French: "prochain",
//       index: 6,
//       type: "adjectives"
//     },
//     {
//       English: "late",
//       French: "retard",
//       index: 7,
//       type: "adjectives"
//     },
//     {
//       English: "the summer",
//       French: "l'été",
//       index: 7,
//       type: "nouns"
//     },
//     {
//       English: "the boss",
//       French: "le chef",
//       index: 8,
//       type: "nouns"
//     },
//     {
//       English: "the newspaper",
//       French: "le journal",
//       index: 9,
//       type: "nouns"
//     },
//     {
//       English: "early",
//       French: "tôt",
//       index: 10,
//       type: "adjectives"
//     },
//     {
//       English: "the winter",
//       French: "l'hiver",
//       index: 11,
//       type: "nouns"
//     },
//     {
//       English: "the student",
//       French: "l'élève",
//       index: 12,
//       type: "nouns"
//     },
//     {
//       English: "to have",
//       French: "avoir",
//       index: 13,
//       type: "verbs"
//     },
//     {
//       English: "to be",
//       French: "être",
//       index: 14,
//       type: "verbs"
//     },
//     {
//       English: "to go",
//       French: "aller",
//       index: 15,
//       type: "verbs"
//     },
//     {
//       English: "therefore",
//       French: "donc",
//       index: 16,
//       type: "other"
//     },
//     {
//       English: "to think",
//       French: "penser",
//       index: 17,
//       type: "verbs"
//     },
//     {
//       English: "best/better",
//       French: "meilleur",
//       index: 18,
//       type: "adjectives"
//     },
//     {
//       English: "powerful",
//       French: "puissant",
//       index: 19,
//       type: "adjectives"
//     },
//     {
//       English: "to know",
//       French: "savoir",
//       index: 20,
//       type: "verbs"
//     },
//     {
//       English: "to be able to",
//       French: "pouvoir",
//       index: 21,
//       type: "verbs"
//     }
//   ];

const vocabulary = [
  {English: 'to be', French: 'être', index: 1, type: 'verb', __rowNum__: 1},
  {English: 'to have', French: 'avoir', index: 2, type: 'verb', __rowNum__: 2},
  {English: 'I', French: 'je', index: 3, type: 'others', __rowNum__: 3},
  {English: 'not', French: 'ne', index: 5, type: 'others', __rowNum__: 4},
  {English: 'you', French: 'tu', index: 9, type: 'others', __rowNum__: 5},
  {English: 'you (plural or formal)', French: 'vous', index: 10, type: 'others', __rowNum__: 6},
  {English: 'he, it', French: 'il', index: 11, type: 'others', __rowNum__: 7},
  {English: 'and', French: 'et', index: 12, type: 'others', __rowNum__: 8},
  {English: 'a, an (masculine) ', French: 'un', index: 14, type: 'others', __rowNum__: 9},
  {English: 'to go', French: 'aller', index: 17, type: 'verb', __rowNum__: 10},
  {English: 'in', French: 'en', index: 19, type: 'others', __rowNum__: 11},
  {English: 'to do, make', French: 'faire', index: 21, type: 'verb', __rowNum__: 12},
  {English: 'all, everything', French: 'tout', index: 22, type: 'adjective', __rowNum__: 13},
  {English: 'we, you', French: 'on', index: 23, type: 'others', __rowNum__: 14},
  {English: 'a, an (feminine)', French: 'une', index: 26, type: 'others', __rowNum__: 15},
  {English: 'my (plural nouns) ', French: 'mes', index: 27, type: 'adjective', __rowNum__: 16},
  {English: 'for', French: 'pour', index: 29, type: 'others', __rowNum__: 17},
  {English: 'some (plural noun)', French: 'des', index: 31, type: 'others', __rowNum__: 18},
  {English: 'to say, tell', French: 'dire', index: 32, type: 'verb', __rowNum__: 19},
  {English: 'to be able to', French: 'pouvoir', index: 33, type: 'verb', __rowNum__: 20},
  {English: 'to want', French: 'vouloir', index: 34, type: 'verb', __rowNum__: 21},
  {English: 'but', French: 'mais', index: 35, type: 'others', __rowNum__: 22},
  {English: 'me, myself', French: 'me', index: 36, type: 'others', __rowNum__: 23},
  {English: 'we, us', French: 'nous', index: 37, type: 'others', __rowNum__: 24},
  {English: 'in, into', French: 'dans', index: 38, type: 'others', __rowNum__: 25},
  {English: 'she, it ', French: 'elle', index: 39, type: 'others', __rowNum__: 26},
  {English: 'to know', French: 'savoir', index: 40, type: 'verb', __rowNum__: 27},
  {English: 'where', French: 'où', index: 42, type: 'others', __rowNum__: 28},
  {English: 'it, there', French: 'y', index: 43, type: 'others', __rowNum__: 29},
  {English: 'good', French: 'bien', index: 45, type: 'noun', __rowNum__: 30},
  {English: 'to see', French: 'voir', index: 46, type: 'verb', __rowNum__: 31},
  {English: 'more', French: 'plus', index: 47, type: 'others', __rowNum__: 32},
  {English: 'no', French: 'non', index: 48, type: 'others', __rowNum__: 33},
  {English: 'you, yourself', French: 'te', index: 49, type: 'others', __rowNum__: 34},
  {English: 'my (masculine singular noun)', French: 'mon', index: 50, type: 'adjective', __rowNum__: 35},
  {English: 'with', French: 'avec', index: 52, type: 'others', __rowNum__: 36},
  {English: 'I, me', French: 'moi', index: 53, type: 'others', __rowNum__: 37},
  {English: 'what ', French: 'quoi', index: 55, type: 'others', __rowNum__: 38},
  {English: 'to have to, must', French: 'devoir', index: 56, type: 'verb', __rowNum__: 39},
  {English: 'yes', French: 'oui', index: 57, type: 'others', __rowNum__: 40},
  {English: 'they', French: 'ils', index: 58, type: 'others', __rowNum__: 41},
  {English: 'like', French: 'comme', index: 59, type: 'others', __rowNum__: 42},
  {English: 'to come', French: 'venir', index: 61, type: 'verb', __rowNum__: 43},
  {English: 'you', French: 'toi', index: 63, type: 'others', __rowNum__: 44},
  {English: 'here', French: 'ici', index: 64, type: 'others', __rowNum__: 45},
  {English: 'nothing', French: 'rien', index: 65, type: 'others', __rowNum__: 46},
  {English: 'he, him, it, her', French: 'lui', index: 66, type: 'others', __rowNum__: 47},
  {English: 'to follow', French: 'suivre', index: 69, type: 'verb', __rowNum__: 48},
  {English: 'why', French: 'pourquoi', index: 70, type: 'others', __rowNum__: 49},
  {English: 'to speak, talk', French: 'parler', index: 71, type: 'verb', __rowNum__: 50},
  {English: 'to take, get', French: 'prendre', index: 72, type: 'verb', __rowNum__: 51},
  {English: 'this, that (feminine singular)', French: 'cette', index: 73, type: 'others', __rowNum__: 52},
  {English: 'when', French: 'quand', index: 74, type: 'others', __rowNum__: 53},
  {English: 'then', French: 'alors', index: 75, type: 'others', __rowNum__: 54},
  {English: 'a thing', French: 'une chose', index: 76, type: 'nouns', __rowNum__: 55},
  {English: 'his, her, its (masculine)', French: 'son', index: 78, type: 'adjectives', __rowNum__: 56},
  {English: 'to believe', French: 'croire', index: 79, type: 'verb', __rowNum__: 57},
  {English: 'to like', French: 'aimer', index: 80, type: 'verb', __rowNum__: 58},
  {English: 'to must, have to', French: 'falloir', index: 81, type: 'verb', __rowNum__: 59},
  {English: 'how', French: 'comment', index: 82, type: 'others', __rowNum__: 60},
  {English: 'very', French: 'très', index: 83, type: 'others', __rowNum__: 61},
  {English: 'or', French: 'ou', index: 84, type: 'others', __rowNum__: 62},
  {English: 'to pass,', French: 'passer', index: 85, type: 'verb', __rowNum__: 63},
  {English: 'to think', French: 'penser', index: 86, type: 'verb', __rowNum__: 64},
  {English: 'also, too', French: 'aussi', index: 87, type: 'others', __rowNum__: 65},
  {English: 'never', French: 'jamais', index: 88, type: 'others', __rowNum__: 66},
  {English: 'to wait for', French: 'attendre', index: 89, type: 'verb', __rowNum__: 67},
  {English: 'to find', French: 'trouver', index: 90, type: 'verb', __rowNum__: 68},
  {English: 'to leave', French: 'laisser', index: 91, type: 'verb', __rowNum__: 69},
  {English: 'small', French: 'petit', index: 92, type: 'adjectives', __rowNum__: 70},
  {English: 'thank you', French: 'merci', index: 93, type: 'others', __rowNum__: 71},
  {English: 'same', French: 'même', index: 94, type: 'adjectives', __rowNum__: 72},
  {English: 'his, her, its (feminine)', French: 'sa', index: 95, type: 'adjectives', __rowNum__: 73},
  {English: 'your (feminine)', French: 'ta', index: 96, type: 'adjectives', __rowNum__: 74},
  {English: 'other, another', French: 'autre', index: 97, type: 'adjectives', __rowNum__: 75},
  {English: 'to arrive', French: 'arriver', index: 98, type: 'verb', __rowNum__: 76},
  {English: 'these, those (plural masculine)', French: 'ces', index: 99, type: 'adjective', __rowNum__: 77},
  {English: 'to give', French: 'donner', index: 100, type: 'verb', __rowNum__: 78},
  {English: 'to look at', French: 'regarder', index: 101, type: 'verb', __rowNum__: 79},
  {English: 'still, again', French: 'encore', index: 102, type: 'others', __rowNum__: 80},
  {English: 'to call, ring', French: 'appeler', index: 103, type: 'verb', __rowNum__: 81},
  {English: 'is it', French: 'est-ce que', index: 104, type: 'others', __rowNum__: 82},
  {English: 'not much, few', French: 'peu', index: 105, type: 'adjective', __rowNum__: 83},
  {English: 'the man', French: 'le homme', index: 106, type: 'noun', __rowNum__: 84},
  {English: 'to go, leave', French: 'partir', index: 107, type: 'verb', __rowNum__: 85},
  {English: 'my (feminine singular)', French: 'ma', index: 108, type: 'adjective', __rowNum__: 86},
  {English: 'always', French: 'toujours', index: 109, type: 'others', __rowNum__: 87},
  {English: 'the day', French: 'le jour', index: 110, type: 'noun', __rowNum__: 88},
  {English: 'woman, wife', French: 'la femme', index: 111, type: 'noun', __rowNum__: 89},
  {English: 'the weather', French: 'le temps', index: 112, type: 'noun', __rowNum__: 90},
  {English: 'now', French: 'maintenant', index: 113, type: 'others', __rowNum__: 91},
  {English: 'our (singular) ', French: 'notre', index: 114, type: 'adjective', __rowNum__: 92},
  {English: 'the life', French: 'la vie', index: 115, type: 'noun', __rowNum__: 93},
  {English: 'two', French: 'deux', index: 116, type: 'adjective', __rowNum__: 94},
  {English: 'to put', French: 'mettre', index: 117, type: 'verb', __rowNum__: 95},
  {English: 'to stay', French: 'rester', index: 118, type: 'verb', __rowNum__: 96},
  {English: 'without', French: 'sans', index: 119, type: 'others', __rowNum__: 97},
  {English: 'alone', French: 'seul', index: 120, type: 'adjective', __rowNum__: 98},
  {English: 'to stop', French: 'arrêter', index: 121, type: 'verb', __rowNum__: 99},
  {English: 'really, very', French: 'vraiment', index: 122, type: 'others', __rowNum__: 100}
]

//   43
//   : 
//   {English: 'you', French: 'toi', index: 63, type: 'others', __rowNum__: 44}
//   44
//   : 
//   {English: 'here', French: 'ici', index: 64, type: 'others', __rowNum__: 45}
//   45
//   : 
//   {English: 'nothing', French: 'rien', index: 65, type: 'others', __rowNum__: 46}
//   46
//   : 
//   {English: 'he, him, it, her', French: 'lui', index: 66, type: 'others', __rowNum__: 47}
//   47
//   : 
//   {English: 'to follow', French: 'suivre', index: 69, type: 'verb', __rowNum__: 48}
//   48
//   : 
//   {English: 'why', French: 'pourquoi', index: 70, type: 'others', __rowNum__: 49}
//   49
//   : 
//   {English: 'to speak, talk', French: 'parler', index: 71, type: 'verb', __rowNum__: 50}
//   50
//   : 
//   {English: 'to take, get', French: 'prendre', index: 72, type: 'verb', __rowNum__: 51}
//   51
//   : 
//   {English: 'this, that (feminine singular)', French: 'cette', index: 73, type: 'others', __rowNum__: 52}
//   52
//   : 
//   {English: 'when', French: 'quand', index: 74, type: 'others', __rowNum__: 53}
//   53
//   : 
//   {English: 'then', French: 'alors', index: 75, type: 'others', __rowNum__: 54}
//   54
//   : 
//   {English: 'a thing', French: 'une chose', index: 76, type: 'nouns', __rowNum__: 55}
//   55
//   : 
//   {English: 'his, her, its (masculine)', French: 'son', index: 78, type: 'adjectives', __rowNum__: 56}
//   56
//   : 
//   {English: 'to believe', French: 'croire', index: 79, type: 'verb', __rowNum__: 57}
//   57
//   : 
//   {English: 'to like', French: 'aimer', index: 80, type: 'verb', __rowNum__: 58}
//   58
//   : 
//   {English: 'to must, have to', French: 'falloir', index: 81, type: 'verb', __rowNum__: 59}
//   59
//   : 
//   {English: 'how', French: 'comment', index: 82, type: 'others', __rowNum__: 60}
//   60
//   : 
//   {English: 'very', French: 'très', index: 83, type: 'others', __rowNum__: 61}
//   61
//   : 
//   {English: 'or', French: 'ou', index: 84, type: 'others', __rowNum__: 62}
//   62
//   : 
//   {English: 'to pass,', French: 'passer', index: 85, type: 'verb', __rowNum__: 63}
//   63
//   : 
//   {English: 'to think', French: 'penser', index: 86, type: 'verb', __rowNum__: 64}
//   64
//   : 
//   {English: 'also, too', French: 'aussi', index: 87, type: 'others', __rowNum__: 65}
//   65
//   : 
//   {English: 'never', French: 'jamais', index: 88, type: 'others', __rowNum__: 66}
//   66
//   : 
//   {English: 'to wait for', French: 'attendre', index: 89, type: 'verb', __rowNum__: 67}
//   67
//   : 
//   {English: 'to find', French: 'trouver', index: 90, type: 'verb', __rowNum__: 68}
//   68
//   : 
//   {English: 'to leave', French: 'laisser', index: 91, type: 'verb', __rowNum__: 69}
//   69
//   : 
//   {English: 'small', French: 'petit', index: 92, type: 'adjectives', __rowNum__: 70}
//   70
//   : 
//   {English: 'thank you', French: 'merci', index: 93, type: 'others', __rowNum__: 71}
//   71
//   : 
//   {English: 'same', French: 'même', index: 94, type: 'adjectives', __rowNum__: 72}
//   72
//   : 
//   {English: 'his, her, its (feminine)', French: 'sa', index: 95, type: 'adjectives', __rowNum__: 73}
//   73
//   : 
//   {English: 'your (feminine)', French: 'ta', index: 96, type: 'adjectives', __rowNum__: 74}
//   74
//   : 
//   {English: 'other, another', French: 'autre', index: 97, type: 'adjectives', __rowNum__: 75}
//   75
//   : 
//   {English: 'to arrive', French: 'arriver', index: 98, type: 'verb', __rowNum__: 76}
//   76
//   : 
//   {English: 'these, those (plural masculine)', French: 'ces', index: 99, type: 'adjective', __rowNum__: 77}
//   77
//   : 
//   {English: 'to give', French: 'donner', index: 100, type: 'verb', __rowNum__: 78}
//   78
//   : 
//   {English: 'to look at', French: 'regarder', index: 101, type: 'verb', __rowNum__: 79}
//   79
//   : 
//   {English: 'still, again', French: 'encore', index: 102, type: 'others', __rowNum__: 80}
//   80
//   : 
//   {English: 'to call, ring', French: 'appeler', index: 103, type: 'verb', __rowNum__: 81}
//   81
//   : 
//   {English: 'is it', French: 'est-ce que', index: 104, type: 'others', __rowNum__: 82}
//   82
//   : 
//   {English: 'not much, few', French: 'peu', index: 105, type: 'adjective', __rowNum__: 83}
//   83
//   : 
//   {English: 'the man', French: 'le homme', index: 106, type: 'noun', __rowNum__: 84}
//   84
//   : 
//   {English: 'to go, leave', French: 'partir', index: 107, type: 'verb', __rowNum__: 85}
//   85
//   : 
//   {English: 'my (feminine singular)', French: 'ma', index: 108, type: 'adjective', __rowNum__: 86}
//   86
//   : 
//   {English: 'always', French: 'toujours', index: 109, type: 'others', __rowNum__: 87}
//   87
//   : 
//   {English: 'the day', French: 'le jour', index: 110, type: 'noun', __rowNum__: 88}
//   88
//   : 
//   {English: 'woman, wife', French: 'la femme', index: 111, type: 'noun', __rowNum__: 89}
//   89
//   : 
//   {English: 'the weather', French: 'le temps', index: 112, type: 'noun', __rowNum__: 90}
//   90
//   : 
//   {English: 'now', French: 'maintenant', index: 113, type: 'others', __rowNum__: 91}
//   91
//   : 
//   {English: 'our (singular) ', French: 'notre', index: 114, type: 'adjective', __rowNum__: 92}
//   92
//   : 
//   {English: 'the life', French: 'la vie', index: 115, type: 'noun', __rowNum__: 93}
//   93
//   : 
//   {English: 'two', French: 'deux', index: 116, type: 'adjective', __rowNum__: 94}
//   94
//   : 
//   {English: 'to put', French: 'mettre', index: 117, type: 'verb', __rowNum__: 95}
//   95
//   : 
//   {English: 'to stay', French: 'rester', index: 118, type: 'verb', __rowNum__: 96}
//   96
//   : 
//   {English: 'without', French: 'sans', index: 119, type: 'others', __rowNum__: 97}
//   97
//   : 
//   {English: 'alone', French: 'seul', index: 120, type: 'adjective', __rowNum__: 98}
//   98
//   : 
//   {English: 'to stop', French: 'arrêter', index: 121, type: 'verb', __rowNum__: 99}
//   99
//   : 
//   {English: 'really, very', French: 'vraiment', index: 122, type: 'others', __rowNum__: 100}
// ]
export default vocabulary;