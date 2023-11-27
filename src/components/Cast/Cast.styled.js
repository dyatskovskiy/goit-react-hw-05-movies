import styled from 'styled-components';

export const ActorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  grid-row-gap: 32px;
`;
