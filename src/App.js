import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import whatsapp from './img/whatsapp.svg';
import logo from './img/logo-mapeala-final.png';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from './img/slider-1.jpg';
import slider_2 from './img/slider-2.jpg';
import slider_3 from './img/slider-3.jpg';
import FAQ from './img/fondo-mapeala.jpg';
import Contact from './img/mapeala-contacto.jpg';
import './fonts/AbyssinicaSIL-Regular.woff'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import CreateContact from './components/CreateContact.js';
import EditContact from './components/EditContact.js';


function App() {
  return ( 
    <React.Fragment>

{/* Barra Navegacion */}

 <body  className="body"> 

  <Navbar sticky="top" className='navbar' expand="lg">
    <Container>
      <Navbar.Brand href="#home"> <img className='logo-mapeala-nav' src={logo} alt="Mapela" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className='a-menu' href="#home">Inicio</Nav.Link>
          <Nav.Link className='a-menu' href="#propiedades">Propiedades</Nav.Link>
          <Nav.Link className='a-menu' href="#faq">FAQ</Nav.Link>
          <Nav.Link className='a-menu' href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Container className='redes-sociales' fluid="md">
    <Row>
      <Col>
      
      <a href='https://facebook.com'><img className='social-icon' src={facebook} alt="Facebook" /></a>
      <a href='https://instagram.com'><img className='social-icon' src={instagram} alt="Instagram" /></a>
      <a href='https://whatsapp.com'><img className='social-icon' src={whatsapp} alt="Whatsapp" /></a>
        
      </Col>
    </Row>
  </Container>

  {/* Hero */}

  <Container className='hero'>
    <Row>
      <Col className='col-logo'> 
      <img className='logo-mapeala' src={logo} alt="Mapela" />
      </Col>
      <Col className='col-texto'>Mapeala Tu App Inmobiliaria: no solo vas a conocer tu próximo hogar, también vas a conocer tu próxima comunidad, hace click en el mapa y encontrá lo que estás buscando. </Col>
    </Row>
  </Container>

  {/* Slider Full Width */}
  <section>

  <Carousel className='carousel'>
    <Carousel.Item>
      <img className="d-block w-100" src={slider_1} alt="First slide" />
      <Carousel.Caption>
        <h3 className='header-3'>BUENOS AIRES</h3>
        <p className='slider-text'>Capital Federal // Tigre // Palermo // Escobar // San Pedro Las Cañitas</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={slider_2} alt="Second slide" />

      <Carousel.Caption>
        <h3 className='header-3'>CENTRO DEL PAÍS</h3>
        <p className='slider-text'> Villa Carlos Paz //  Villa General Belgrano //  Capilla del Monte // Los Reartes</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={slider_3} alt="Third slide" />

      <Carousel.Caption>
        <h3 className='header-3'>COSTA ATLÁNTICA</h3>
        <p className='slider-text'>Mar del Plata // Villa Gesell // Miramar // Necochea  // Puerto Madryn // Pinamar // Monte Hermoso</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </section>

  {/* Google Maps */} 

  <section>

    <div id='propiedades' className='heading-2'>
        <h3>Búsqueda de propiedades</h3>
    </div>

    <div className='google-maps'>
      <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27238.97478372691!2d-64.19180340742368!3d-31.417656709819614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a298fd24f0d7%3A0xf89d39124c4d9c06!2sBarrio%20Gral.%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1649953876433!5m2!1ses-419!2sar"></iframe>
    </div>

  </section> 
    {/* Slider Centrado - Fondo a dos colores */}

    <div className='heading-2'>
        <h3>Recientemente listadas</h3>
    </div>

    <section className='dos-colores'>

    <div className='slider'>
    <Carousel className='slider-centrado' fade>
    <Carousel.Item>
        <img className="d-block w-100" src={slider_2} alt="First slide" />
      <Carousel.Caption className='slider-caption'>
        <h3 className='header-3'>SAN PEDRO DE LAS CAÑITAS</h3>
        <p className='slider-text'>Moderna y sólida casa, lote con mucha privacidad, sin vecinos, ideal para descansar</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src={slider_1} alt="First slide" />

      <Carousel.Caption className='slider-caption'>
        <h3 className='header-3'>VILLA BELGRANO</h3>
        <p className='slider-text'>Alquiler temporario, completamente equipada.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    </div>

  </section>

  {/* Preguntas Frecuentes */}

  <section>
    <div className='heading-2'>
        <h3>Peguntas Frecuentes</h3>
    </div>

    <div id='faq' className='faq'>
      <Row>
        <Col>
        
          <Accordion className='accordion-faq' defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Qué documentación necesito para comprar un terreno o casa?</Accordion.Header>
              <Accordion.Body>
              Algunos de los documentos necesarios son: Documento Nacional de Identidad - D.N.I., acta de nacimiento y de matrimonio (si es su caso) y proporcionar sus datos generales.

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Si quiero comprar una propiedad, ¿qué gastos me corresponden hacer?</Accordion.Header>
              <Accordion.Body>
              Es necesario que contemple el costo por la realización de un avalúo fiscal y/o bancario, si es su caso; el certificado de no adeudo de impuesto predial, el impuesto sobre traslación de dominio; derechos de inscripción en el registro público de la propiedad, derechos por la expedición del certificado de libertad de gravámenes posterior al registro de la escritura.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Qué debo tomar en cuenta para saber si la casa o terreno que estoy comprando tendrá buena plusvalía?</Accordion.Header>
              <Accordion.Body>
              Es importante ver las condiciones de la propiedad al adquirirla y la posibilidad de hacer cambios y remodelaciones a futuro. Algunos de los puntos importantes a considerar son la infraestructura y su estado en el que se encuentra, si tiene espacio para continuar construyendo y el entorno que rodea al inmueble, es decir su ubicación como la colonia o el fraccionamiento.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          
        </Col>
        <Col className='right-faq'>
          <img className='fondo-faq' src={FAQ} />
        </Col>
      </Row>
    </div>
  </section>

  {/* Contacto */}

    <div id='contacto' className='heading-2'>
        <h3>Contacto</h3>
    </div>

  <section className='dos-colores'>

    <div className='contacto'>
      <Container className='c-center'>
      <Row>
          <Col>
          <div className="formulario">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={ <CreateContact/> } />
                <Route path='/create' element={ <CreateContact/> } />
                <Route path='/edit/:id' element={ <EditContact/> } />
              </Routes>
            </BrowserRouter>      
          </div>
          </Col>
          <Col className='img'>
            <img className='img-contacto' src={Contact} />
          </Col>
        </Row>
      </Container>
    </div>

  </section>

  {/* Footer */}

  <footer className='footer'>
    <Container className='col-footer'>
      <Row className='col-center'>
        <Col>
          <h3 className='h3-footer'>Mapela</h3>
          <ul className='redes-footer'>
            <li className='lista'><a href='#inicio'>Inicio</a></li>
            <li className='lista'><a href='#propiedades'>Propiedades</a></li>
            <li className='lista'><a href='#servicios'>Servicios</a></li>
            <li className='lista'><a href='#contacto'>Contacto</a></li>
          </ul>
        </Col>

        <Col>
          <h3 className='h3-footer'>Secciones</h3>
          <ul className='redes-footer'>
            <li className='lista'><a href='#'>Ofertas</a></li>
            <li className='lista'><a href='#'>Venta</a></li>
            <li className='lista'><a href='#'>Compra</a></li>
            <li className='lista'><a href='#'>Alquiler</a></li>
          </ul>
        </Col>

        <Col>
          <h3 className='h3-footer'>¡Seguinos!</h3>
          <ul className='redes-footer'>
            <a href='https://facebook.com'><img className='social-icon' src={facebook} alt="Facebook" /></a>
            <a href='https://instagram.com'><img className='social-icon' src={instagram} alt="Instagram" /></a>
            <a href='https://whatsapp.com'><img className='social-icon' src={whatsapp} alt="Whatsapp" /></a>
          </ul>
        </Col>

      </Row>

    </Container>

    <div className='copyright'>
      <p>@copy Mapeala V1.02</p>
    </div>
    
  </footer>
</body> 
</React.Fragment>
  );
}

export default App;
