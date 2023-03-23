import { Suspense } from 'react';
import { Loading } from 'components';
import { Outlet } from 'react-router-dom';
import { Header, NaviSection, NavLinkStyled } from 'components';

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
