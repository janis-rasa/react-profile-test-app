import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <>
            <h1 className="text-center">Home page</h1>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profiles">Profile list</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Home