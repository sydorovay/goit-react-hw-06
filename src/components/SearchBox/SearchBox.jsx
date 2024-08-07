
import  { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  const [placeholder, setPlaceholder] = useState('Find contacts by name');

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('Find contacts by name');
  };

  return (
    <div className={css.searchBox}>
      <h2 className={css.searchHeader}>Find contacts by name</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;