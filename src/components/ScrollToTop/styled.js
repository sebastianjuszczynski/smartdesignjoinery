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
    width: 40px;
    right: 20px;
    bottom: 30px;
    animation: ${bounce} 2s infinite;
    cursor: pointer;
    overflow: hidden;
`;
export const Arrow = styled.a`
    color: rgba(108,58,19, 0.8);
    font-size: 48px;
`;