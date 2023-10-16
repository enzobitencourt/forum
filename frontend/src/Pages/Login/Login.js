import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useUserOperations } from "../../Hooks/useUserOperations"

function Login() {
    const navigate = useNavigate();

    const goToCadastro = () => {
        navigate('/cadastro');
    }
    
    const {form, onChangeForm, handleSubmit} = useUserOperations({nome: '', password: ''}, 'user/login')

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
                                        <Label for="firstname">Email</Label>
                                        <Input
                                            name='nome'
                                            value={form.nome}
                                            type="text"
                                            placeholder="Digite seu email"
                                            onChange={onChangeForm}
                                            required
                                        />
                                    </InputBox>

                                    <InputBox>
                                        <Label for="firstname">Senha</Label>
                                        <Input
                                            name='password'
                                            value={form.password}
                                            type="password"
                                            placeholder="Digite sua senha"
                                            onChange={onChangeForm}
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
