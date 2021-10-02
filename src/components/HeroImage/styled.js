import styled from "styled-components";
import { keyframes } from "styled-components";
import background from "../../assets/background.jpg";


const bounce = keyframes` {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
}
`;
export const Image = styled.div`
    background-image: url(${background});
    background-size: cover;  
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.4);
    mix-blend-mode: overlay;
`;
export const Text = styled.div`
    position: absolute;
    top: 55%;
    left: 0;
    color: white;
    margin-left: 100px;
    
    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
        text-align: center;
        overflow: hidden;
    }
`;
export const TextBig = styled.h2`
    font-size: 48px;
    padding: 10px;
    background: rgba(0,0,0, 0.6);
    margin-bottom: 0;
    @media (max-width: 768px) {
        font-size: 26px;
    }
`;
export const TextSmall = styled.h3`
   font-size: 32px; 
   padding: 10px;
   background: rgba(0,0,0, 0.6);
   margin-top: 10px;
   @media (max-width: 768px) {
        font-size: 22px;
    }
`;
export const ArrowDown = styled.div`
    position: absolute;
    width: 50px;
    left: calc(50% - 25px);
    bottom: 0;
    animation: ${bounce} 2s infinite;
    overflow: hidden;
    cursor: pointer;
`;
export const Arrow = styled.a`
    color: white;
    font-size: 48px;
`;
export const Container = styled.div`
    height: calc(100vh - 60px);
    overflow: hidden;
    @media (max-width: 768px) {
        height: calc(100vh - 100px);
    }
`;
