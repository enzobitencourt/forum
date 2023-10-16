import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "./useForm";

export const useUserOperations = (initialForm, path) =>{

    const navigate = useNavigate()
    const [message, setMessage] = useState()
    const [form, onChangeForm] = useForm(initialForm)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('home')
        } 
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post('http://localhost:8000/login', form)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                setMessage(response.data.message)
                navigate('/home');
            })
            .catch(error => console.log('error'));
    }

    return(
        form,
        onChangeForm,
        handleSubmit,
        message
    )
}