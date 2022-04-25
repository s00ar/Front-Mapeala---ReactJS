import axios from "axios";

import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

const endpoint = "https://porfolio.online/mapeala/api/contact";


const CreateContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    //Resetear y validar formulario al enviar
    function handleSubmit(e) {
        e.preventDefault();
        if (name === '' || email === '' || phone === '' || message === '') {
            alert("Por favor, llene todos los campos");
        } else if (typeof email!== "undefined") {
                let posicionArroba = email.lastIndexOf('@');
                let posicionPunto = email.lastIndexOf('.');
    
                if (!(posicionArroba < posicionPunto && posicionArroba > 0 && email.indexOf('@@') == -1 && posicionPunto > 2 && (email.length - posicionPunto) > 2)) {
                    alert("Por favor, ingresa un correo válido.");
                } else {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        alert("Mensaje enviado correctamente");
    } 
        }
    }
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, email: email, phone: phone, message: message});
        navigate('/');
        }    
return (
    <div>

        <div className="card-body">

            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese nombre y apellido"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese teléfono"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <input
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese mensaje"
                    />
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Enviar</button>
            </form>

        </div>


    </div>
)
}

export default CreateContact;