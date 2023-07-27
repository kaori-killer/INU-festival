import guests from './guests';

const lineups = [
  {
    id: 'LINEUP_01',
    day: 'DAY1',
    date: '230509',
    artist: [...guests],
  },
  {
    id: 'LINEUP_02',
    day: 'DAY2',
    date: '230510',
    artist: [
      {
        id: 'GUEST_03',
        name: '헤이즈',
        time: '20:30',
        img: '/images/juicy.png',
      },
      {
        id: 'GUEST_04',
        name: '오마이걸',
        time: '21:00',
        img: '/images/juicy.png',
      },
      {
        id: 'GUEST_05',
        name: '크러쉬',
        time: '21:30',
        img: '/images/juicy.png',
      },
    ],
  },
  {
    id: 'LINEUP_03',
    day: 'DAY3',
    date: '230511',
    artist: [
      {
        id: 'GUEST_06',
        name: '릴보이',
        time: '20:30',
        img: '/images/juicy.png',
      },
      {
        id: 'GUEST_07',
        name: '현아',
        time: '21:30',
        img: '/images/juicy.png',
      },
    ],
  },
];

export default lineups;
