import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import BurguersPage from './pages/Main/Burgers';
import PizzasPages from './pages/Main/Pizzas';
import DrinksPages from './pages/Main/Drinks';
import DessertPages from './pages/Main/Dessert';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<BurguersPage />} />
        <Route path='pizzas' element={<PizzasPages />} />
        <Route path='drinks' element={<DrinksPages />} />
        <Route path='desserts' element={<DessertPages />} />
      </Route>
    </Routes>
  )
}
