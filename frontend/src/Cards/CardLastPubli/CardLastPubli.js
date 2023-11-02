import { Barra, Cargo, Comments, Container, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, QuantComments, Tempo, Titulo } from "./styled"
import aluno from "../../Assets/aluno.png"
import professor from "../../Assets/professor.png"
import axios from "axios";
import { baseUrl } from "../../services/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LastPubliCard(props) {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const id = props.usuario
    const [comentarios, setComentarios] = useState([])

    const navegar = () => {
        navigate(`publicacao/${props.id}`)
    }

    function calcularTempo(dataCriacao) {
        const dataAtual = new Date();
        const diferencaEmMilissegundos = dataAtual - new Date(dataCriacao);
        const segundos = Math.floor(diferencaEmMilissegundos / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);

        if (dias > 0) {
            return `${dias} dias atrás`;
        } else if (horas > 0) {
            return `${horas} horas atrás`;
        } else if (minutos > 0) {
            return `${minutos} minutos atrás`;
        } else {
            return `${segundos} segundos atrás`;
        }
    }

    useEffect(() => {
        const formData = {
            id: id
        }

        axios.post(`${baseUrl}/find/findUser`, formData)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert("erro")
            });
    }, [id])

    useEffect(() => {
        axios.get(`${baseUrl}/comments/comments/${props.id}`)
            .then(function (response) {
                setComentarios(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            });
    })

    return (
        <>
            {user && comentarios ? (
                <Container onClick={navegar}>
                    <Titulo>{props.titulo}</Titulo>
                    <Barra>
                        <Perfil>
                            <ImagemPerfil src={user.cargo === "Estudante" ? aluno : professor} />
                            <InfPerfil>
                                <Nome>{user.nome}</Nome>
                                <Cargo>{user.cargo}</Cargo>
                            </InfPerfil>
                        </Perfil>
                        <Tempo>{calcularTempo(props.criado)}</Tempo>
                    </Barra>
                    <FooterCard>
                        <Comments />
                        <QuantComments>{comentarios.length} comentários</QuantComments>
                    </FooterCard>
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default LastPubliCard