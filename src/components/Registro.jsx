import { useState } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Registro() {

    const [isEmailVerified, setEmailVerified] = useState(false);
    const [isPasswordVerified, setPasswordVerified] = useState(false);
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let styleRed = {
        color: 'red'
    }

    let styleGreen = {
        color: 'green'
    }

    function handleInput(input) {
        input.target.value
        console.log(emailRegex.test(email))
        if (input.target.name === "email") {
            setEmail(input.target.value);
            
        } else if (input.target.name === "password1") {
            setPassword1(input.target.value);
        } else {
            setPassword2(input.target.value);
        }
    }

    function verificar() {
        input.preventDefault();
        console.log(emailRegex.test(email))
        if (emailRegex.text(email)) {
            setEmailVerified(true)
            console.log(isEmailVerified)
        }
        if (password1 === password2) {
            setPasswordVerified(true)
            console.log(isEmailVerified)
        }
    }
    
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className='text-center m-5'>Register</h1>
                        <Form onSubmit={verificar}>
                            <Form.Group className="mb-3" name="email" onChange={handleInput}>
                                <Form.Label style={isEmailVerified ? styleGreen : styleRed}>Nombre</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" name="password1" onChange={handleInput}>
                                <Form.Label style={isPasswordVerified ? styleGreen : styleRed}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password 1" />
                            </Form.Group>
                            <Form.Group className="mb-3" name="password2" onChange={handleInput}>
                                <Form.Label style={isPasswordVerified ? styleGreen : styleRed}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password 2" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Registro;