import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { AdicionarPubli, Baixo, Cima, Container, Direita, Divisao, Divisao2, Esquerda, FiltroContainer, Filtros, FiltrosEscolhidos, Input, InputContainer, MainContainer, RespostaFiltros, SimboloVolt, Subtitulo, TemaDisc, TextoVolt, Titulo, TituloFiltro, TituloPrincipal, Voltar } from "./styled"
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
import { useEffect, useState } from "react"
import { baseUrl } from "../../services/Api"
import axios from "axios"

function Forum() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    const [nome, setNome] = useState()
    const [filteredPosts, setFilteredPosts] = useState([])

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        axios.get(`${baseUrl}/posts/posts`)
            .then(function (response) {
                setPosts(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
                alert("Erro ao buscar posts")
            });
    })

    const [checkedToppingsFiltro, setCheckedToppingsFiltro] = useState([]);
    const [checkedToppingsFiltroArea, setCheckedToppingsFiltroArea] = useState([]);

    useEffect(() => {
        if (posts && nome) {
            const lowercaseNome = nome.toLowerCase();
            setFilteredPosts(posts.filter(post => post.titulo.toLowerCase().includes(lowercaseNome)));
        } else {
            setFilteredPosts(posts);
        }
    }, [nome, posts]);


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
                                    <Publicar fechar={onClose} />
                                </ModalContent>
                            </Modal>
                            <Filtros>
                                <Titulo>Filtros</Titulo>
                                <Filtro
                                    onCheckedToppingsChange={(toppings) => setCheckedToppingsFiltro(toppings)}
                                />
                                <Divisao />
                                <FiltroArea
                                    onCheckedToppingsChange={(toppings) => setCheckedToppingsFiltroArea(toppings)}
                                />
                            </Filtros>
                        </FiltroContainer>
                    </Esquerda>
                    <Direita>
                        <Subtitulo>Discussão</Subtitulo>
                        <TemaDisc>Mundo do  trabalho - Desafios do Século XXI</TemaDisc>
                        <InputContainer>
                            <SearchIcon />
                            <Input value={nome} onChange={(e) => setNome(e.target.value)} type='text' placeholder="Pesquise por título" id='titulo' name='titulo' />
                        </InputContainer>
                        <FiltrosEscolhidos>
                            <TituloFiltro>Filtro de palavra-chave:</TituloFiltro>
                            <RespostaFiltros>
                                {checkedToppingsFiltro.concat(checkedToppingsFiltroArea).join(", ")}
                            </RespostaFiltros>
                        </FiltrosEscolhidos>
                        {filteredPosts ? (
                            <>
                                {filteredPosts.map((post, index) => (
                                    <Publicacao id={post.id}
                                        key={index}
                                        titulo={post.titulo}
                                        usuario={post.user_id}
                                        descricao={post.descricao}
                                        criado={post.created_at}
                                    />
                                ))}
                            </>
                        ) : (
                            <Container>
                                <p>Nenhum post encontrado</p>
                            </Container>
                        )}
                        <Divisao2 />
                        <FooterResultados />
                    </Direita>
                </Baixo>
            </MainContainer>
            <Footer />
        </>
    );
}

export default Forum