import styled from "styled-components";

export const Container = styled.div`
    background-color: #F0F0F0; 
    padding-bottom: 100px;  
    @media (max-width: 768px) {
        padding-bottom: 70px;
    }
`;
export const PolicyContainer = styled.div`
    background-color: #fff;
    margin: 10px 200px;
    padding: 10px 30px;
    line-height: 1.3;
    @media (max-width: 1200px) {
        margin: 0 15px;
    }
`;

export const PolicyH4 = styled.h4`
    font-size: 28px;
`;
export const PolicySection = styled.p`
    font-size: 24px;
    font-weight: bold;
`;
export const PolicyParagraph = styled.p`
    font-size: 18px;
`;