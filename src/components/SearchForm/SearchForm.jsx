import { Formik } from 'formik';
import { SearchButtonIcon } from 'UI/icons';
import { ButtonSearch, Field, Form } from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, { resetForm }) => {
        onSearch(values.query);
        // resetForm();
      }}
    >
      <Form className="form">
        <ButtonSearch type="submit" className="button">
          <SearchButtonIcon />
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
