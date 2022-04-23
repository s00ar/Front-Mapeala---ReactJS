import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const endpoint = "https://porfolio.online/mapeala/api";

const ShowContacts = () => {

    const [ contacts, setContacts ] = useState( [] );

    useEffect ( () => {
        getAllContacts();
    }, []);

    const getAllContacts = async () => {
        const response = await axios.get(`${endpoint}/contacts`);
        setContacts(response.data);
    };

    const deleteContact = async (id) => {
        await axios.delete(`${endpoint}/contact/${id}`);
        getAllContacts();
    };

  return (
    <div>
        
        <div className='d-grid gap-2'>
            <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Create</Link>
        </div>
        
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { contacts.map( (contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.message}</td>
                        <td>
                            <Link to={`/edit/${contact.id}`} className="btn btn-warning">Edit</Link>
                            <button onClick={()=>deleteContact(contact.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowContacts;