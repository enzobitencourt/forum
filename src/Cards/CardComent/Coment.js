import { Fundo, UserProfile, DetalhesUsuario, UserName, TempoVisto, FotoPerfil, UserProfession, OpnionText, LikeButton } from "./styled"
import fotoPerfil3 from "../../Assets/fotoPerfil3.jpg";
import { Infos } from "../../Pages/Comentario/styled";
import Like from "../../components/Like/Like";

function Comment() {
    return (
        <>
            <Fundo>
                <UserProfile>
                    <FotoPerfil img={fotoPerfil3} />
                    <DetalhesUsuario>
                        <Infos>
                            <UserName>Arlan Dias</UserName>
                            <UserProfession>Professor de História</UserProfession>
                        </Infos>
                        <TempoVisto>Semana passada</TempoVisto>
                    </DetalhesUsuario>
                </UserProfile>
                <OpnionText>Concordo mas discordo.</OpnionText>
                <LikeButton>
                    <Like/>
                    <p>10</p>
                </LikeButton>
            </Fundo>
        </>
    )
}

export default Comment