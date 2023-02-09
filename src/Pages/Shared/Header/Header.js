import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import logo from '../../../images/banner/logo.png';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="bg" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                
                    <Navbar.Brand className='fst-italic' href="#home">Traveller</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-light" to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/tradetail">MyOrder</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/addService">Add-Service</Nav.Link>}
                        <Navbar.Text><a href="#login" className="text-decoration-none p-2 text-warning"> {user?.displayName} </a> </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logOut} variant="primary">logOut</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        {/* <Navbar.Text><a href="#login" className="text-decoration-none ">  {user?.displayName}</a> </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;