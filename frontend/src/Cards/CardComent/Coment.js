import { Fundo, UserProfile, DetalhesUsuario, UserName, TempoVisto, FotoPerfil, UserProfession, OpnionText, LikeButton } from "./styled"
import { Infos } from "../../Pages/Comentario/styled";
import Like from "../../components/Like/Like";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../services/Api";
import aluno from "../../Assets/aluno.png"
import professor from "../../Assets/professor.png"

function Comment(props) {
    const [user, setUser] = useState()

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
            id: props.user
        }

        axios.post(`${baseUrl}/find/findUser`, formData)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert("erro")
            });
    }, [props.user])

    return (
        <>
            {user ? (
                <Fundo>
                    <UserProfile>
                        <FotoPerfil img={user.cargo === "Estudante" ? aluno : professor} />
                        <DetalhesUsuario>
                            <Infos>
                                <UserName>{user.nome}</UserName>
                                <UserProfession>{user.cargo}</UserProfession>
                            </Infos>
                            <TempoVisto>{calcularTempo(props.criado)}</TempoVisto>
                        </DetalhesUsuario>
                    </UserProfile>
                    <OpnionText>{props.comentario}</OpnionText>
                    <LikeButton>
                        <Like comment={props.id} post={props.post} user={props.thisUser} />
                        <p>10</p>
                    </LikeButton>
                </Fundo>
            ) : (
                <></>
            )}
        </>
    )
}

export default Comment