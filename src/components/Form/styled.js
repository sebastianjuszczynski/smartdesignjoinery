import styled from "styled-components";

export const Container = styled.div`
    margin: 10px auto;
    width: 1140px;
    position: relative;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1140px) {
        width: 100%;
    }
`;
