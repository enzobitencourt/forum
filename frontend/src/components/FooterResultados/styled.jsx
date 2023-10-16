import { styled } from "styled-components";

export const Paginas = styled.div`
    width: 100%;
    height: 6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BotaoPaginaVolt = styled.button`
    display: flex;
    flex-direction: row;
    padding: 1vw;
    width: 8vw;
    height: 6vh;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #2E266D;
    justify-content: space-between;
`
export const BotaoPaginaProx = styled.button`
    display: flex;
    flex-direction: row-reverse;
    padding: 1vw;
    width: 8vw;
    height: 6vh;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #2E266D;
    justify-content: space-between;
`

export const Flecha = styled.img`
    width: 2vw;
    height: 2vw;
`

export const Titulo = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    letter-spacing: -0.084px;
`
export const Numeros = styled.div`
    width: auto;
    height: 6vh;
    display: flex;
    gap: 0.5vw;
    flex-direction: row;
`

export const BotaoPaginas = styled.button`
    color: #FFF;
    border-radius: 5px;
    background: var(--base-dark-gray, #34364A);
    height: 6vh;
    width: 2vw;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.084px;
    justify-content: center;
    align-content: center;
`
export const BotaoPaginasNo = styled.button`
    color: black;
    border-radius: 5px;
    background: none;
    border: none;
    height: 6vh;
    width: 2vw;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.084px;
    justify-content: center;
    align-content: center;
`