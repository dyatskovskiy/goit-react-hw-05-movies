import styled from 'styled-components';

export const MovieItem = styled.div`
  height: 190px;
  text-align: center;
  border: 1px solid #8f9090;
  border-radius: 4px;

  & a {
    text-decoration: none;
    color: #111111;
  }
`;

export const Poster = styled.img`
  max-width: 100%;
`;
