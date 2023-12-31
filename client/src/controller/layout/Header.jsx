import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-ECOM-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            <NavLink className="nav-link" to="/checkout">checkOut</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                            <NavLink className="nav-link" to="/privacy">Privacy</NavLink>
                            <NavLink className="nav-link" to="/product">Product</NavLink>
                            <NavLink className="nav-link" to="/registration">Registration</NavLink>
                            <NavLink className="nav-link" to="/review">Review</NavLink>
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                            <NavLink className="nav-link" to="/terms">Terms</NavLink>
                            <NavLink className="nav-link" to="/thankyou">ThankYou</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;