import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  grid-row-gap: 32px;
`;
