import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: uuidv4(), name: values.name, number: values.number };
    addContact(newContact);
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
          <label htmlFor="nameInput">Name</label>
          <Field id="nameInput" name="name" type="text" />
          <ErrorMessage name="name" component="div" className={css.errorMessage} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="numberInput">Number</label>
          <Field id="numberInput" name="number" type="text" />
          <ErrorMessage name="number" component="div" className={css.errorMessage} />
        </div>
        <button className={css.addContactButton} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;