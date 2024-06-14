import "./title.css";
import { Container, Col, Row } from "react-bootstrap";

export default function Title() {
  return (
    <Container>
      <Row>
        <Col xs={3} ></Col>
        <Col xs={6}>
          <h1 id="title">Guess the note!</h1>
        </Col>
        <Col xs={3} ></Col>
      </Row>
    </Container>
  );
}
