import { styled } from "styled-components";

export const FundoBody = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`

export const CriarPublicacao = styled.div`
    background: var(--base-light-gray, #F6F8FD);;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 4vh;
    width: 34vw;
    height: auto;
`

export const Titulo = styled.h2`
    font-size: 18px;
    margin-top: 0;
` 

export const InputTitulo = styled.input`
    width: 95%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 16px;
`

export const InputContent = styled.input`
    width: 95%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 16px;
    height: 150px;
`

export const BtnPublicar = styled.button`
    background-color: #2447F9;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer; 
    float: right;
`

export const BtnSair = styled.button`
    height: 20vh;
    width: 20vh;
    background-color: #fff;
    cursor: pointer;
    font-size: 5vh;
    border: none;


    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`

export const ImagemBotao = styled.img`
    height: 4vh;
    width: 4vh;
`

export const FooterPublicacao = styled.div`
    height: 14vh;
    width: 70vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`