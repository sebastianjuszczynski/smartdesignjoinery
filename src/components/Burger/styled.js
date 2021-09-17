import styled from "styled-components";

export const StyledBurger = styled.div`
    width: 32px;
    height: 32px;
    position: fixed;
    right: 20px;
    display: none;
    z-index: 1;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
    width: 32px;
    height: 4px;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
        transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
        transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
}
`;
