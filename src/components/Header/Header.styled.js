import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLayout = styled.header`
  background-color: #8ba7dd;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  margin: 0 auto;
  width: 95vw;
  height: 40 px;
  padding: 24px;
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 12px 93px -3px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 12px 93px -3px rgba(255, 255, 255, 1);
  box-shadow: 0px 12px 93px -3px rgba(255, 255, 255, 1);
`;

export const Navigation = styled.ul`
  margin: 0 auto;
  width: 200px;
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
