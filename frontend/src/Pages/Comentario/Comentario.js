import Header from '../../components/Header/Header';
import fotoPerfil1 from "../../Assets/fotoPerfil1.jpg";
import botaoComentar from "../../Assets/botaoComentar.png";
import { Fundo, UserProfile, Voltar, SimboloVolt, TextoVolt, DetalhesUsuario, UserName, TempoVisto, OpnionText, CommentButton, ImgComentar, Escrita, CaixaComentario, BtnPublicar, FotoPerfil, UserProfession, Container, Main, Infos, ComentarioContainer, DivTotal } from "./styled"
import Footer from '../../components/Footer/Footer';
import Comment from '../../Cards/CardComent/Coment';
import { useNavigate } from 'react-router-dom';
import Back from "../../Assets/back.png"
import { useEffect } from "react"

function Comentario() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){
        navigate('/')
    }
}, [navigate])

  return (
    <>
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
                <FotoPerfil img={fotoPerfil1} />
                <DetalhesUsuario>
                  <Infos>
                    <UserName>Arlan Dias</UserName>
                    <UserProfession>Professor de História</UserProfession>
                  </Infos>
                  <TempoVisto>Semana passada</TempoVisto>
                </DetalhesUsuario>
              </UserProfile>

              <OpnionText>A terceirização e a precarização do trabalho são desafios que envolvem condições de trabalho menos favoráveis, salários baixos, falta de benefícios e menor segurança no emprego. É necessário garantir a proteção dos direitos trabalhistas e promover condições de trabalho justas e dignas.</OpnionText>

              <ComentarioContainer>
                <CommentButton>
                  <ImgComentar src={botaoComentar} />
                  Comentar
                </CommentButton>

                <Escrita>
                  <CaixaComentario placeholder='Digite seu comentário' />
                  <BtnPublicar>Publicar</BtnPublicar>
                </Escrita>
              </ComentarioContainer>
            </Fundo>

            <Comment />

          </Main>
          <div/>
        </DivTotal>
        <Footer />
      </Container>
    </>
  )
}

export default Comentario;