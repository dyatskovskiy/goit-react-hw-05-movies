import styled from 'styled-components';

export const MoviesContainer = styled.div`
  max-width: calc(5 * (187px + 16px) - 16px);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(5, 187px);
  gap: 16px;
`;
