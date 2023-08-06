import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, InputBoxContainer } from "./styled"
import ImagemPrincipal from "../../Assets/imageleitura.png"
import Logo from "../../Assets/logo.png"
function Login() {
    return (
        <>
            <Container>
                <ContainerForm  >
                    <Form>
                        <Divi>
                            <FormImage>
                                <Image src={ImagemPrincipal} />
                            </FormImage>
                            <ContainerFormulario>
                                <LogoImg src={Logo} />
                                <StyleForm >
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Primeiro Nome</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Sobrenome</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu sobrenome" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Email</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu email" required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Telefone</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu numero de telefone" required></Input>
                                        </InputBox><InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite sua senha" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Confirme sua senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Confirme sua senha" required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                </StyleForm>
                                <Botao>Continuar</Botao>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Login