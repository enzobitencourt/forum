import { styled } from "styled-components"; 

export const Fundo = styled.div`
    background-color: white;
    margin: 0;
    padding: 5vh;
    border-radius: 12px;
    width: 70vw;
    height: auto;
    gap: 3vh;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:auto;
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
    background-color: #ffff;

    margin-top: 10px;
`

export const ImgComentar = styled.img`
    height: 4vh;
    width: 2vw;
`

export const Escrita = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 26px;
    margin-bottom: 20px;
    max-width: 50vw;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

export const CaixaComentario = styled.textarea`
    width: 100%;
    height: 60px;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    margin-top: 10px;
`

export const BtnPublicar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    background-color: #ffff;
`

export const Infos = styled.div`
    display: flex;
    width: auto;
    flex-direction: column;
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

export const ImgPerfil = styled.img`
    width: 40px;
    height: 40px;
`

export const LikeButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: auto;
    height: auto;
`

export const ImgCurtida = styled.img`

`
