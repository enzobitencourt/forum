import { Barra, Cargo, Comments, Container, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, QuantComments, Tempo, Titulo } from "./styled"
import ImgPerfil from "../../Assets/aluno.png"

function LastPubliCard(){
    return(
        <>
        <Container>
            <Titulo>Cotas Raciais no serviço público</Titulo>
            <Barra>
                <Perfil>
                    <ImagemPerfil src={ImgPerfil}/>
                    <InfPerfil>
                        <Nome>Ariane dos Reis</Nome>
                        <Cargo>Professora de Geografia</Cargo>
                    </InfPerfil>
                </Perfil>
                <Tempo>Há 2 dias</Tempo>
            </Barra>
            <FooterCard>
                <Comments/>
                <QuantComments>10 comentários</QuantComments>
            </FooterCard>
        </Container>
        </>
    )
}

export default LastPubliCard