import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-size: 48px;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 10px;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;