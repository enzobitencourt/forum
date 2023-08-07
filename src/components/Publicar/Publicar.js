import { Subtitulo } from "../../Pages/Forum/styled";
import { BtnPublicar, CriarPublicacao, FooterPublicacao, FundoBody, ImagemBotao, InputContent, InputTitulo, Titulo } from "./styled";
import Xsair from "../../Assets/Xsair.png"

function Publicar(){
    return(
        <>
            <FundoBody>
                <CriarPublicacao>
                    <FooterPublicacao>
                        <Subtitulo>Publique sua matéria</Subtitulo>
                        <ImagemBotao src={Xsair}></ImagemBotao>
                    </FooterPublicacao>

                    <Titulo>Título</Titulo>
                    <InputTitulo placeholder="Digite aqui seu titulo"/>
                    <Titulo>Palavras-chave</Titulo>
                    <InputTitulo placeholder="Digite aqui suas palavras-chave"/>
                    <Titulo>Matéria</Titulo>
                    <InputContent placeholder="Descreva o seu assunto"/>
                    <BtnPublicar>Publicar</BtnPublicar>
                </CriarPublicacao>
            </FundoBody>
        </>
    )
}

export default Publicar