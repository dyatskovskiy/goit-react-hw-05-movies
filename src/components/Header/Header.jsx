import { HeaderLayout, Navigation, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Navigation>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </Navigation>
      </nav>
    </HeaderLayout>
  );
};
