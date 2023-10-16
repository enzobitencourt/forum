import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../Hooks/useForm"
import axios from "axios"

function Login() {
    const navigate = useNavigate();

    const goToCadastro = () => {
        navigate('/cadastro');
    }

    const saveUserInfoLocalStorage = (token, email) => {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    }

    const formState = useForm({ nome: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email: formState.form.nome,
            password: formState.form.password,
        };

        axios.post('http://localhost:8000/login', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                saveUserInfoLocalStorage(response.data.token, formState.form.nome);
                navigate('/home');
            })
            .catch(error => console.log('error'));
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
                                        <Label for="firstname">Email</Label>
                                        <Input
                                            name='nome'
                                            value={formState.form.nome}
                                            type="text"
                                            placeholder="Digite seu email"
                                            onChange={formState.onChangeForm}
                                            required
                                        />
                                    </InputBox>

                                    <InputBox>
                                        <Label for="firstname">Senha</Label>
                                        <Input
                                            name='password'
                                            value={formState.form.password}
                                            type="password"
                                            placeholder="Digite sua senha"
                                            onChange={formState.onChangeForm}
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
