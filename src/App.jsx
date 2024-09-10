import ContactContainer from './components/ContactContainer/ContactContainer';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactContainer />
    </div>
  );
};

export default App;