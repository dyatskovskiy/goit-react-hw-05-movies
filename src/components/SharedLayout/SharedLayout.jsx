import { AppWrapper } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        <main>
          <Outlet />
        </main>
      </AppWrapper>
    </>
  );
};
