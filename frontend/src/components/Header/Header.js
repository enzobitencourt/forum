import { FirstContainer, Foto, Fundo, Logins, Logo, SecondContainer, Topicos } from "./styled"
import LogoImg from "../../Assets/logoforum.png"
import { useNavigate } from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../../services/Api"
import aluno from "../../Assets/aluno.png"
import professor from "../../Assets/professor.png"

function Header() {
    const navigate = useNavigate()
    const id = localStorage.getItem("user")
    const formData = {
        id: id
    }
    const [user, setUser] = useState()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const goToHome = () => {
        navigate('/home')
    }

    const goToForum = () => {
        navigate('/forum')
    }

    const goToConfig = () => {
        navigate('/config')
    }

    const handleLogout = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        axios.post(`${baseUrl}/find/findUser`, formData)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });
    })

    return (
        <>
            {user ? (
                <Fundo>
                    <FirstContainer>
                        <Logo src={LogoImg} />
                        <Topicos onClick={goToHome}>Home</Topicos>
                        <Topicos onClick={goToForum}>Fórum</Topicos>
                        <Topicos onClick={goToConfig}>Configuração</Topicos>
                        <Topicos onClick={onOpen}>Sair</Topicos>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent padding='2vh' justifyContent='space-between' h='auto' alignSelf='center'>
                                <ModalHeader textAlign='center'>Você tem certeza que <br />deseja sair do Fórum?</ModalHeader>
                                <ModalFooter justifyContent='center' display='flex'>
                                    <Button bg='#2E266D' color='white' mr={3} onClick={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button onClick={handleLogout} border='1px solid #2E266D' variant='ghost'>Sair</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </FirstContainer>
                    <SecondContainer>
                        <Logins>
                            <Topicos>Olá, {user.nome}</Topicos>
                            <Foto img={user.cargo === "Estudante" ? aluno : professor} onClick={goToConfig} />
                        </Logins>
                    </SecondContainer>
                </Fundo>
            ) : (
                <></>
            )}

        </>
    )
}

export default Header