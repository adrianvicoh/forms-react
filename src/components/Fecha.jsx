import { useState } from 'react'
import { Container, Form, Row, Col} from "react-bootstrap";

function Fecha() {

    const [date, setDate] = useState("");

    function handleInput(input) {
        console.log(date)
        console.log(typeof input.target.value)
        setDate(input.target.value)
        console.log(input.target.value)
        console.log(date)
        let dateObject = new Date(input.target.value)
        console.log(dateObject)
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className='text-center m-5'>Fecha</h1>
                        <Form>
                            <Form.Group className="mb-3" name="name" onChange={handleInput}>
                                <Form.Control type="date" placeholder="Fecha" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col>
                        <h1 className="m-5">{date}</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Fecha;