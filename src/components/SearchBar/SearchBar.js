import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchButton,
  SearchIcon,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ query }) => {
  const [params, setParams] = useSearchParams();

  const onUpdateQuery = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.search.value.trim();

    if (!searchQuery) {
      return alert('Enter movie, please ');
    }
    params.set('query', searchQuery);
    setParams(params);
  };

  return (
    <SearchForm onSubmit={onUpdateQuery}>
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>

      <SearchFormInput
        name="search"
        type="text"
        autoFocus
        placeholder="Search movies"
        defaultValue={query}
      />
    </SearchForm>
  );
};
