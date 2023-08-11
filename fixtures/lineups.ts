import guests from './guests';

const lineups = [
  {
    id: 'LINEUP_01',
    day: 'DAY1',
    artist: [...guests],
  },
  {
    id: 'LINEUP_02',
    day: 'DAY2',
    artist: [
      {
        id: 'GUEST_04',
        name: '헤이즈',
        time: '20:30',
        img: '/images/헤이즈.png',
      },
      {
        id: 'GUEST_05',
        name: '오마이걸',
        time: '21:00',
        img: '/images/오마이걸.png',
      },
      {
        id: 'GUEST_06',
        name: '크러쉬',
        time: '21:30',
        img: '/images/크러쉬.png',
      },
    ],
  },
  {
    id: 'LINEUP_03',
    day: 'DAY3',
    artist: [
      {
        id: 'GUEST_07',
        name: '릴보이',
        time: '19:30',
        img: '/images/릴보이.png',
      },
      {
        id: 'GUEST_08',
        name: '현아',
        time: '20:30',
        img: '/images/현아.png',
      },
      {
        id: 'GUEST_09',
        name: '싸이',
        time: '21:30',
        img: '/images/싸이.png',
      },
    ],
  },
];

export default lineups;
