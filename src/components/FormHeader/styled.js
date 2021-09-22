import styled from "styled-components";

export const FormH3 = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 28px;
    line-height: 1.5;
    margin-top: ${({location}) => location === "/contact" ? "50px" : "100px"};
    margin-bottom: 100px;
    @media (max-width: 768px) {
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 50px;
    }
`;
export const FormSpan = styled.span`
    font-weight: bold;
`;