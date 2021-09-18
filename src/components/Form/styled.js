import styled from "styled-components";

export const Container = styled.div`
    margin: 10px auto;
    width: 1140px;
    position: relative;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
