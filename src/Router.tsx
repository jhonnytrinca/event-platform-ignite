import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<>Teste</>} />
      <Route path='/event' element={<MainPage />} />
      <Route path='/event/lesson/:slug' element={<MainPage />} />
    </Routes>
  );
};
