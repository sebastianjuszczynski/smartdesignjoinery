import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 50px;    
`;
export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 18px;
    color: #42AFE2;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
export const Item = styled.li`
    padding: 5px;
`;
export const Link = styled.a`
    cursor: pointer;
    &:hover {
        text-decoration: underline;       
    }
    &:active {
        color: green;
        font-weight: bold;
    }
    &:visited {
        color: black;
    }
`;