import { Field, Form, Formik } from 'formik';

export const Searchbar = ({ onSearch }) => {
  return (
    <header className="searchbar">
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          onSearch(values.query);
          resetForm();
        }}
      >
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <Field
            className="input"
            name="query"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </Form>
      </Formik>
    </header>
  );
};
