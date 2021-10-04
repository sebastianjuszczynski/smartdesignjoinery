import styled from "styled-components";
import Menu from "../../assets/menu-mobile.jpg";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    height: 60px;
    text-transform: uppercase;
    z-index: 1;
    background-color: ${({location}) => location === "/home" ? "rgba(0,0,0, 0.5)" : "black"};
    overflow: hidden;
    
    @media (max-width: 768px) {
        height: 100px;
        background-color: #693912;
        background-image: url(${Menu});
        background-position: center;
        background-size: cover;
    }
`;

export const Logo = styled.img`
    margin-left: 100px;
    height: 60px;
    
    @media (max-width: 768px) {
        margin: 0 auto;
        z-index: 2;
        height: 80px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;