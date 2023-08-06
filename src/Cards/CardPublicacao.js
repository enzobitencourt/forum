import { Barra, Cargo, Comments, Container, Descricao, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, QuantComments, Tempo, Titulo } from "./styled"
import ImgPerfil from "../Assets/perfilAriane.jpg"

function Publicacao(){
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
            <Descricao>
            Cotas raciais no mundo do trabalho visam promover a inclusão de grupos marginalizados, 
            mas enfrentam críticas por privilegiar determinados grupos em detrimento de outros. 
            Defensores destacam sua importância como medida temporária para reparar desigualdades
            históricas e promover a representatividade.
            </Descricao>
            <FooterCard>
                <Comments/>
                <QuantComments>10 comentários</QuantComments>
            </FooterCard>
        </Container>
        </>
    )
}

export default Publicacao