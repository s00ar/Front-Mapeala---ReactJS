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

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, email: email, phone: phone, message: message});
        navigate('/');
    }
  return (
    <div>

        <div class="card-header bg-info"> 
            <h1>MAPEALA</h1>
            <h3 class="text-white">FORMULARIO DE CONTACTO</h3> 
        </div>

        

        <form onSubmit={store}>

            <div className="mb-3">
                <label className="form-label">Name</label>
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
                <label className="form-label">Phone</label>
                <input
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Message</label>
                <input
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary">Store</button>

        </form>

    </div>
  )
}

export default CreateContact;