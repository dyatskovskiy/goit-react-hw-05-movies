import styled from 'styled-components';

export const Item = styled.li`
  max-width: 650px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 42px;
  background-color: #e0e0e0;
  box-shadow: 21px 21px 42px #c1c1c1, -21px -21px 42px #ffffff;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AuthorName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #2b2b2b;
`;
