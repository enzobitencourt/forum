import { styled } from "styled-components"; 

export const Fundo = styled.div`
    background-color: white;
    margin: 0;
    padding: 10vh;
    width: 70vw;
    gap: 4vh;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:auto;
    gap: 4vh;
    background-color: var(--base-light-gray, #F6F8FD);
`

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 1vw;
`

export const DetalhesUsuario = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60vw;
`

export const UserName = styled.div`
    font-weight: bold;
`

export const TempoVisto = styled.div`
    color: #aaa;
    font-size: 14px;
    align-items: center;
    display: flex;
`

export const OpnionText = styled.p`
    width: 100%;
    height: auto;
    text-align: justify;
`

export const CommentButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
`

export const ImgComentar = styled.img`
    height: 4vh;
    width: 2vw;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

export const Escrita = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 26px;
    width: 100%;
    gap: 2vh;
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const CaixaComentario = styled.input`
    width: 100%;
    min-height: 16vh;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin-top: 10px;
`

export const BtnPublicar = styled.button`
    display: flex;
    justify-content: center;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #2447f9;
    color: white;
    width: 8vw;
    border-radius: 20px;
`

export const FotoPerfil = styled.div`
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    background: url(${(props) => props.img});
    background-size: cover;
`

export const UserProfession = styled.p`
    width: 15vw;
    font-size: 15px;
`

export const Infos = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
`

export const ComentarioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
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

export const DivTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 3vh;
`