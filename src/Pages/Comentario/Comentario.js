
import { CommentCard, UserProfile, OpinionText, CommentButton, CommentBox, PublishButton } from './styled';

function Comentario(){
    return(
        <CommentCard>
      <UserProfile>
        <img src="/images/fotoPerfil1.jpg" alt="Profile Picture" />
        <div className="user-details">
          <div className="user-name">Arlan Dias</div>
          <div className="user-profession">Professor de História</div>
        </div>
        <div className="tempo-visualizacao">
          <div className="time">Semana passada</div>
        </div>
      </UserProfile>
      <OpinionText>
        A terceirização e a precarização do trabalho são desafios que envolvem condições de trabalho menos favoráveis, salários baixos, falta de benefícios e menor segurança no emprego. É necessário garantir a proteção dos direitos trabalhistas e promover condições de trabalho justas e dignas.
      </OpinionText>
      <CommentButton>
        <img className="comentar" src="/images/botaoComentar.png" alt="Comentar" />
        Comentar
      </CommentButton>
      <div className="escrita">
        <CommentBox placeholder="Digite seu comentário"></CommentBox>
        <PublishButton>Publicar</PublishButton>
      </div>
    </CommentCard>
    )
}

export default Comentario;