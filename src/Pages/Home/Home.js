import LastPubliCard from "../../Cards/CardLastPubli/CardLastPubli"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { LastPubli, LastPublis, LeftContainer, LogoGrande, Main, RightContainer } from "./styled"
import LogoG from "../../Assets/LogoGrande.png"

function Home(){
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