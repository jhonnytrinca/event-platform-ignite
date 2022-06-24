import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Subscribe } from './pages/Subscribe';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Subscribe />} />
      <Route path='/event' element={<MainPage />} />
      <Route path='/event/lesson/:slug' element={<MainPage />} />
    </Routes>
  );
};
