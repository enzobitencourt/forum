import { styled } from "styled-components";

export const MainContainer = styled.div`
    width: 97vw;
    height: auto;
    margin: 1vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 25vh;
`

export const Esquerda = styled.div`
    width: 25vw;
    height: auto;
`
export const Direita = styled.div`
    width: 70vw;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4vh;
`

export const Voltar = styled.button`
    width: 6.5vw;
    height: 5vh;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    background: none;
    border: none;
`

export const SimboloVolt = styled.img`
    width: 2.5vw;
    height: 5vh;
`

export const TextoVolt = styled.p`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const FiltroContainer = styled.div`
    width: 16vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2vh;
    margin-left: 5vw;
    margin-top: 8vh;
`

export const Filtros = styled.div`
    display: flex;
    padding: 15px;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid var(--base-mid-gray, #7A757D);
`

export const Titulo = styled.p`
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const AdicionarPubli = styled.button`
    border-radius: 100px;
    background: #2E266D;
    font-size: 12px;
    color: white;
    display: flex;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

export const Divisao = styled.div`
    width: 8vw;
    height: 1px;
    background: #7A757D;
    margin: 3vh 0;
`

export const TituloPrincipal = styled.div`
    border-radius: 100px;
    width: auto;
    font-size: 16px;
    justify-content: center;
    background: #56AEFF;
    display: inline-flex;
    padding: 10px 20px;
    gap: 10px;
`

export const Cima = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`

export const Baixo = styled.div`
    width: 97vw;
    height: auto;
    display: flex;
    flex-direction: row;
`

export const Subtitulo = styled.p`
    color: #56AEFF;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    margin-top: 2vh;
`

export const TemaDisc = styled.p`
    color: var(--base-dark-gray, #34364A);
    text-align: center;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 45vw;
    margin: 0;
`
export const InputContainer = styled.div`
    display: flex;
    width: auto;
    height: 7vh;
    padding: 10px 20px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 100px;
    background: var(--base-white, #FFF);
    flex-direction: row;
`
export const Input = styled.input`
    width: 65vw;
    border: none;
    height: 7vh;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
`
export const FiltrosEscolhidos = styled.div`
    width: 70vw;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 4px;
`
export const TituloFiltro = styled.p`
    color: var(--base-mid-gray, #7A757D);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`
export const RespostaFiltros = styled.p`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

export const Divisao2 = styled.div`
    width: 100%;
    height: 1px;
    background: #7A757D;
`

export const Container = styled.div`
    height: 65vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`