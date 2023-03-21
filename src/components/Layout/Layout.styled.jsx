import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    top: 0;
    left: 0;
    display: flex;
    alight-item: center;
    position: sticky;
    padding: 15px 25px;
    min-height: 30px;
    color: #fff;
    background-color: #87CEEB;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NaviSection = styled.nav`
    display: flex;
    gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
    border: 1px solid #708090;
    border-radius: 5px:
    padding: 5px 20px;
    text-decoration: none;
    font-size: 20px;
    color: #000000;
    &.active {
        color: red;
   }
   &:hover{
    transform: scale(1.1);
     box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   }
`;