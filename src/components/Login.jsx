import { useState } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Login(props) {

    const correctName = props.nombre_correcto;
    const correctPassword = props.password_correcto;

    const [isNameVerified, setNameVerified] = useState(false);
    const [isPasswordVerified, setPasswordVerified] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    let styleRed = {
        color:'red'
    }

    let styleGreen = {
        color:'green'
    }

    function handleInput(input) {
        if (input.target.name === "name") {
            setName(input.target.value);
        } else {
            setPassword(input.target.value);
        }
    }

    function verificar() {
        input.preventDefault();

        if (name === correctName) {
            setNameVerified(true)
        }
        if (password === correctPassword) {
            setPasswordVerified(true)
        }
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                    <h1 className='text-center m-5'>Login</h1>
                        <Form onSubmit={verificar}>
                            <Form.Group className="mb-3" name="name" onChange={handleInput}>
                                <Form.Label style={isNameVerified ? styleGreen : styleRed}>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" name="password" onChange={handleInput}>
                                <Form.Label style={isPasswordVerified ? styleGreen : styleRed}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Login;