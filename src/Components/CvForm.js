import React from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormControl, Card, Button } from 'react-bootstrap';
import CvFormWorkExp from "./CvFormWorkExp";

class CvForm extends React.Component {
  render() {
    return (
      <Card border="dark">
        <Card.Header>Your info</Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col sm="6">
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl
                    type='text'
                    onChange={this.props.onChangeFirstName}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl
                    type='text'
                    onChange={this.props.onChangeLastName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    onChange={this.props.onChangeEmail}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl
                    type="phone"
                    onChange={this.props.onChangePhoneNumber}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm="6">
                <FormGroup>
                  <FormLabel>City</FormLabel>
                  <FormControl
                    type="text"
                    onChange={this.props.onChangeCity}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>State</FormLabel>
                  <FormControl
                    type="text"
                    onChange={this.props.onChangeState}
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr></hr>
            <Row> {/* Work Experience section */}
              <Col>
                <Row className="justify-content-start mb-3">
                  <Col sm="auto"><h5>Work Experience</h5></Col>
                  <Col sm="auto">
                    <Button variant="dark" onClick={this.props.addWorkExp}>Add</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {this.props.workExp.map((currentWorkExp, index) =>
                      <CvFormWorkExp
                        key={index}
                        index={index}
                        workExp={currentWorkExp}
                        removeWorkExp={this.props.removeWorkExp}
                      />)}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default CvForm;