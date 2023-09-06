import LastPubliCard from "../../Cards/CardLastPubli/CardLastPubli"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { LastPubli, LastPublis, LeftContainer, LogoGrande, Main, RightContainer } from "./styled"
import LogoG from "../../Assets/LogoGrande.png"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])

    return(
        <>
        <Header/>
        <Main>
            <LeftContainer>
                <LastPubli>Últimas Publicações</LastPubli>
                <LastPublis>
                    <LastPubliCard/>
                    <LastPubliCard/>
                    <LastPubliCard/>
                    <LastPubliCard/>
                    <LastPubliCard/>
                    <LastPubliCard/>
                    <LastPubliCard/>
                </LastPublis>
            </LeftContainer>
            <RightContainer>
                <LogoGrande src={LogoG}/>
            </RightContainer>
        </Main>
        <Footer/>
        </>
    )
}

export default Home