import { useState } from "react";
import { BtnPublicar, Conteudo, CriarPublicacao, Entradas, FooterPublicacao, Header, InputContent, InputTitulo, Tittle } from "./styled";
import { ModalCloseButton, useToast } from "@chakra-ui/react";
import axios from "axios";
import { baseUrl } from "../../services/Api";

function Publicar(props) {
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()
    const id = localStorage.getItem("user")
    const toast = useToast()

    const handleClick = () => {
        const formData = {
            titulo: titulo,
            descricao: descricao,
            idUser: id
        }

        axios.post(`${baseUrl}/posts/create`, formData)
            .then(function (response) {
                toast({
                    position: 'bottom-left',
                    title: 'Sucesso',
                    description: "Post criado",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                props.fechar()
            })
            .catch(function (error) {
                toast({
                    position: 'bottom-left',
                    title: 'Erro',
                    description: "Não foi possível criar o post",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            });
    }

    return (
        <>
            <CriarPublicacao>
                <FooterPublicacao>
                    <Header>
                        <Tittle>Publique sua matéria</Tittle>
                        <ModalCloseButton bg='none' w="3vw" h='3vw' marginTop="1vh" display='flex' border='none' />
                    </Header>
                </FooterPublicacao>
                <Conteudo>
                    <Entradas>
                        <Tittle>Título</Tittle>
                        <InputTitulo value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Digite aqui seu titulo" />
                    </Entradas>
                    <Entradas>
                        <Tittle>Descrição</Tittle>
                        <InputContent value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descreva o seu assunto" />
                    </Entradas>
                    <BtnPublicar onClick={handleClick}>Publicar</BtnPublicar>
                </Conteudo>
            </CriarPublicacao>
        </>
    )
}

export default Publicar