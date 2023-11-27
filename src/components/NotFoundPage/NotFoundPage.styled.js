import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8rem 10rem;
`;

export const Label = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 15rem;
  line-height: 1;
  margin-bottom: 5rem;
  color: #9ca3af;
`;
export const Title = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #313131;
`;

export const Text = styled.div`
  text-align: center;
  max-width: 500px;
  margin: auto;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #313131;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  padding: 1rem;
  color: #46a1e9;

  &:hover {
    background-color: rgba(34, 139, 230, 0.2);
  }
`;
