import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { baseUrl } from "../../services/Api";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });

    const goToCadastro = () => {
        navigate('/cadastro');
    }

    const goToHome = () =>{
        navigate('/home')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                console.log(response)
                localStorage.setItem('user', response.data.data[0].id)
                localStorage.setItem('token', response.data.data[0].token)
                alert(response.data.message)
                goToHome()
            })
            .catch(function (error) {
                alert(error.response.data.msg)
            });

        setFormData({
            email: "",
            senha: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
                                <LogoImg src={Logo} />
                                <StyleForm onSubmit={handleSubmit}>
                                    <InputBox>
                                        <Label for="email">Email</Label>
                                        <Input
                                            name='email'
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Digite seu email"
                                            required
                                        />
                                    </InputBox>

                                    <InputBox>
                                        <Label for="password">Senha</Label>
                                        <Input
                                            name='senha'
                                            type="password"
                                            value={formData.senha}
                                            onChange={handleChange}
                                            placeholder="Digite sua senha"
                                            required
                                        />
                                    </InputBox>

                                    <Botao type="submit">Entrar</Botao>
                                    <Register onClick={goToCadastro}>Registrar</Register>
                                </StyleForm>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm>
            </Container>
        </>
    );
}

export default Login;
