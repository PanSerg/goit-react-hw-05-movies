import { Outlet } from "react-router-dom";
import { Header, NaviSection, NavLinkStyled } from "./Layout.styled";


export const Layout = () => {
    return (
      <div>
        <Header>
          <NaviSection>
            <NavLinkStyled to="/" end="true">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NaviSection>
        </Header>

        <main>
          <Outlet />
            </main>
      </div>
    );
};