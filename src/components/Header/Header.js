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

function Header() {
    const navigate = useNavigate()

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
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
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
                            <ModalHeader textAlign='center'>Você tem certeza que <br/>deseja sair do Fórum?</ModalHeader>
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
                        <Topicos>Olá, Aline</Topicos>
                        <Foto onClick={goToConfig} />
                    </Logins>
                </SecondContainer>
            </Fundo>
        </>
    )
}

export default Header