import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';

const App = () => {
   return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;