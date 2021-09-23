import styled from "styled-components";

export const TextContainer = styled.div`
    position: relative;
    top: 100px;
    left: 50%;
    color: white;
    @media (max-width: 1330px) {
        top: 10px;
        left: 0;
        padding: 0 10px;
        text-align: center;
    }
`;

export const TextH3 = styled.h3`
    font-size: 36px;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 50px;
    }
`;

export const TextParagraph = styled.p`
    font-size: 20px;
    line-height: 1.5;
`;
export const Container = styled.div`
    background: rgba(0, 0, 0, 0.6);
`;