import { Formik } from 'formik';
import { ButtonSearch, Field, Form, LabelSearch } from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        onSearch(values.query);
        // resetForm();
      }}
    >
      <Form className="form">
        <ButtonSearch type="submit" className="button">
          <LabelSearch className="button-label">Search</LabelSearch>
        </ButtonSearch>

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
  );
};
