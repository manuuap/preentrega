import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";


import data from "./../data/products.json"

const categories = data.map(product => product.category)
const unique = new Set([...categories])

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><NavLink className="nav-link"to={`/`}>Marca</NavLink></Navbar.Brand>
                <Nav className="me-auto">
                    {[...unique].map(item => (
                        <NavLink className="nav-link" key={item} to={`/category/${item}`}>
                            {item}
                        </NavLink>))}
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}