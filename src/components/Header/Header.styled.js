import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLayout = styled.header`
  height: 40 px;
  padding: 24px;
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 9px 22px -11px rgba(122, 122, 122, 1);
  -moz-box-shadow: 0px 9px 22px -11px rgba(122, 122, 122, 1);
  box-shadow: 0px 9px 22px -11px rgba(122, 122, 122, 1);
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 32px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: black;

  &.active {
    color: #b42410;
  }
`;
