import Header from "../../components/Header/Header";
import { Main, Baner, BannerImg, InfosLabel, LogoPerfil, Fundo, Topicos, Name, Forms, FormCustom, CustomInput, DisplayButton, CancelButton, SaveButton, Divisor, Entrada, FormCustom1, Divisor1, Select } from "./styled"
import Banner from "../../Assets/banner.png";
import Footer from "../../components/Footer/Footer"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/Api";
import aluno from "../../Assets/aluno.png"
import professor from "../../Assets/professor.png"

function Config() {
    const navigate = useNavigate()
    const id = localStorage.getItem("user")
    const formData = {
        id: id
    }
    const [user, setUser] = useState()
    const [nome, setNome] = useState()
    const [cargo, setCargo] = useState()
    const [tel, setTel] = useState()
    const [confirmSenha, setConfirmSenha] = useState()
    const [senha, setSenha] = useState()


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        axios.post(`${baseUrl}/find/findUser`, formData)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });
    })

    const handleAlter = () => {
        if (senha !== confirmSenha) {
            alert("Novas senhas não coincidem")
        } else {
            const formData = {};

            if (nome) {
                formData.nome = nome;
            }
            if (cargo) {
                formData.cargo = cargo;
            }
            if (tel) {
                formData.telefone = tel;
            }
            if (senha) {
                formData.senha = senha;
            }

            axios.put(`${baseUrl}/user/${id}`, formData)
                .then(function (response) {
                    alert("Informações alteradas")
                })
                .catch(function (error) {
                    console.log(error.data.message)
                });

            setNome('')
            setCargo('')
            setTel('')
            setSenha('')
            setConfirmSenha('')
        }
    }


    const handleCancel = () => {
        setNome('')
        setCargo('')
        setTel('')
        setSenha('')
        setConfirmSenha('')
    }

    return (
        <>
            {user ? (
                <>
                    <Header />
                    <Main>
                        <Baner>
                            <BannerImg src={Banner} />
                            <LogoPerfil src={user.cargo === "Estudante" ? aluno : professor} />
                            <Name>{user.nome}</Name>
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
                                                            <CustomInput value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder={user.nome} />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Cargo</InfosLabel>
                                                            <Select
                                                                id="cargo"
                                                                name="cargo"
                                                                value={cargo}
                                                                onChange={(e) => setCargo(e.target.value)}
                                                            >
                                                                <option value="">Selecione um cargo</option>
                                                                <option value="Professor">Professor</option>
                                                                <option value="Estudante">Estudante</option>
                                                            </Select>
                                                        </Entrada>
                                                    </Divisor>
                                                    <Divisor>
                                                        <Entrada>
                                                            <InfosLabel>Telefone</InfosLabel>
                                                            <CustomInput value={tel} type="tel" placeholder={user.telefone} onChange={(e) => setTel(e.target.value)} />
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
                                                            <InfosLabel>Senha nova</InfosLabel>
                                                            <CustomInput value={senha} type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha nova" />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Repetir senha nova</InfosLabel>
                                                            <CustomInput value={confirmSenha} type="password" onChange={(e) => setConfirmSenha(e.target.value)} placeholder="Repetir sua senha nova" />
                                                        </Entrada>
                                                    </Divisor1>
                                                </FormCustom1>
                                            </Forms>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Topicos>
                            <DisplayButton>
                                <CancelButton onClick={handleCancel} class="submit" id="submit" >Cancelar</CancelButton>
                                <SaveButton onClick={handleAlter} class="submit" id="submit" type="submit">Salvar</SaveButton>
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
