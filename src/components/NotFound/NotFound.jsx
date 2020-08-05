import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'


const NotFound = (props) => {

    return (
        <>
            <Jumbotron>
                <h1>404. Page not found!</h1>
                <p>
                    Sorry, page not found
  </p>
                <p>
                    <Button as={NavLink} to="/" variant="primary">Home page</Button>
                </p>
            </Jumbotron>
        </>
    )
}

export default NotFound