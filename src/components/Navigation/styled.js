import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Menu from "../../assets/menu-mobile.jpg";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    display: flex;
    list-style: none;
    padding: 0;
    letter-spacing: 2px;
    margin-right: 15px;
    font-size: 20px;
    text-decoration: none;
    color: white;
    &.${activeClassName} {
        font-weight: bold;
    }
    @media (max-width: 768px) {
        margin-right: 0;
        font-size: 28px;
        padding: 10px;
        text-align: center;
        letter-spacing: 5px;
    }
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    letter-spacing: 2px;
    margin-right: 100px;
    font-size: 20px;
    
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-image: url(${Menu});
        background-position: center;
        background-size: cover;
        position: fixed;
        transform: ${({ open }) => open ? "translateX(0)" : "translateX(150%)"};
        margin: 0;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
        align-items: center;
    }
`;
