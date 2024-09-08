import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';

const App = () => {
  // Хук для відправки дій у Redux
  const dispatch = useDispatch();

  // Отримуємо список контактів зі стану Redux
  const contacts = useSelector(selectContacts);

  // Отримуємо значення фільтра зі стану Redux
  const filter = useSelector(selectNameFilter);

  // Функція для додавання нового контакту
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  // Функція для видалення контакту за ID
  const handleDeleteContact = (idToDelete) => {
    dispatch(deleteContact(idToDelete));
  };

  // Функція для зміни фільтра
  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue)); // Відправляємо дію для зміни фільтра
  };

  // Фільтрація контактів на основі введеного значення фільтра
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;