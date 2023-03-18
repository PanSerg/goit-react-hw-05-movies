import { NavLink, Route, Routes } from 'react-router-dom';
import Movies from 'pages/Home';
import Search from 'pages/Search';
import Trending from 'pages/Trending';


export const App = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/">Домашняя</NavLink>
        </li>
        <li>
          <NavLink to="/films">Коллекция</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/films" element={<Search />} />
        <Route path="/films/:filmId" element={<Trending/>} />
      </Routes>
    </div>
  );
};