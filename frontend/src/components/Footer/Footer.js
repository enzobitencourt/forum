import { Creditos, Direita, Esquerda, FooterContainer, Logo, Texto, Texto1, Titulo, Titulo1 } from "./styled"
import LogoImg from "../../Assets/logoforum.png"

function Footer() {
    return (
        <>
            <FooterContainer>
                <Esquerda>
                    <Logo src={LogoImg} />
                    <Texto>Fórum desenvolvido para o Ensino Médio Senac São Leopoldo, a fim de aprimorar as habilidades técnicas e científicas.</Texto>
                    <Titulo>São Leopoldo, 2023</Titulo>
                </Esquerda>
                <Direita>
                    <Creditos>
                        <Titulo1>Integrantes</Titulo1>
                        <Texto1>Enzo Bitencourt</Texto1>
                        <Texto1>João Fetzer</Texto1>
                        <Texto1>Otávio Dantas</Texto1>
                        <Texto1>Thiago Scherer</Texto1>
                    </Creditos>
                    <Creditos>
                        <Titulo1>Orientadores</Titulo1>
                        <Texto1>Guilherme Golschmitt</Texto1>
                        <Texto1>Paula Rabelo</Texto1>
                        <Texto1>Andrei Vupt</Texto1>
                        <Texto1>Morgana de Moraes</Texto1>
                    </Creditos>
                    <Creditos>
                        <Titulo1>Linguagens</Titulo1>
                        <Texto1>React</Texto1>
                        <Texto1>JavaScript</Texto1>
                        <Texto1>CSS</Texto1>
                        <Texto1>SQL</Texto1>
                    </Creditos>
                </Direita>
            </FooterContainer>
        </>
    )
}

export default Footer