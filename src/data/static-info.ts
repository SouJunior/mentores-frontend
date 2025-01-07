import sentimentDissatisfied from '../assets/rate/sentiment_dissatisfied.svg';
import sentimentExtremelyDissatisfied from '../assets/rate/sentiment_extremely_dissatisfied.svg';
import sentimentExtremelySatisfied from '../assets/rate/sentiment_extremely_satisfied.svg';
import sentimentNeutral from '../assets/rate/sentiment_neutral.svg';
import sentimentSatisfied from '../assets/rate/sentiment_satisfied.svg';
import sentimentVeryDissatisfied from '../assets/rate/sentiment_very_dissatisfied.svg';
import sentimentVerySatisfied from '../assets/rate/sentiment_very_satisfied.svg';

export const genders = [
  'Homem Cis',
  'Mulher Cis',
  'Homem Trans',
  'Mulher Trans',
  'Bigênero',
  'Gênero Fluido',
  'Não Binário',
  'Agênero',
  'Outros',
];

export const specialties = [
  'Carreira',
  'Liderança',
  'Produto',
  'Agilidade',
  'UX Design',
  'UI Design',
  'Front-End',
  'Back-End',
  'Mobile',
  'QA',
  'Dev Ops',
  'Dados',
];

export const reasons = [
  {
    id: 1,
    description: 'Não estou com disponibilidade no momento',
  },
  {
    id: 2,
    description:
      'A qualidade das interações com os mentorados é insatisfatória',
  },
  {
    id: 3,
    description: 'Tenho dificuldades com a usabilidade da plataforma',
  },
  {
    id: 4,
    description: 'Os serviços oferecidos não atendem às minhas expectativas',
  },
  {
    id: 5,
    description: 'Outro',
  },
];

export const reviewOptions = [
  {
    id: 1,
    description: 'Extremamente Insatisfatória',
    imgUrl: sentimentExtremelyDissatisfied,
  },
  {
    id: 2,
    description: 'Muito Insatisfatória',
    imgUrl: sentimentVeryDissatisfied,
  },
  {
    id: 3,
    description: 'Insatisfatória',
    imgUrl: sentimentDissatisfied,
  },
  {
    id: 4,
    description: 'Normal',
    imgUrl: sentimentNeutral,
  },
  {
    id: 5,
    description: 'Satisfatória',
    imgUrl: sentimentSatisfied,
  },
  {
    id: 6,
    description: 'Muito Satisfatória',
    imgUrl: sentimentVerySatisfied,
  },
  {
    id: 7,
    description: 'Extremamente Satisfatória',
    imgUrl: sentimentExtremelySatisfied,
  },
];

export const sessionNameUserInfo = '@mentores-soujunior-v1:token';
