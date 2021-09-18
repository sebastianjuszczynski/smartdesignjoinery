import styled from "styled-components";

export const Form = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FormInputs = styled.div`
    margin-bottom: 8px;
    width: 80%;
    p {
        font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e; 
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
    &:hover {
        cursor: pointer;
        background: rgb(114, 66, 43);    
    }
`;