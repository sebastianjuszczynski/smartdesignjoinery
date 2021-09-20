import styled from "styled-components";

export const Text = styled.h2`
    margin: 100px auto;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.3;
    font-size: 40px;
    font-weight: 400;
    @media (max-width: 768px) {
        margin: 50px auto;
        font-size: 30px;
    }
`;

export const Span = styled.span`
    color: #6C3A13;
    font-weight: bold;
    font-size: 60px;
    @media (max-width: 768px) {
        font-size: 40px;
    }
`;
export const ExclamationMark = styled.span`
    display: inline-block;
    font-size: 70px;
    font-weight: bold;
    color: #6C3A13;
    transform: skew(-15deg);
    @media (max-width: 768px) {
        font-size: 50px;
    }
`;