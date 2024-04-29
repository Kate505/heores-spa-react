import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dc, Hero, Marvel, Search } from '../pages/index.js';

export function HeroesRoutes () {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<Dc />} />

          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
}
