import LastPubliCard from "../../Cards/CardLastPubli/CardLastPubli"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { LastPubli, LastPublis, LeftContainer, LogoGrande, Main, RightContainer } from "./styled"
import LogoG from "../../Assets/LogoGrande.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../../services/Api"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        axios.get(`${baseUrl}/posts/posts`)
            .then(function (response) {
                const sortedPosts = response.data.data.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA;
                });

                setPosts(sortedPosts);
            })
            .catch(function (error) {
                console.log(error);
                alert("erro");
            });
    }, []);


    return (
        <>
            <Header />
            <Main>
                <LeftContainer>
                    <LastPubli>Últimas Publicações</LastPubli>
                    <LastPublis>
                        {posts ? (
                            <>
                                {posts.slice(0, 5).map((post, index) => (
                                    <LastPubliCard id={post.id}
                                        key={index}
                                        titulo={post.titulo}
                                        usuario={post.user_id}
                                        descricao={post.descricao}
                                        criado={post.created_at}
                                    />
                                ))}

                            </>
                        ) : (
                            <></>
                        )}
                    </LastPublis>
                </LeftContainer>
                <RightContainer>
                    <LogoGrande src={LogoG} />
                </RightContainer>
            </Main>
            <Footer />
        </>
    )
}

export default Home