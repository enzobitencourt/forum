import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagelogin.png"
import Logo from "../../Assets/logo.png"

function Cadastro() {
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
                                <StyleForm >
                                    <InputBox>
                                        <Label for="firstname">Email</Label>
                                        <Input id="email" type="text" name="email" placeholder="Digite seu email" required></Input>
                                    </InputBox>
                                    <InputBox>
                                        <Label for="firstname">Senha</Label>
                                        <Input id="firstname" type="password" name="firstname" placeholder="Digite sua senha" required></Input>
                                    </InputBox>
                                </StyleForm>
                                <Botao>Continuar</Botao>
                                <Register>Registrar</Register>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Cadastro