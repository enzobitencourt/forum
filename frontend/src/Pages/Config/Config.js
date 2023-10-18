import Header from "../../components/Header/Header";
import { Main, Baner, BannerImg, InfosLabel, LogoPerfil, Fundo, Topicos, Name, Forms, FormCustom, CustomInput, DisplayButton, CancelButton, SaveButton, Divisor, Entrada, FormCustom1, Divisor1 } from "./styled"
import Banner from "../../Assets/banner.png";
import Perfil from "../../Assets/perfil.png";
import Footer from "../../components/Footer/Footer"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/Api";

function Config() {
    const navigate = useNavigate()
    const id = localStorage.getItem("user")
    const formData = {
        id: id
    }
    const [user, setUser] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        axios.post(`${baseUrl}/find/findUser`, formData)
            .then(function (response) {
                console.log(response)
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });
    })

    return (
        <>
            {user ? (
                <>
                    <Header />
                    <Main>
                        <Baner>
                            <BannerImg src={Banner} />
                            <LogoPerfil src={Perfil} />
                            <Name>{user.nome} {user.sobrenome}</Name>
                        </Baner>
                        <Fundo>
                            <Topicos>
                                <Tabs>
                                    <TabList>
                                        <Tab>Perfil</Tab>
                                        <Tab>Senha</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Forms>
                                                <FormCustom>
                                                    <Divisor>
                                                        <Entrada>
                                                            <InfosLabel>Nome</InfosLabel>
                                                            <CustomInput type="text" placeholder="Nome de Usuário" />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Sobrenome</InfosLabel>
                                                            <CustomInput type="text" placeholder="Nome Completo" />
                                                        </Entrada>
                                                    </Divisor>
                                                    <Divisor>
                                                        <Entrada>
                                                            <InfosLabel>Email</InfosLabel>
                                                            <CustomInput type="email" placeholder="Email" />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Ocupação</InfosLabel>
                                                            <CustomInput type="text" placeholder="Ocupação" />
                                                        </Entrada>
                                                    </Divisor>
                                                </FormCustom>
                                            </Forms>
                                        </TabPanel>
                                        <TabPanel>
                                            <Forms>
                                                <FormCustom1>
                                                    <Divisor1>
                                                        <Entrada>
                                                            <InfosLabel>Senha atual</InfosLabel>
                                                            <CustomInput type="text" placeholder="Nome" />
                                                        </Entrada>
                                                    </Divisor1>
                                                    <Divisor1>
                                                        <Entrada>
                                                            <InfosLabel>Senha nova</InfosLabel>
                                                            <CustomInput type="password" placeholder="Senha nova" />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Repetir senha nova</InfosLabel>
                                                            <CustomInput type="password" placeholder="Repetir sua senha nova" />
                                                        </Entrada>
                                                    </Divisor1>
                                                </FormCustom1>
                                            </Forms>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Topicos>
                            <DisplayButton>
                                <CancelButton class="submit" id="submit" >Cancelar</CancelButton>
                                <SaveButton class="submit" id="submit" type="submit">Salvar</SaveButton>
                            </DisplayButton>
                        </Fundo>
                    </Main >

                    <Footer />
                </>
            ) : (
                <></>
            )}

        </>
    )
}

export default Config;
