import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const endpoint = "https://porfolio.online/mapeala/api/contact/";


const EditContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            email: email,
            phone: phone,
            message: message
        });
        navigate('/');
    }

    useEffect( () => {
        const getContactById = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setMessage(response.data.message);
        }
        getContactById();
        //esLint-disable-next-line react-hooks/exhaustivedeps
    }, [] ) ;

  return (
    <div>
        <h3>Edit Contact</h3>
        <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
  )
}

export default EditContact;