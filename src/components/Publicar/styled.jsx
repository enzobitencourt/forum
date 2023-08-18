import { styled } from "styled-components";


export const CriarPublicacao = styled.div`
    background: var(--base-light-gray, #F6F8FD);
    border-radius: 20px;
    align-content: center;
    width: 35vw;
    height: 95vh;
`

export const InputTitulo = styled.input`
    width: 95%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 16px;
    background: var(--base-light-blue, #E8EFFF);
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

export const ImagemBotao = styled.img`
    height: 4vh;
    width: 4vh;
`

export const FooterPublicacao = styled.div`
    height: 11vh;
    width: 100%;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 3vh;
    align-content: center;
    align-items: center;
    justify-content: space-between;
`

export const Tittle = styled.p`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vh;
    gap: 2vh;
`

export const Entradas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
`