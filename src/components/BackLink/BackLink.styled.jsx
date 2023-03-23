import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const GoBack = styled(Link)`
    display: inline-flex;
    align-item: center;
    text-decoration: none;
    padding: 5px 15px;
    margin: 5px;
    gap: 5px;
    color: gray;
    font-weight: 600;
    border-radius: 5px;
    background-color: #D3D3D3;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.05);
    transition: 300ms;

    &:hover,
    &:focus {
        scale: 1.05;
        color: white;
        font-weight: 500;
        background-color: tomato;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      transition: 300ms;
    }
`;