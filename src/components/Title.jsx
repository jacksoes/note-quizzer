import { Container, Col, Row } from "react-bootstrap";

export default function Title() {
  return (
    <Container>
      <Row className="flex-center">
        <Col sm={5}>
          <h1 id="title">Guess the note!</h1>
        </Col>
      </Row>
    </Container>
  );
}
