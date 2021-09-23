import styled from "styled-components";
import { keyframes } from "styled-components";

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
export const ArrowUp = styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    right: 20px;
    bottom: 30px;
    background-color: rgba(108,58,19, 0.8);
    animation: ${bounce} 2s infinite;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: 0.3s;
    &:hover {
      background-color: rgba(108,58,19, 1);
    }
`;
export const Arrow = styled.a`
    color: #fff;
    font-size: 40px;
`;