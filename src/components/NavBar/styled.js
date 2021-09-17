import styled from "styled-components";

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    height: 60px;
    text-transform: uppercase;
    z-index: 1;
    background-color: rgba(0,0,0, 0.5);
    
    @media (max-width: 768px) {
        height: 100px;
        background-color: #693912;
    }
`;

export const Logo = styled.img`
    margin-left: 100px;
    height: 60px;
    
    
    @media (max-width: 768px) {
        margin: 0 auto;
        z-index: 2;
        height: 100px;
    }
`;