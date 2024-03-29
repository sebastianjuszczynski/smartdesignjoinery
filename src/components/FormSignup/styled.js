import styled from "styled-components";

export const FormInputs = styled.div`
    margin-bottom: 8px;
    width: 80%;
    p {
        font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e; 
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;
export const FormLabel = styled.div`
    display: inline-block;
    font-size: 12.8px;
    margin-bottom: 6px;
    color: #000;
`;
export const FormInput = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: 1px solid black;
    ::placeholder {
        color: #595959;
        font-size: 12px; 
    }
`;
export const FormTextarea = styled.textarea`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 80px;
    width: 100%;
    border: none;
    font-size: 0.8rem;
    border: 1px solid black; 
    ::placeholder {
        color: #595959;
        font-size: 12px; 
    }
`;
export const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: 110px;
        margin-bottom: 10px;
    }
`;
export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 30px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export const Link = styled.a`
    text-decoration: none;
    font-size: 20px;
    text-decoration: none;
    color: black;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    &:hover {
        color: grey;
    }
`;

export const Icon = styled.svg`
  stroke: black;
  fill: white;
  stroke-width: 15;
  width: 50px;
  height: 30px;
  transition: 1s;
  ${ContainerItem}:hover & {
    fill: #f2f1a0;
  }
`;
export const Icon2 = styled.svg`
  stroke: black;
  fill: white;
  stroke-width: 2;
  width: 50px;
  height: 30px;
  transition: 1s;
  ${ContainerItem}:hover & {
    fill: rgb(70, 26, 4);
  }
`;
export const FormInputButton = styled.button`
    width: 80%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: rgb(70, 26, 4);
    outline: none;
    border: none;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.3s;
    padding: 10px;
    @media (max-width: 768px) {
        width: 90%;
        margin-bottom: 40px;
    }
   
    &:hover {
        cursor: pointer;
        background: rgb(114, 66, 43);    
    }
    
`;
