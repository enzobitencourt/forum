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
    async function isFavorite() {
      try {
        const formData2 = {
          user: parseInt(props.user),
          comentario: parseInt(props.comment)
        };

        await axios.post(`${baseUrl}/reactions/find`, formData2);

        return true; 
      } catch (error) {
        return false; 
      }
    }

    async function fetchData() {
      const result = await isFavorite();
      setLiked(result);
    }

    fetchData();
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
      {liked === true ? <Img src={like} /> : <Img src={dislike} />}
    </Botao>
  );
}

export default Like