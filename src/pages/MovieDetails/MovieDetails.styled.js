import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLayout = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 24px;
`;

export const StyledBackLink = styled(Link)`
  margin-bottom: 20px;
  display: block;
  line-height: 40px;
  height: 40px;
  text-align: center;
  width: 100px;
  cursor: pointer;
  background-color: #7f2221;
  color: #f3f3f3;
  transition: all 0.3s;
  position: relative;
  border-radius: 4px;

  & span {
    transition: all 0.3s;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255, 255, 255, 0.5);
    border-bottom-color: rgba(255, 255, 255, 0.5);
    transform: scale(0.1, 1);
  }

  & :hover span {
    letter-spacing: 2px;
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;

export const MovieTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 4px;
`;

export const OverviewTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const Overview = styled.p`
  font-size: 16px;
  max-width: 500px;
  margin-bottom: 40px;
`;

export const GenresTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const Genres = styled.ul`
  padding-left: 20px;
  list-style: unset;
  display: flex;
  gap: 32px;
`;
