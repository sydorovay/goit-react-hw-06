import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts); 

  // Перевірка на випадок, якщо contacts не є масивом
  if (!Array.isArray(contacts)) {
    return <div>Error: Contacts data is not an array</div>;
  }

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <li>No contacts available</li>
      )}
    </ul>
  );
};

export default ContactList;