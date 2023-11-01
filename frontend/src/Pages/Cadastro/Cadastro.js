import React, { useState } from "react";
import { Container, Form, FormImage, Image, Input, Label, InputBox, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, InputBoxContainer, Select } from "./styled";
import ImagemPrincipal from "../../Assets/imageleitura.png";
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/Api";
import axios from "axios";

function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        cargo: "",
        email: "",
        telefone: "",
        senha: "",
        confirmSenha: ""
    });

    const goToLogin = () => {
        navigate('/login');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.senha !== formData.confirmSenha) {
            alert("Senhas não coincidem")
        } else {
            axios.post(`${baseUrl}/user/create`, formData)
                .then(function (response) {
                    alert("Usuário Criado")
                    goToLogin()
                })
                .catch(function (error) {
                    alert(error.response.data.message)
                });
        }

        setFormData({
            firstName: "",
            cargo: "",
            email: "",
            telefone: "",
            senha: "",
            confirmSenha: ""
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <Container>
            <ContainerForm>
                <Form>
                    <Divi>
                        <FormImage>
                            <Image src={ImagemPrincipal} alt="Imagem Principal" />
                        </FormImage>
                        <ContainerFormulario onSubmit={handleSubmit}>
                            <LogoImg src={Logo} alt="Logo" />
                            <StyleForm>
                                <InputBoxContainer>
                                    <InputBox>
                                        <Label htmlFor="firstName">Nome de Usuário</Label>
                                        <Input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Digite seu primeiro nome"
                                            required
                                        />
                                    </InputBox>
                                    <InputBox>
                                        <Label htmlFor="sobrenome">Cargo</Label>
                                        <Select
                                            id="cargo"
                                            name="cargo"
                                            value={formData.cargo}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Selecione um cargo</option>
                                            <option value="Professor">Professor</option>
                                            <option value="Estudante">Estudante</option>
                                        </Select>
                                    </InputBox>
                                    <InputBox>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Digite seu email"
                                            required
                                        />
                                    </InputBox>
                                </InputBoxContainer>
                                <InputBoxContainer>
                                    <InputBox>
                                        <Label htmlFor="telefone">Telefone</Label>
                                        <Input
                                            id="telefone"
                                            type="tel"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleChange}
                                            placeholder="Digite seu telefone"
                                            required
                                        />
                                    </InputBox>
                                    <InputBox>
                                        <Label htmlFor="senha">Senha</Label>
                                        <Input
                                            id="senha"
                                            type="password"
                                            name="senha"
                                            value={formData.senha}
                                            onChange={handleChange}
                                            placeholder="Digite sua senha"
                                            required
                                        />
                                    </InputBox>
                                    <InputBox>
                                        <Label htmlFor="confirmSenha">Confirme sua senha</Label>
                                        <Input
                                            id="confirmSenha"
                                            type="password"
                                            name="confirmSenha"
                                            value={formData.confirmSenha}
                                            onChange={handleChange}
                                            placeholder="Confirme sua senha"
                                            required
                                        />
                                    </InputBox>
                                </InputBoxContainer>
                            </StyleForm>
                            <Botao type="submit">Cadastrar</Botao>
                        </ContainerFormulario>
                    </Divi>
                </Form>
            </ContainerForm>
        </Container>
    );
}

export default Cadastro;
