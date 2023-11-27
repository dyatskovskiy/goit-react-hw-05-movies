import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: auto;
  text-align: center;
`;

export const PhotoLayout = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Character = styled.p`
  font-size: 12px;
`;
