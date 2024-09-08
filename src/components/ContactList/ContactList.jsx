import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice'; // Імпорт селектора
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts); // Отримання контактів через useSelector

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;