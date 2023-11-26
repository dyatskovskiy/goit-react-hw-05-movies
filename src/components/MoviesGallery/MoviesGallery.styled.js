import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  grid-row-gap: 32px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #1d1d1d;
`;
