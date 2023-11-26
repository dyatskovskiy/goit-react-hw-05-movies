import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
`;

export const MoviesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, calc((100% - 16px * 4) / 5));
  gap: 16px;
`;
