import Layout from './components/Layout';

import IntroPage from './pages/IntroPage';
import LineupPage from './pages/LineupPage';
import FoodTruckPage from './pages/FoodTruckPage';
import BoothPage from './pages/BoothPage';
import NoticePage from './pages/NoticePage';

const routes = [{
  element: <Layout />,
  children: [
    { path: '/', element: <IntroPage /> },
    { path: '/lineup', element: <LineupPage /> },
    { path: '/foodtruck', element: <FoodTruckPage /> },
    { path: '/booth', element: <BoothPage /> },
    { path: '/notice', element: <NoticePage /> },
  ],
},
];

export default routes;
