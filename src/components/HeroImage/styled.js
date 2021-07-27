import styled from "styled-components";
import background from "../../assets/background.jpg";

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
    background: rgba(0,0,0, 0.2);
    mix-blend-mode: overlay;
`;