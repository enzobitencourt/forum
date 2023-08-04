import { FirstContainer, Foto, Fundo, Logins, Logo, Pesquisa, SecondContainer, Topicos } from "./styled"
import LogoImg from "../../Assets/logoforum.png"

function Header(){
    return(
        <>
        <Fundo>
           <FirstContainer>
            <Logo src={LogoImg}/>
            <Topicos>Home</Topicos>
            <Topicos>Fórum</Topicos>
            <Topicos>Configuração</Topicos>
            <Topicos>Sair</Topicos>
            </FirstContainer> 
            <SecondContainer>
                <Logins>
                    <Pesquisa/>
                    <Topicos>Olá, Aline</Topicos>
                    <Foto/>
                </Logins>
            </SecondContainer>
        </Fundo>
        </>
    )
}

export default Header