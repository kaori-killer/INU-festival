import Layout from './components/Layout';

import IntroPage from './pages/IntroPage';
import LineupPage from './pages/LineupPage';
import FoodTruckPage from './pages/FoodTruckPage';

const routes = [{
  element: <Layout />,
  children: [
    { path: '/', element: <IntroPage /> },
    { path: '/lineup', element: <LineupPage /> },
    { path: '/foodtruck', element: <FoodTruckPage /> },
  ],
},
];

export default routes;
