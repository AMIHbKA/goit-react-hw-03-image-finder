import { SearchForm } from 'components/SearchForm/SearchForm';
import { Header } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSearch }) => {
  return (
    <Header className="searchbar">
      <SearchForm onSearch={onSearch} />
    </Header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
