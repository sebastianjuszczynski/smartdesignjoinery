import styled from "styled-components";

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    letter-spacing: 2px;
    margin-right: 100px;
    font-size: 20px;;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #693912;
        position: fixed;
        transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
        margin: 0;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3rem;
        justify-content: space-evenly;
        font-size: 32px;
        transition: transform 0.3s ease-in-out;
    }
`;
export const NavItem = styled.li`
    padding: 0 15px;
    @media (max-width: 768px) {
        padding: 10px 10px;
        text-align: center;
    }
`;
