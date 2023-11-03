import { BotaoPaginaProx, BotaoPaginaVolt, BotaoPaginas, BotaoPaginasNo, Flecha, Numeros, Paginas, Titulo } from "./styled"
import Voltar from "../../Assets/FlechaVoltPag.svg"
import Proximo from "../../Assets/FlechaNextPag.svg"

function FooterResultados(){
    return(
        <>
        <Paginas>
            <BotaoPaginaVolt>
                <Flecha src={Voltar}/>
                <Titulo>Voltar</Titulo>
            </BotaoPaginaVolt>
            <Numeros>
                <BotaoPaginas>1</BotaoPaginas>
                <BotaoPaginasNo>2</BotaoPaginasNo>
                <BotaoPaginasNo>3</BotaoPaginasNo>
                <BotaoPaginasNo>4</BotaoPaginasNo>
            </Numeros>
            <BotaoPaginaProx>
                <Flecha src={Proximo}/>
                <Titulo>Avançar</Titulo>
            </BotaoPaginaProx>
        </Paginas>
        </>
    )
}

export default FooterResultados