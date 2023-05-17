import { Field, Formik } from 'formik';
import { Form, Header } from './Searchbar.styled';

export const Searchbar = props => {
  return (
    <Header className="searchbar">
      <Formik>
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <Field
            className="input"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Header>
  );
};
