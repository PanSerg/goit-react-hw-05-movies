import React from "react";
import { Formik } from "formik";
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput } from "./Search.styled";

export function SearchMovie({ handleSearchInput }) {
  return (
    <section>
      <Formik
        initialValues={{ input: '' }}
        onSubmit={({ input }, { resetForm }) => {
          if (input.trim() === '') return;
          handleSearchInput();
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
          <button type="submit">
            <BiSearchAlt />
          </button>
        </SearchForm>
      </Formik>
    </section>
  );
};

SearchMovie.propTypes = {
  handleSearchInput: PropTypes.func.isRequired
}