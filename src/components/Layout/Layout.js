import { Suspense } from 'react';
import { Loading } from 'components/Loading/Loading';
import { Outlet } from 'react-router-dom';
import { Header, NaviSection, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <NaviSection>
          <NavLinkStyled to="/" end="true">
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NaviSection>
      </Header>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
