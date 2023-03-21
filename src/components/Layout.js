import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
      <div>
        <header>
          <ul>
            <li to="/" end="true">
              Home
            </li>
            <li to="/movies">Movies</li>
          </ul>
        </header>

        <main>
          <Outlet />
            </main>
      </div>
    );
};