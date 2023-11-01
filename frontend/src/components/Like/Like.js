import { useState } from 'react';
import like from "../../Assets/botaoCurtida.png"
import dislike from "../../Assets/dislike.png"
import { Botao, Img } from './styled';
import axios from 'axios';
import { baseUrl } from '../../services/Api';
import { useEffect } from 'react';

function Like(props) {
  const [liked, setLiked] = useState();

  useEffect(() => {
    function isFavorite() {
      const formData2 = {
        user: parseInt(props.user),
        comentario: parseInt(props.comment)
      }

      console.log(formData2)

      axios.post(`${baseUrl}/reactions/find`, formData2)
        .then(function (response) {
          return true
        })
        .catch(function (error) {
          return false
        });
    }

    setLiked(isFavorite());
  }, [props.comment, props.user, setLiked]);

  function handleClick() {
    const formData = {
      user: props.user,
      post: props.post,
      comentario: props.comment
    }

    if (!liked) {
      axios.post(`${baseUrl}/reactions/create`, formData)
        .catch(function (error) {
          alert("error")
        });
    } else {
      axios.post(`${baseUrl}/reactions/delete`, formData)
        .catch(function (error) {
          alert("error")
        });
    }
    setLiked(!liked);
  }

  return (
    <Botao
      className={`botao-like ${liked ? 'liked' : ''}`}
      onClick={handleClick}
    >
      {liked ? <Img src={like} /> : <Img src={dislike} />}
    </Botao>
  );
}

export default Like