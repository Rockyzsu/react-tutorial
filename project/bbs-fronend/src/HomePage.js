import { Container,Row,Col } from "react-bootstrap";

const HomePage =()=>{
return (
    <Container fluid>
        <Row>
            <Col sm={12} md={7} className="pr-1">
                <Demo/>
            </Col>
            
        </Row>
    </Container>
)
    

}

export default HomePage;