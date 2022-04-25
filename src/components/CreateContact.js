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
        if (name === '' || email === '' || phone === '' || message === '') {
            alert("Por favor, llene todos los campos");
        } else {
            axios.post(endpoint, {
                name: name,
                email: email,
                phone: phone,
                message: message
            })
                .then(function (response) {
                    console.log(response);
                    alert("Mensaje enviado");
                    navigate("/");
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Error al enviar el mensaje");
                });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            } 
        }
    
        const store = async (e) => {
            e.preventDefault();
            await axios.post(endpoint, {name: name, email: email, phone: phone, message: message});
            navigate('/');
            console.log(store) 
    
        }  
return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contacto</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea className="form-control" id="message" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
/* 

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
  ) */
}

export default CreateContact;
