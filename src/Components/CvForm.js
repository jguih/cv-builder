import React from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormControl, Card, Button } from 'react-bootstrap';
import CvFormWorkExp from "./CvFormWorkExp";

class CvForm extends React.Component {
  render() {
    const handleOnChange = this.props.handleOnChange;

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
                    type="text"
                    onChange={(event) => handleOnChange(event, "firstName")}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl
                    type="text"
                    onChange={(event) => handleOnChange(event, "lastName")}
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
                    onChange={(event) => handleOnChange(event, "email")}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl
                    type="phone"
                    onChange={(event) => handleOnChange(event, "phoneNumber")}
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
                    onChange={(event) => handleOnChange(event, "city")}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>State</FormLabel>
                  <FormControl
                    type="text"
                    onChange={(event) => handleOnChange(event, "state")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr></hr>
            <Row> {/* Work Experience section */}
              <Col>
                <Row className="justify-content-start align-items-center mb-3">
                  <Col sm="auto"><h5>Work Experience</h5></Col>
                  <Col sm="auto">
                    <Button 
                      variant="dark" 
                      onClick={() => this.props.addWorkExp(-1, null)} >
                      Add
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    { /* Maps the workExp array and creates a component for each */
                      this.props.workExp.map((currentWorkExp, index) =>
                      <CvFormWorkExp
                        key={index}
                        index={index}
                        currentWorkExp={currentWorkExp}
                        removeWorkExp={this.props.removeWorkExp}
                        addWorkExp={this.props.addWorkExp}
                        />
                    )}
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