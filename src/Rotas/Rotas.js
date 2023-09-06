import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Forum from "../Pages/Forum/Forum"
import Config from "../Pages/Config/Config"
import Login from "../Pages/Login/Login"
import Cadastro from "../Pages/Cadastro/Cadastro"
import Comentario from "../Pages/Comentario/Comentario"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="forum" element={<Forum/>}/>
                <Route path="config" element={<Config/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="publicacao" element={<Comentario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas