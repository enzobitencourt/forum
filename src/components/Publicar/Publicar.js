import { BtnPublicar, Conteudo, CriarPublicacao, Entradas, FooterPublicacao, FundoBody, Header, ImagemBotao, InputContent, InputTitulo, Tittle, Titulo } from "./styled";
import { ModalCloseButton } from "@chakra-ui/react";

function Publicar(){
    return(
        <>
            <FundoBody>
                <CriarPublicacao>
                    <FooterPublicacao>
                        <Header>
                            <Tittle>Publique sua matéria</Tittle>
                            <ModalCloseButton bg='none' border='none' h='5vh'/>
                        </Header>
                    </FooterPublicacao>
                    <Conteudo>
                        <Entradas>
                            <Tittle>Título</Tittle>
                            <InputTitulo placeholder="Digite aqui seu titulo"/>
                        </Entradas>
                        <Entradas>
                            <Tittle>Palavras-chave</Tittle>
                            <InputTitulo placeholder="Digite aqui suas palavras-chave"/>
                        </Entradas>
                        <Entradas>
                            <Tittle>Descrição</Tittle>
                            <InputContent placeholder="Descreva o seu assunto"/>
                        </Entradas>
                        <BtnPublicar>Publicar</BtnPublicar>
                    </Conteudo>
                </CriarPublicacao>
            </FundoBody>
        </>
    )
}

export default Publicar