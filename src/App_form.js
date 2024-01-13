import React from "react";
import "./App.scss";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const App_form = () => {
  return (
    <div id="myFormContainer" className="block-example border border-grey p-3">
      <form>
        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>Fornavn</label>
            </Col>
            <Col>
              <input type="text" id="firstName" className="form-control" required maxLength={2} />
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>Alder</label>
            </Col>
            <Col>
              <input id="age" type="number" className="form-control" required />
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>Email</label>
            </Col>
            <Col>
              <input id="email" type="email" className="form-control" required />
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <input
                className="form-check-input mCheck"
                id="terms"
                type="checkbox"
                required
              />
              <span className="mFontLabel">Acceptere vores betingelser</span>
            </Col>
          </FormGroup>
        </Row>

        <Row>
          <FormGroup>
            <Col>
              <button className="float-end btn btn-secondary">Send</button>
            </Col>
          </FormGroup>
        </Row>
      </form>
    </div>
  );
};

export default App_form;