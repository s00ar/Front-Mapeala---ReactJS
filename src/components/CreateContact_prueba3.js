/* import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const endpoint = "https://porfolio.online/mapeala/api/contact";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, email: email, phone: phone, message: message});
        navigate('/');
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

class CreateContact extends React.Component {

    //Resetear formulario al enviar CÓDIGO NUESTRO
    handleSubmit(e) {
        e.preventDefault();
        console.log(name,email,phone,message);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    } 

    //FIN CÓDIGO NUESTRO
    constructor(props) {

        super(props);

        // Defino los estados locales 
        this.state = {
            campo: {},
            error: {},
            enviado: false 
        } 

    }
    // Valido los campos del formulario
validarFormulario() {
    let campo = this.state.campo;
    let error = {};
    let formularioValido = true;
    // Nombres y Apellidos
    if (!campo["name"]) {
        formularioValido = false;
        error["name"] = "Por favor, ingresa tu Nombre completo";
    }
    
        // Email
        if (!campo["email"]) {
            formularioValido = false;
            error["email"] = "Por favor, ingresa tu correo.";
        }

        // Validamos si el formato del Email es correcto 
        if (typeof campo["email"] !== "undefined") {
            let posicionArroba = campo["email"].lastIndexOf('@');
            let posicionPunto = campo["email"].lastIndexOf('.');

            if (!(posicionArroba < posicionPunto && posicionArroba > 0 && campo["email"].indexOf('@@') == -1 && posicionPunto > 2 && (campo["email"].length - posicionPunto) > 2)) {
                formularioValido = false;
                error["email"] = "Por favor, ingresa un correo válido.";
            }
        }

        // Asunto
        if (!campo["phone"]) {
            formularioValido = false;
            error["phone"] = "Por favor, ingresa un teléfono.";
        }

        // Mensaje
        if (!campo["mensaje"]) {
            formularioValido = false;
            error["mensaje"] = "Por favor, ingresa tu Mensaje.";
        }

        // Seteo el estado de error 
        this.setState({
            error: error
        });
        
        return formularioValido;
    } 
    // Una vez que los campos del formulario han sido llenado correctamente 
    // Mostramos un mensaje al usuario diciendo: 'Mensaje Enviado Satisfactoriamente !'
    enviarFormulario(e) {
        e.preventDefault();

        // Si la validación de los campos del formulario ha sido realizada 
        if (this.validarFormulario()) {            

            // Cambio el estado de 'enviado' a 'true'
            this.setState({enviado: true});

            // Muestro el mensaje que se encuentra en la función mensajeEnviado()
            return this.mensajeEnviado();
        } 

    } 

    // Función para mostrar un mensaje al usuario 
    mensajeEnviado(state) { 

        // la variable enviado por defecto esta en 'false' pero cuando se
        // termina de validar los datos del formulario, la variable enviado
        // cambia a 'true' 
        const enviado = this.state.enviado;

        // Si el valor de la variable enviado es 'true' pues mostramos el mensaje 
        if (enviado == true) {

            return {
                __html: '<div class="alert alert-success mt-3" role="alert">Mensaje Enviado Satisfactoriamente !</div>'
            };

        }
    }; 

    // Detectamos cuando un campo del formulario es llenado y por ende cambia de estado 
    detectarCambio(field, e) {

        let campo = this.state.campo;
        campo[field] = e.target.value;

        // Cambio de estado de campo 
        this.setState({
            campo
        });

    } 

    
    // Cuando el componente ha sido Montado 
    componentDidMount() {

        // 

    }

    // Cuando el componente ha sido Desmontado  
    componentWillUnmount() {

        // 

    }

    // Renderizamos el formulario 
    render(){         

        return (

            <div className="App">
                <div className="container mt-5 mb-5">
                    <div className="col-md-12">

                        <h1>Contactanos</h1>

                        <form onSubmit={store}>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="name">Nombre completo</label>
                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={this.detectarCambio.bind(this, "name" )} value={this.state.campo["name"] || ''} />
                                <span style={{color: "red"}}>{this.state.error["name"]}</span>
                            </div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.detectarCambio.bind(this, "email" )} value={this.state.campo["email"]  || ''} />
                                <small id="emailHelp" className="form-text text-muted">Ejemplo: correo@email.com </small>
                                <span style={{color: "red"}}>{this.state.error["email"]}</span>
                            </div> 

                            <div className="form-group">
                                <label className="negrita2" htmlFor="phone">Teléfono</label>
                                <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" onChange={this.detectarCambio.bind(this, "phone" )} value={this.state.campo["phone"]  || ''} />
                                <span style={{color: "red"}}>{this.state.error["phone"]}</span>
                            </div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="mensaje">Mensaje</label>
                                <textarea className="form-control" id="mensaje" rows="3" onChange={this.detectarCambio.bind(this, "mensaje" )} value={this.state.campo["mensaje"] || ''}></textarea>
                                <span style={{color: "red"}}>{this.state.error["mensaje"]}</span>
                            </div>

                            <button type="submit" className="btn btn-primary">Enviar</button>                            

                        </form>

                        {Si el formulario no ha sido validado aún, no mostramos el mensaje}
                        {Y cuando el formulario es validado, pues mostramos el mensaje}
                    <div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} /> 

                    </div>
                </div>
            </div>

        )
        
    };

}


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
}

export default CreateContact; */