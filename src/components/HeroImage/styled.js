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
    top: 45%;
    left: 0;
    padding: 10px;
    color: white;
    margin-left: 100px;
`;
export const TextBig = styled.h2`
    font-size: 3em;
`;
export const TextSmall = styled.h3`
   font-size: 2em; 
`;
export const ArrowDown = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    animation: ${bounce} 2s infinite;
    overflow: hidden;
`;
export const Arrow = styled.a`
    color: white;
    font-size: 3em;
`;