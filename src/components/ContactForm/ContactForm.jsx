import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice'; 
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch(); // Ініціалізація useDispatch

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too Short!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: uuidv4(), name: values.name, number: values.number };
    dispatch(addContact(newContact)); // Додавання контакту через Redux
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            name="name"
            type="text"
            autoComplete="name"
          />
          <ErrorMessage name="name" component="div" className={css.errorMessage} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="number">Number</label>
          <Field
            id="number"
            name="number"
            type="text"
            autoComplete="tel"
          />
          <ErrorMessage name="number" component="div" className={css.errorMessage} />
        </div>
        <button className={css.addContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;