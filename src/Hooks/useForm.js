import { useState } from "react"

export const useForm =(estadoInicial)=>{

    const [form, setForm] = useState(estadoInicial)

    const onChangeForm =(event)=>{
        const {value, name} = event.target

        const novoForm{
            ...form,
            [name]:value
        }

        setForm(onChangeForm)
    }

    return(form, onChangeForm)
}