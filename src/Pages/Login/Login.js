import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useForm } from "../../Hooks/useForm"

function Login() {
    const navigate = useNavigate()

    const goToCadastro = () => {
        navigate('/cadastro')
    }

    const saveUserInfoLocalStorage =(token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const [form, onChangeForm] = useForm({nome: '', password:''})
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
                                        <Input 
                                            name='nome'
                                            value={form.nome}
                                            type="text"
                                            placeholder="Digite seu email"
                                            onChange={onChangeForm}
                                            required />
                                    </InputBox>

                                    <InputBox>
                                        <Label for="firstname">Senha</Label>
                                        <Input 
                                            name='password'
                                            value={form.password}
                                            type="password"
                                            placeholder="Digite sua senha"
                                            onChange={onChangeForm}
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