import { useState, useEffect } from 'react'
import { Container, Form, Row, Col} from "react-bootstrap";

const diaSemana = ["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge"]

function Fecha() {

    const [date, setDate] = useState(null);

    function handleInput(input) {
        let newDate = new Date(input.target.value)
        setDate(newDate)
    }

    function tiempoTranscurrido() {
        console.log(date.getFullYear())
        let firstDate = new Date(date.getFullYear() + "")
        console.log(firstDate)
    }

    /*useEffect(()=>{

        if(date){
            let dateObject = new Date(date)
            console.log(dateObject)
            let dateObject2 = new Date(date)
            console.log(dateObject2)
        }

    }, [date])*/

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
                        <h2 className="mt-5">{date ? date.toString() : null}</h2>
                        <h2>{date ? diaSemana[date.getDay() - 1] : null}</h2>
                        <h2></h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Fecha;