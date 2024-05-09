import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Welcome } from "../pages/welcome";
import { Home } from '../pages/home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Welcome} />
      <Route path="home" Component={Home} />
      {/* Otras rutas aquí */}
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

