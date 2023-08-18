import { FirstContainer, Foto, Fundo, Logins, Logo, SecondContainer, Topicos } from "./styled"
import LogoImg from "../../Assets/logoforum.png"
import { useNavigate } from "react-router-dom"

function Header(){
    const navigate = useNavigate()

    const goToHome = () =>{
        navigate('/home')
    }

    const goToForum = () =>{
        navigate('/forum')
    }

    const goToConfig = () =>{
        navigate('/config')
    }

    const goToLogin = () =>{
        navigate('/login')
    }
    return(
        <>
        <Fundo>
           <FirstContainer>
            <Logo src={LogoImg}/>
            <Topicos onClick={goToHome}>Home</Topicos>
            <Topicos onClick={goToForum}>Fórum</Topicos>
            <Topicos onClick={goToConfig}>Configuração</Topicos>
            <Topicos onClick={goToLogin}>Sair</Topicos>
            </FirstContainer> 
            <SecondContainer>
                <Logins>
                    <Topicos>Olá, Aline</Topicos>
                    <Foto onClick={goToConfig}/>
                </Logins>
            </SecondContainer>
        </Fundo>
        </>
    )
}

export default Header