import { styled } from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    align-items: center;
    justify-content: center;
    height: 115vh;
    gap: 3vw;
    padding: 4vw 0 0 0;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 111vh;
    align-items: center;
    gap: 2vw;
`

export const LastPubli = styled.div`
    border-radius: 100px;
    width: 26vw;
    height: 5vh;
    background: #2E266D;
    font-size: 12px;
    color: white;
    display: flex;
    padding: 0.5vw 2vw;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

export const LastPublis = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    width: 30vw;
    height: 104vh;
    overflow-y: scroll;
    align-items: center;
`

export const RightContainer = styled.div`
    width: 58vw;
    height: 111vh;
    display: flex;
    justify-content: center;
`

export const LogoGrande = styled.img`
    width: 100%;
    height: 100%;
`