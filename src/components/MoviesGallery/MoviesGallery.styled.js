import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  grid-row-gap: 32px;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  text-decoration: none;
  color: #1d1d1d;
`;
