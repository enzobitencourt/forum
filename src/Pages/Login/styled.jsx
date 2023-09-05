import { styled } from "styled-components";

export const CaixaDeTexto = styled.div`
    background-color: black;
    width: 25vw;
    height: 20vh;
`

export const Container = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);

    width: 100%;
    height: 100vh; 
    /* display: flex;
    align-items: center; */
    background: #0c0ce94d;
`

export const ContainerForm = styled.div`
width: 80%;
display: flex;
align-self: center;
height: 90vh;
justify-content: center;
`

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0c0ce94d;
`
export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`
export const FormImage = styled.div`
    width: 65vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
export const Image = styled.img`
    width: 100%;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
    width: 100%;
`
export const Input = styled.input`
    width: 100%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;`

export const Label = styled.label`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
`

export const Divi = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
gap: 2vw;
`

export const LogoImg = styled.img`
    width: 50%;
`

export const ContainerFormulario = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2vh;
  justify-content: center;
  align-items: center;
`

export const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
`

export const Botao = styled.button`
    width: 100%;
    color: white;
    height: 40px;
    border: none;
    background-color: #261ebe;
    padding: 0.62rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    border-radius: 8.078px;
    box-shadow: 0px 12.116715431213379px 24.233430862426758px 0px rgba(1, 11, 253, 0.12);
`
export const Register = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 2vh;
    border: none;
    color: #261ebe;
    background-color: white;
    cursor: pointer;
    border: 1px solid #261ebe;
    padding: 0.62rem;
    border-radius: 8.078px;
    box-shadow: 0px 12.116715431213379px 24.233430862426758px 0px rgba(1, 11, 253, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`