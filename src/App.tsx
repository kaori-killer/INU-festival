const lineups = [
  {
    id: '1',
    day: 'DAY1',
    date: '230509',
    artist: [
      { name: '10cm', time: '18:00' },
      { name: 'YB', time: '21:00' },
    ],
  },
  {
    id: '2',
    day: 'DAY2',
    date: '230510',
    artist: [
      { name: '헤이즈', time: '20:30' },
      { name: '오마이걸', time: '21:00' },
      { name: '크러쉬', time: '21:30' },
    ],
  },
  {
    id: '3',
    day: 'DAY3',
    date: '230511',
    artist: [
      { name: '릴보이', time: '20:30' },
      { name: '현아', time: '21:30' },
    ],
  },
];

export default function App() {
  return (
    <div>
      <h1>2023 인천대학교 대동제</h1>
      <h2>라인업</h2>
      <table>
        <tbody>
          <tr>
            <td>DAY1</td>
            <td>10cm</td>
            <td>18:00</td>
          </tr>
          <tr>
            <td>DAY1</td>
            <td>10cm</td>
            <td>18:00</td>
          </tr>
          <tr>
            <td>DAY1</td>
            <td>10cm</td>
            <td>18:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
