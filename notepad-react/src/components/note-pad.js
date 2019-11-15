import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandLogo from "../dp-logo.png";
import Alert from "react-bootstrap/Alert";
import JSONFormatter from "json-formatter-js";
class NotePad extends React.Component {
  constructor(props) {
    console.log("NotePad constructing");
    super(props);
    this.state = {
      notes: "",
      wordCount: 0,
      charCount: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearData = this.clearData.bind(this);
    this.formatJSON = this.formatJSON.bind(this);
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //count words
    const allText = target.value;
    const wordCount = allText
      .replace(/(^\s*)|(\s*$)/gi, "")
      .replace(/[ ]{2,}/gi, " ")
      .replace(/\n /, "\n")
      .split(" ").length;
    //count charecter
    const charCount = value.length;
    this.setState({
      [name]: value,
      wordCount: wordCount,
      charCount: charCount
    });
  };

  clearData = event => {
    this.setState({
      notes: "",
      wordCount: 0,
      charCount: 0
    });
  };
  formatJSON = event => {
    const notesFormatted = JSON.stringify(this.notes, undefined, 4);
    console.log("formatting....", notesFormatted);
    this.setState({
      notes: notesFormatted
    });
  };
  render() {
    return (
      <div id="notepad">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://subrata.dev/" className="text-white font-weight-bold">
            <img
              alt=""
              src={BrandLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            My Notepad
          </Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <div className="text-white">
              Word Count-{this.state.wordCount} Charecter Count-
              {this.state.charCount}
            </div>
          </Nav>
        </Navbar>
        <Row>
          <Col sm>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="Type your text here"
                as="textarea"
                rows="15"
                name="notes"
                value={this.state.notes}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div className="text-center">
              <Button
                variant="dark"
                type="submit"
                className="font-weight-bold"
                onClick={this.clearData}
              >
                Clear
              </Button>
              {/* &nbsp;
                <Button
                  variant="dark"
                  type="submit"
                  className="font-weight-bold"
                  onClick={this.formatJSON}
                >
                  FormatJSON
                </Button> */}
            </div>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col sm>
            <Alert variant="info" className="text-center">
              <h5>
                <i>
                  <q>
                    This is a stateless application, does not store typed text
                    to any persistance storage.
                  </q>
                </i>
              </h5>
            </Alert>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NotePad;
