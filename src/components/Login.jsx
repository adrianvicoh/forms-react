import { useState } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Login(props) {

    const nombre = props.nombre_correcto;
    const password = props.password_correcto;

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Login;