import styled from "styled-components";
import Doors from "../../assets/doors.jpg";
import Stairs from "../../assets/stairs.jpg";
import Wardrobe from "../../assets/wardrobe.jpg";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 2px;
    border: 2px solid #6C3A13;
    padding: 10px 15px;
    color: #6C3A13;
    transition: 0.3s;
    &:hover {
        border: 2px solid #ffffff;
        color: #ffffff;
        background-color: #6C3A13;
    };
    @media (max-width: 768px) {
        font-size: 18px;
        padding: 5px 12px;
        
    }    
`;

export const Container = styled.div`
    display: flex;
    width: 1140px;
    height: 70vh;
    margin: 0 auto;
    @media (max-width: 1140px) {
        flex-direction: column;
        width: 90vw;
        align-items: center;
        height: 100%;
        
    }
`;

export const Flexbox = styled.div`
    width: 100%;
    height: 100%;
    margin: 15px;
`;

export const Image = styled.img`
    background-image: url(${Stairs});
    background-position: center;
    background-size: cover;
    height: 50%;
    width: 100%;
    margin-bottom: 15px;
    @media (max-width: 1140px) {
        height: 40vh;
        margin-bottom: 0;
    }
`;

export const Image2 = styled.img`
    background-image: url(${Wardrobe});
    background-position: center;
    background-size: cover;
    height: 50%;
    width: 100%;
    margin-top: 15px;
    @media (max-width: 1140px) {
        height: 40vh;
    }
`;

export const Image3 = styled.img`
    background-image: url(${Doors});
    background-position: center;
    background-size: cover;
    height: 50%;
    width: 100%;
    margin-bottom: 15px;
    @media (max-width: 1140px) {
        height: 40vh;
        margin-top: 50px;
    }
`;

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 30px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Description = styled.p`
    text-align: center;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    background-color: #F4F5F6;
    align-items: center;
    @media (max-width: 768px) {
        padding: 15px 0;
    }
`;
