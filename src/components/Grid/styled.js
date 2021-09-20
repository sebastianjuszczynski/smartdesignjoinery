import styled from "styled-components";

export const MasonryContainer = styled.div`
    margin: 0 150px;    
    @media (max-width: 768px) {
        margin: 0 10px;
    }
`;
export const IMG = styled.img`
    width: 100%;
    height: 380px;
    display: block;
    object-fit: cover;
    object-position: center;
    opacity: 0.8;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;