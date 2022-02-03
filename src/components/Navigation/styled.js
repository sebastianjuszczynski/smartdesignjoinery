import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Menu from "../../assets/menu-mobile.jpg";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    margin-right: 15px;
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
    }
`;

export const StyledNavLink2 = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    margin-right: 15px;
    text-decoration: none;
    color: white;
    padding: 5px 5px 5px 5px;
    
    &.${activeClassName} {
        font-weight: bold;
    }
    @media (max-width: 768px) {
        margin-right: 0;
        font-size: 28px;
        padding: 10px;
        text-align: center;
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
        letter-spacing: 5px;
    }
`;


export const Box = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 180%;
    left: 10%;
    background-color: ${({ location }) => location === "/home" ? "rgba(0,0,0, 0.5)" : "black"};
    transform: ${({ dropdown }) => dropdown ? "translateY(0)" : "translateY(-200%)"};
    transition: transform 0.3s ease-in-out;
`;
export const SubList = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    padding-left: 15px; 
    cursor: pointer;     
`;
export const DropdownContainer = styled.div`
    display: flex;
`;
export const Dropdown = styled.div`
    padding: 0 5px 0 5px;
    transform: ${({ subnav }) => subnav ? "rotate(180deg)" : "rotate(0)"};
    transition: transform 0.3s ease-in-out;
    font-size: 20px;
`;