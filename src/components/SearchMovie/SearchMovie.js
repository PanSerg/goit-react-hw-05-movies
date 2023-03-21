import React from "react";
import { Formik } from "formik";
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { SearchForm } from "./Search.styled";

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
          <div
            type="text"
            name="input"
            autocomplete="off"
            autofocus
            placeholder="Search movie"
          ></div>{' '}
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