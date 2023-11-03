import Header from '../../components/Header/Header';
import botaoComentar from "../../Assets/botaoComentar.png";
import { Fundo, UserProfile, Voltar, SimboloVolt, TextoVolt, DetalhesUsuario, UserName, TempoVisto, OpnionText, CommentButton, ImgComentar, Escrita, CaixaComentario, BtnPublicar, FotoPerfil, UserProfession, Container, Main, Infos, ComentarioContainer, DivTotal, Titulo } from "./styled"
import Footer from '../../components/Footer/Footer';
import Comment from '../../Cards/CardComent/Coment';
import { useNavigate, useParams } from 'react-router-dom';
import Back from "../../Assets/back.png"
import { useEffect, useState } from "react"
import { baseUrl } from '../../services/Api';
import aluno from "../../Assets/aluno.png"
import professor from "../../Assets/professor.png"
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

function Comentario() {
  const navigate = useNavigate()
  const toast = useToast()
  const params = useParams()
  const [post, setPost] = useState()
  const postId = params.id
  const idUser = localStorage.getItem("user")
  const [user, setUser] = useState()
  const [comentarios, setComentarios] = useState()
  const [comentario, setComentario] = useState()

  const goBack = () => {
    navigate(-1)
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
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  }, [navigate])

  useEffect(() => {
    const formData = {
      id: postId
    }

    axios.post(`${baseUrl}/posts/find`, formData)
      .then(function (response) {
        setPost(response.data.data)
        const formData2 = {
          id: response.data.data.user
        }

        axios.post(`${baseUrl}/find/findUser`, formData2)
          .then(function (response) {
            setUser(response.data.data)
          })
          .catch(function (error) {
            alert("erro")
          });
      })
      .catch(function (error) {
        alert(error.response.data.msg)
      });
  }, [postId])

  const newComment = () => {
    const formData = {
      descricao: comentario,
      idUser: idUser,
      idPost: postId,
    }

    axios.post(`${baseUrl}/comments/create`, formData)
      .then(function (response) {
        toast({
          position: 'bottom-left',
          title: 'Sucesso',
          description: "Comentário criado",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setComentario('')
      })
      .catch(function (error) {
        toast({
          position: 'bottom-left',
          title: 'Erro',
          description: "Erro ao criar comentário",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      });
  }

  useEffect(() => {
    axios.get(`${baseUrl}/comments/comments/${postId}`)
      .then(function (response) {
        setComentarios(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      });
  })

  return (
    <>
      {post && user ? (
        <Container>
          <Header />
          <DivTotal>
            <Voltar onClick={goBack}>
              <SimboloVolt src={Back} />
              <TextoVolt>Voltar</TextoVolt>
            </Voltar>
            <Main>
              <Fundo>
                <UserProfile>
                  <FotoPerfil img={user.cargo === "Estudante" ? aluno : professor} />
                  <DetalhesUsuario>
                    <Infos>
                      <UserName>{user ? user.nome : ""}</UserName>
                      <UserProfession>{user ? user.cargo : ""}</UserProfession>
                    </Infos>
                    <TempoVisto>{calcularTempo(post.criado)}</TempoVisto>
                  </DetalhesUsuario>
                </UserProfile>

                <Titulo>{post.titulo}</Titulo>
                <OpnionText>{post.descricao}</OpnionText>

                <ComentarioContainer>
                  <CommentButton>
                    <ImgComentar src={botaoComentar} />
                    Comentar
                  </CommentButton>

                  <Escrita>
                    <CaixaComentario onChange={(e) => setComentario(e.target.value)} value={comentario} placeholder='Digite seu comentário' />
                    <BtnPublicar onClick={newComment}>Publicar</BtnPublicar>
                  </Escrita>
                </ComentarioContainer>
              </Fundo>
              {comentarios ? (
                <>
                  {comentarios.map((comentario, index) => (
                    <Comment key={index}
                      criado={comentario.created_at}
                      comentario={comentario.descricao}
                      user={comentario.user_id}
                      id={comentario.id}
                      post={postId}
                      thisUser={idUser}
                    />
                  ))}
                </>
              ) : (
                <></>
              )}
            </Main>
            <div />
          </DivTotal>
          <Footer />
        </Container>
      ) : (
        <></>
      )}
    </>
  )
}

export default Comentario;