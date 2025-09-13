import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'Components/Header/Header';
import { StyledMain } from 'styles/components.styled';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { SideBar } from 'Components/SideBar/SideBar';

export const Layout = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      <StyledMain>
        {windowWidth > 719 && <SideBar />}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};
