import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, InputBoxContainer } from "./styled"
import ImagemPrincipal from "../../Assets/imageleitura.png"
import Logo from "../../Assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Cadastro() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [email, setEmail] = useState()
    const [telefone, setTelefone] = useState()
    const [senha, setSenha] = useState()
    const [confirmSenha, setConfirmSenha] = useState()
    
    const goToLogin = () =>{
        navigate('/login')
    }

    const handleSubmit = () =>{
        console.log(firstName, sobrenome, email, telefone, senha, confirmSenha)
    }

    return (
        <>
            <Container>
                <ContainerForm  >
                    <Form>
                        <Divi>
                            <FormImage>
                                <Image src={ImagemPrincipal} />
                            </FormImage>
                            <ContainerFormulario onSubmit={handleSubmit}>
                                <LogoImg src={Logo} />
                                <StyleForm >
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="firstname">Primeiro Nome</Label>
                                            <Input id="firstname" 
                                            type="text" 
                                            name="firstname" 
                                            value={firstName}
                                            onChange={(e)=>setFirstName(e.target.value)}
                                            placeholder="Digite seu primeiro nome" 
                                            required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="sobrenome">Sobrenome</Label>
                                            <Input id="sobrenome" 
                                            type="text" 
                                            name="sobrenome" 
                                            value={sobrenome}
                                            onChange={(e)=>setSobrenome(e.target.value)}
                                            placeholder="Digite seu sobrenome" 
                                            required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="email">Email</Label>
                                            <Input id="email" 
                                            type="text" 
                                            name="email" 
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                            placeholder="Digite seu email" 
                                            required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                    <InputBoxContainer>
                                        <InputBox>
                                            <Label for="telefone">Telefone</Label>
                                            <Input id="telefone" 
                                            type="tel" 
                                            name="telefone"
                                            value={telefone}
                                            onChange={(e)=>setTelefone(e.target.value)} 
                                            placeholder="Digite seu telefone" 
                                            required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="senha">Senha</Label>
                                            <Input id="senha" 
                                            type="password" 
                                            name="senha"
                                            value={senha}
                                            onChange={(e)=>setSenha(e.target.value)} 
                                            placeholder="Digite sua senha" 
                                            required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="confirmsenha">Confirme sua senha</Label>
                                            <Input id="confirmsenha" 
                                            type="password" 
                                            value={confirmSenha}
                                            onChange={(e)=>setConfirmSenha(e.target.value)}
                                            name="confirmsenha" 
                                            placeholder="Confirme sua senha" 
                                            required></Input>
                                        </InputBox>
                                    </InputBoxContainer>
                                </StyleForm>
                                <Botao type="submit">Continuar</Botao>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Cadastro