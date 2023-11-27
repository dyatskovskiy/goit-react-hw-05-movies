import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchForm = styled.form`
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #7c6eb521;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  color: #cacaca;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #acacac;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &:hover {
    opacity: 1;
  }
`;

export const SearchIcon = styled(BiSearchAlt)`
  width: 32px;
  height: 32px;
`;
