import "./noteQuiz.css";
import { Container, Col, Row, Button } from "react-bootstrap";

export default function NoteQuiz() {
  function RadioButton({ label }) {
    return (
      <>
        <input type="radio" name="options" value={label} id={label} />{" "}
        <label htmlFor={label}>{label}</label>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6} className="card">
            <img className="test-img" src="./images/a-treble.PNG"></img>
          </Col>
          <Col xs={1}></Col>
          <Col xs={2} className="radio-button">
            <RadioButton label="treble" />
            <RadioButton label="base" />
            <RadioButton label="both" />
          </Col>
        </Row>

        <Row className="spacing-top-small">
          <Col xs={3}></Col>
          <Col className="flex-center">
            <Button className="submit-center" variant="info" size="lg">
              submit
            </Button>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
      <h1 className="flex-center spacing-top-small">score : 0</h1>
    </>
  );
}
