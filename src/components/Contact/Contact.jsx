import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({contact, deleteContact }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <span className={css.contactName}><span className={css.user} ><FaUser /> </span> {contact.name}</span>
        <span className={css.contactNumber}><span  className={css.phone}><FaPhone/></span>{contact.number}</span>
      </div>
      <button className={css.deleteButton} onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;