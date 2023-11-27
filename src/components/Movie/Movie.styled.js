import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled.div`
  text-align: center;
  border: 1px solid #8f9090;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const MovieItemImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  font-size: 16px;
  padding: 5px 0;
  height: 79px;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  text-decoration: none;
  color: #1d1d1d;
`;
