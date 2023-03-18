import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to="/">Домашняя</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Коллекция</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<div>Домашняя</div>} />
        <Route path="/dogs" element={<div>Коллекция</div>} />
      </Routes>
    </div>
  );
};

// import { NavLink, Route, Routes } from 'react-router-dom';

// export const App = () => {
//   return (
//     <div>
//       <nav>
//         <li>
//           <NavLink to="/">Домашняя</NavLink>
//         </li>
//         <li>
//           <NavLink to="/dogs">Коллекция</NavLink>
//         </li>
//       </nav>
//       <Routes>
//         <Route path="/" element={<div>Домашняя</div>} />
//         <Route path="/dogs" element={<div>Коллекция</div>} />
//       </Routes>
//     </div>
//   );
// };
