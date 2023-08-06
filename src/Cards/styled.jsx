import { styled } from "styled-components";
import comments from "../Assets/comments.svg"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4vh;
    gap: 3.5vh;
    width: 67vw;
    height: 38vh;
    border-radius: 10px;
    background: #FFF;
`

export const Titulo = styled.p`
    width: auto;
    color: #000;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const Barra = styled.div`
    width: auto;
    height: 8.5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Perfil = styled.div`
    width: 20vw;
    height: 8.5vh;
    display: flex;
    flex-direction: row;
    gap: 1vw;
`
export const ImagemPerfil = styled.img`
    width: 8.5vh;
    height: 8.5vh;
    border-radius: 50%;
    background-size: cover;
`
export const InfPerfil = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    justify-content: center;
`

export const Nome = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const Cargo = styled.p`
    color: var(--base-mid-gray, #7A757D);
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

export const Tempo = styled.p`
    color: var(--base-mid-gray, #7A757D);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`
export const Descricao = styled.p`
    color: var(--base-mid-gray, #7A757D);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-self: stretch;
    margin: 0;
`

export const FooterCard = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5vw;
`

export const Comments = styled.div`
    width: 2vw;
    height: 2vw;
    background: url(${comments});
    background-size: cover;
`
export const QuantComments = styled.p`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`