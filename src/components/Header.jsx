import React, { Fragment } from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{titulo}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <NavDropdown title="Productos">
                            <NavDropdown.Item href="#waffles">Waffles</NavDropdown.Item>
                            <NavDropdown.Item href="#helados">Helados</NavDropdown.Item>
                            <NavDropdown.Item href="#panchos">Panchos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
     );
}
 
export default Header;