import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; // Імпорт дії
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch(); // Ініціалізація useDispatch

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)); // Відправлення дії видалення
  };

  return (
    <li className={css.contact}>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;