import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    const goToCadastro = () => {
        navigate('/cadastro');
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
                                <StyleForm>
                                    <InputBox>
                                        <Label for="firstname">Email</Label>
                                        <Input
                                            name='nome'
                                            type="text"
                                            placeholder="Digite seu email"
                                            required
                                        />
                                    </InputBox>

                                    <InputBox>
                                        <Label for="firstname">Senha</Label>
                                        <Input
                                            name='password'
                                            type="password"
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
