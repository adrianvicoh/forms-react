import { useState } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Login(props) {

    const nombre = props.nombre_correcto;
    const password = props.password_correcto;

    return (
        <>
            <Container>
                <Row>
                    <h1 className="text-center mt-5 mb-5">Login</h1>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xl={6} lg={6}>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="name">
                                <Form.Label column sm="2">
                                    Nombre
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="text" placeholder="Nombre" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="password">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <Row className='justify-content-md-center'>
                                <Button as={Col} sm="3" type="submit" className="mb-3 mt-3" controlId="send">Enviar</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Login;