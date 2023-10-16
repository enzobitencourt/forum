import { BtnPublicar, Conteudo, CriarPublicacao, Entradas, FooterPublicacao, Header, InputContent, InputTitulo, Tittle } from "./styled";
import { ModalCloseButton } from "@chakra-ui/react";

function Publicar() {
    return (
        <>
            <CriarPublicacao>
                <FooterPublicacao>
                    <Header>
                        <Tittle>Publique sua matéria</Tittle>
                        <ModalCloseButton bg='none' w="3vw" h='3vw' marginTop="1vh" display='flex' border='none'/>
                    </Header>
                </FooterPublicacao>
                <Conteudo>
                    <Entradas>
                        <Tittle>Título</Tittle>
                        <InputTitulo placeholder="Digite aqui seu titulo" />
                    </Entradas>
                    <Entradas>
                        <Tittle>Palavras-chave</Tittle>
                        <InputTitulo placeholder="Digite aqui suas palavras-chave" />
                    </Entradas>
                    <Entradas>
                        <Tittle>Descrição</Tittle>
                        <InputContent placeholder="Descreva o seu assunto" />
                    </Entradas>
                    <BtnPublicar>Publicar</BtnPublicar>
                </Conteudo>
            </CriarPublicacao>
        </>
    )
}

export default Publicar