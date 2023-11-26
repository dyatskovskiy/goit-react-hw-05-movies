import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InformationLayout = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  border-top: 1px solid #d7d4cd;
  border-bottom: 1px solid #d7d4cd;
  margin: 40px 0;
  padding: 20px 48px;
`;
export const StyledLink = styled(Link)`
  color: black;
  font-size: 24px;
  text-decoration: none;
  width: 60px;
`;
