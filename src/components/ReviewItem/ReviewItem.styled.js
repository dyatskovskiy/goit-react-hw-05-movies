import styled from 'styled-components';

export const Item = styled.li`
  max-width: 650px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 42px;
  background-color: #020b1c;
  box-shadow: 21px 21px 42px #79797985, -21px -21px 42px #79797985;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const AuthorName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #c5c5c5de;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #c1b7b7ed;
`;
