import styled from "styled-components";

export const FooterParagraph = styled.p`
    position: ${({location}) => location === "/home" || "/gallery" ? "relative" : "fixed"};
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background-color: black;
    padding: 15px;
    margin: 0;
    text-align: center;
`;