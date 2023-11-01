import { useState } from "react";
import { BtnPublicar, Conteudo, CriarPublicacao, Entradas, FooterPublicacao, Header, InputContent, InputTitulo, Tittle } from "./styled";
import { ModalCloseButton } from "@chakra-ui/react";
import axios from "axios";
import { baseUrl } from "../../services/Api";

function Publicar(props) {
    const [titulo, setTitulo] = useState()
    const [keywords, setKeywords] = useState()
    const [descricao, setDescricao] = useState()
    const id = localStorage.getItem("user")

    const handleClick = () => {
        const formData = {
            titulo: titulo,
            keywords: keywords,
            descricao: descricao,
            idUser: id
        }

        axios.post(`${baseUrl}/posts/create`, formData)
            .then(function (response) {
                console.log(response)
                alert("Post Criado")
            })
            .catch(function (error) {
                console.log(error)
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
                        <Tittle>Palavras-chave</Tittle>
                        <InputTitulo value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Digite aqui suas palavras-chave" />
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