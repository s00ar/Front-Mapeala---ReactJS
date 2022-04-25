import axios from "axios";
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

    //Resetear formulario al enviar
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name,email,phone,message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    } 

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, email: email, phone: phone, message: message});
        navigate('/');
        console.log(store) 

    }          
    
return (
    <div>

        <div class="card-body">

            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <input
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Enviar</button>
            </form>

        </div>


    </div>
  )
}

export default CreateContact;
