import { styled } from "styled-components";
import login from "../../Assets/perfil.jpg"
import pesquisa from "../../Assets/Pesquisa.png"

export const Fundo = styled.div`
    width: 98vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
`

export const FirstContainer = styled.div`
    width: 25vw;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const SecondContainer = styled.div`
    width: 71vw;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
`

export const Logo = styled.img`
    width: 5vw;
    height: 8vh;
    padding-left: 1vw;
`

export const Topicos = styled.p`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Logins = styled.div`
    width: 13vw;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const Foto = styled.div`
    background: url(${login});
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-size: cover;
`
export const Pesquisa = styled.div`
    background: url(${pesquisa});
    border-radius: 50%;
    width: 40px;
    height: 40px;
`