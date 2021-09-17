import styled from "styled-components";
import Doors from "../../assets/doors.jpg";
import Stairs from "../../assets/stairs.jpg";
import Wardrobe from "../../assets/wardrobe.jpg";



export const Container = styled.div`
    display: flex;
    width: 80vw;
    height: 70vh;
    margin: 0 auto;
`;

export const Flexbox = styled.div`
    width: 100%;
    height: 100%;
    /* background: red; */
    margin: 5px;
`;

export const Image = styled.img`
    background-image: url(${Stairs});
    background-position: center;
    background-size: cover;
    height: 50%;
    width: 100%;
`;

export const Image2 = styled.img`
    background-image: url(${Wardrobe});
    background-position: center;
    background-size: cover;
    height: 50%;
    width: 100%;
`;

export const Image3 = styled.img`
    background-image: url(${Doors});
    background-position: center;
    background-size: cover;
    height: 50%;
    width: 100%;
`;

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 30px;
`;

export const Description = styled.p`
    text-align: center;
`;

export const Link = styled.a`
    display: block;
    width: 40%;
    margin: 0 auto;
    padding: 20px 14px;
    border: 1px solid white;
    text-align: center;
    color: #683712;
    text-transform: uppercase;
    font-size: 20px;
`;

export const InfoContainer = styled.div`
    height: 45%;
`;
