import FoodTruckTable from './components/foodTruck/FoodTruckTable';
import LineupTable from './components/linup/LineupTable';

const lineups = [
  {
    id: '1',
    day: 'DAY1',
    date: '230509',
    artist: [
      {
        id: '1', name: '10cm', time: '18:00', img: '/images/juicy.png',
      },
      {
        id: '2', name: 'YB', time: '21:00', img: '/images/juicy.png',
      },
    ],
  },
  {
    id: '2',
    day: 'DAY2',
    date: '230510',
    artist: [
      {
        id: '1', name: '헤이즈', time: '20:30', img: '/images/juicy.png',
      },
      {
        id: '2', name: '오마이걸', time: '21:00', img: '/images/juicy.png',
      },
      {
        id: '3', name: '크러쉬', time: '21:30', img: '/images/juicy.png',
      },
    ],
  },
  {
    id: '3',
    day: 'DAY3',
    date: '230511',
    artist: [
      {
        id: '1', name: '릴보이', time: '20:30', img: '/images/juicy.png',
      },
      {
        id: '2', name: '현아', time: '21:30', img: '/images/juicy.png',
      },
    ],
  },
];

const foodTrucks = [
  {
    id: '1',
    location: '자연대 앞',
    menu: [
      { id: '1', name: '김밥', img: '/images/pizza.png' },
      { id: '2', name: '제육김밥', img: '/images/pizza.png' },
      { id: '3', name: '컵라면', img: '/images/pizza.png' },
    ],
  },
  {
    id: '2',
    location: '정보대 앞',
    menu: [
      { id: '1', name: '제육덮밥', img: '/images/pizza.png' },
      { id: '2', name: '갈비탕', img: '/images/pizza.png' },
      { id: '3', name: '돈가스', img: '/images/pizza.png' },
    ],
  },
  {
    id: '3',
    location: '학생회관 앞',
    menu: [
      { id: '1', name: '‘바베큐’', img: '/images/pizza.png' },
      { id: '2', name: '타코야끼', img: '/images/pizza.png' },
      { id: '3', name: '스테이크', img: '/images/pizza.png' },
    ],
  },
];

export default function App() {
  return (
    <div>
      <h1>2023 인천대학교 대동제</h1>
      <LineupTable lineups={lineups} />
      <FoodTruckTable foodTrucks={foodTrucks} />
    </div>
  );
}
