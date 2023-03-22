import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MoviesList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
`;

export const LinkStyled = styled(Link)`
    font-size: 17px;
    text-decoration: none;
    line-height: 1.4em;
`;