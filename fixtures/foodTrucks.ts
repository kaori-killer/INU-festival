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
        name: '김밥',
        img: '/images/juicy.png',
      },
      {
        id: 'FOOD_05',
        name: '제육김밥',
        img: '/images/juicy.png',
      },
      {
        id: 'FOOD_06',
        name: '기본초밥',
        img: '/images/juicy.png',
      },
    ],
  },
  {
    id: 'FOODTRUCKS_03',
    location: '학생회관 앞',
    menu: [
      {
        id: 'FOOD_07',
        name: '김밥',
        img: '/images/juicy.png',
      },
      {
        id: 'FOOD_08',
        name: '제육김밥',
        img: '/images/juicy.png',
      },
      {
        id: 'FOOD_09',
        name: '기본초밥',
        img: '/images/juicy.png',
      },
    ],
    coordinate: {
      latitude: 37.37420074991469,
      longitude: 126.63121123035673,
    },
  },
];

export default foodtrucks;
