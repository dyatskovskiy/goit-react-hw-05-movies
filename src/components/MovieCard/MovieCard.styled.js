import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled.div`
  text-align: center;
  border: 1px solid #8abdff66;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: inset 0px -21px 31px -13px #675101;
  -moz-box-shadow: inset 0px -21px 31px -13px #675101;
  box-shadow: inset 0px -21px 31px -13px #675101;
`;

export const MovieItemImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  font-size: 16px;
  padding: 5px 0;
  height: 79px;
  color: #dfdfdf;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  color: #1d1d1d;
  background-color: #071227;
`;
