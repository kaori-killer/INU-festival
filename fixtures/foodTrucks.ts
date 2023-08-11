import food from './foods';

const foodtrucks = [
  {
    id: 'FOODTRUCKS_01',
    location: '자연대 앞',
    coordinate: {
      latitude: 37.37590385533033,
      longitude: 126.63416940319811,
    },
    menu: [...food],
  },
  {
    id: 'FOODTRUCKS_02',
    location: '정보대 앞',
    coordinate: {
      latitude: 37.37466677516956,
      longitude: 126.63330325433452,
    },
    menu: [
      {
        id: 'FOOD_04',
        name: '돈가스',
        img: '/images/돈가스.png',
      },
      {
        id: 'FOOD_05',
        name: '떡꼬치',
        img: '/images/떡꼬치.png',
      },
      {
        id: 'FOOD_06',
        name: '카레우동',
        img: '/images/카레우동.png',
      },
    ],
  },
  {
    id: 'FOODTRUCKS_03',
    location: '학생회관 앞',
    menu: [
      {
        id: 'FOOD_07',
        name: '비빔밥',
        img: '/images/비빔밥.png',
      },
      {
        id: 'FOOD_08',
        name: '밥 추가',
        img: '/images/밥 추가.png',
      },
      {
        id: 'FOOD_09',
        name: '김치',
        img: '/images/김치.png',
      },
    ],
    coordinate: {
      latitude: 37.37420074991469,
      longitude: 126.63121123035673,
    },
  },
];

export default foodtrucks;
