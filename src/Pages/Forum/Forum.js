import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { AdicionarPubli, Baixo, Cima, Direita, Divisao, Divisao2, Esquerda, FiltroContainer, Filtros, FiltrosEscolhidos, Input, InputContainer, MainContainer, RespostaFiltros, SimboloVolt, Subtitulo, TemaDisc, TextoVolt, Titulo, TituloFiltro, TituloPrincipal, Voltar } from "./styled"
import Back from "../../Assets/back.png"
import Filtro from "../../components/Filtro/Filtro"
import FiltroArea from "../../components/FiltroArea/FiltroArea"
import { SearchIcon } from "@chakra-ui/icons"
import Publicacao from "../../Cards/CardPublicacao/CardPublicacao"
import FooterResultados from "../../components/FooterResultados/FooterResultados"
import Publicar from "../../components/Publicar/Publicar"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"


function Forum() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    const goBack = () =>{
        navigate(-1)
    }

    const goToPublic=()=>{
        navigate('/publicacao')
    }

    return (
        <>
            <Header />
            <MainContainer>
                <Cima>
                    <Esquerda>
                        <Voltar onClick={goBack}>
                            <SimboloVolt src={Back} />
                            <TextoVolt>Voltar</TextoVolt>
                        </Voltar>
                    </Esquerda>
                    <Direita>
                        <TituloPrincipal>Fórum - Marginalização do Trabalho</TituloPrincipal>
                    </Direita>
                </Cima>
                <Baixo>
                    <Esquerda>
                        <FiltroContainer>
                            <AdicionarPubli onClick={onOpen}>Adicionar Publicação</AdicionarPubli>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent bg='none'>
                                    <Publicar/>
                                </ModalContent>
                            </Modal>
                            <Filtros>
                                <Titulo>Filtros</Titulo>
                                <Filtro />
                                <Divisao />
                                <FiltroArea />
                            </Filtros>
                        </FiltroContainer>
                    </Esquerda>
                    <Direita>
                        <Subtitulo>Discussão</Subtitulo>
                        <TemaDisc>Introdução e posicionamento de trabalhadores pertencentes a classes sociais marginalizadas no mundo do trabalho</TemaDisc>
                        <InputContainer>
                            <SearchIcon />
                            <Input type='text' placeholder="Pesquise por título" id='titulo' name='titulo' />
                        </InputContainer>
                        <FiltrosEscolhidos>
                            <TituloFiltro>Filtro de palavra-chave:</TituloFiltro>
                            <RespostaFiltros>Teste</RespostaFiltros>
                        </FiltrosEscolhidos>
                        <Publicacao ir={goToPublic}/>
                        <Publicacao />
                        <Publicacao />
                        <Publicacao />
                        <Divisao2 />
                        <FooterResultados />
                    </Direita>
                </Baixo>
            </MainContainer>
            <Footer />
        </>
    )
}

export default Forum