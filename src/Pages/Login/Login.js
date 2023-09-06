import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Login() {
    const navigate = useNavigate()

    const goToCadastro = () => {
        navigate('/cadastro')
    }

    const saveUserInfoLocalStorage =(token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const credentials = { email, password }

        axios.post('http://localhost:8000/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                saveUserInfoLocalStorage(response.data.token)
                navigate('/home')
            })
            .catch(error => console.log('error'))
    }

    return (
        <>
            <Container>
                <ContainerForm  >
                    <Form>
                        <Divi>
                            <FormImage>
                                <Image src={ImagemLogin} />
                            </FormImage>
                            <ContainerFormulario>
                                <LogoImg src={Logo}/>
                                <StyleForm onSubmit={handleSubmit}>
                                    <InputBox>
                                        <Label for="firstname">Email</Label>
                                        <Input value={email}
                                            type="email"
                                            placeholder="Digite seu email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </InputBox>

                                    <InputBox>
                                        <Label for="firstname">Senha</Label>
                                        <Input value={password}
                                            type="password"
                                            placeholder="Digite sua senha"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </InputBox>

                                    <Botao type="submit">Entrar</Botao>
                                    <Register onClick={goToCadastro}>Registrar</Register>
                                </StyleForm>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Login