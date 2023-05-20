import { SearchForm } from 'components/SearchForm/SearchForm';
import { Header } from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  return (
    <Header className="searchbar">
      <SearchForm onSearch={onSearch} />
    </Header>
  );
};
