import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  // Обробник зміни значення фільтра
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Відправляємо дію для оновлення фільтра
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;