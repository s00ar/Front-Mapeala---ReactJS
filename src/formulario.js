import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import ShowContacts from './components/ShowContacts';
import CreateContact from './components/CreateContact.js';
import EditContact from './components/EditContact.js';

function Formulario() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowContacts/> } />
          <Route path='/create' element={ <CreateContact/> } />
          <Route path='/edit/:id' element={ <EditContact/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default Formulario;
