import React, { Fragment } from 'react';
import {BsInstagram, BsFacebook} from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import '../estilos/footer.css';

const Footer = () => {
    return ( 
        <Fragment>
            <Container fluid className='text-center footer fondo_footer'>
                © Leonel Zeballez | <BsInstagram/> <BsFacebook/>
            </Container>
        </Fragment>
     );
}

export default Footer;