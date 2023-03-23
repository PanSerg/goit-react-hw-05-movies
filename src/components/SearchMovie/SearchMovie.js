import React from "react";
import { Formik } from "formik";
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from "components";

export function SearchMovie({ handleSearchInput }) {
  return (
    <section>
      <Formik
        initialValues={{ input: '' }}
        onSubmit={({ input }, { resetForm }) => {
          if (input.trim() === '') return;
          handleSearchInput(input);
          resetForm();
        }}
      >
        <SearchForm>
          <SearchInput
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          ></SearchInput>{' '}
          <SearchButton type="submit">
            <BiSearchAlt />
          </SearchButton>
        </SearchForm>
      </Formik>
    </section>
  );
};

SearchMovie.propTypes = {
  handleSearchInput: PropTypes.func.isRequired
}