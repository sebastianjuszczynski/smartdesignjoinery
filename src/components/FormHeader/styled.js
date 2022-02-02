import styled from "styled-components";

export const FormH3 = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 28px;
    line-height: 1.5;
    margin-top: ${({location}) => location === "/contact" ? "10px" : "100px"};
    margin-bottom: 100px;
    @media (max-width: 768px) {
        font-size: 22px;
        margin-top: 20px;
        margin-bottom: 100px;
    }
`;
export const FormSpan = styled.span`
    font-weight: bold;
`;