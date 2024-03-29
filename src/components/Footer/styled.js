import styled from "styled-components";

export const FooterParagraph = styled.p`
    position: ${({location}) => location === "/home" || location === "/contact" ? "relative" : "fixed"};
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background-color: black;
    padding: 15px;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: ${({location}) => location === "/home" ? "35px" : "-40px"}
    }`;