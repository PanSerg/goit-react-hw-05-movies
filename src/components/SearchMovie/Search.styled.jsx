import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const SearchForm = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
`;

export const SearchInput = styled(Field)`
    display: inline-block;
    width: 100%;
    font-size: 17px;
    font: inherit;
    padding: 0 15px;
    line-height: 1.3em;
    outline: none;
    &::placeholder {
        font: inherit;
        font-size: 17px;
    }
`;

export const SearchButton = styled.button`
    display: flex;
    alight-item: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40%;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    font-size: 27px;
    cursor: pointer;

    &:hover {
        opacity: 1; 
    }
`;