import React from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormControl, Card, Button } from 'react-bootstrap';
import CvFormEducation from "./CvFormEducation";
import CvFormWorkExp from "./CvFormWorkExp";

class CvForm extends React.Component {
  render() {
    const { handleOnChange, info } = this.props;

    return (
      <Card border="dark" className="shadow">
        <Card.Header>Your info</Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col sm="6">
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl
                    type="text"
                    value={info.firstName || ""}
                    onChange={(event) => handleOnChange(event, "firstName")}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl
                    type="text"
                    value={info.lastName || ""}
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
                    value={info.email || ""}
                    onChange={(event) => handleOnChange(event, "email")}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl
                    type="phone"
                    value={info.phoneNumber || ""}
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
                    value={info.city || ""}
                    onChange={(event) => handleOnChange(event, "city")}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <FormLabel>State</FormLabel>
                  <FormControl
                    type="text"
                    value={info.state || ""}
                    onChange={(event) => handleOnChange(event, "state")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr></hr>
            <Row> {/* Work Experience section */}
              <Col>
                <Row className="justify-content-start align-items-center mb-3">
                  <Col xs="auto"><h5>Work Experience</h5></Col>
                  <Col xs="auto">
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
                        />)
                    }
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr></hr>
            <Row> {/* Education section */}
              <Col>
                <Row className="justify-content-start align-items-center mb-3">
                  <Col xs="auto"><h5>Education</h5></Col>
                  <Col xs="auto">
                    <Button
                      variant="dark"
                      onClick={() => this.props.addEducation(-1, null)}>
                      Add
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    { /* Maps the education array and creates a component for each */
                      this.props.education.map((currentEducation, index) =>
                        <CvFormEducation
                          key={index}
                          index={index}
                          currentEducation={currentEducation}
                          addEducation={this.props.addEducation}
                          removeEducation={this.props.removeEducation}
                        />)
                    }
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-center">
              <Col>
                <Button 
                  className="w-100 mb-1" 
                  variant="primary" 
                  onClick={this.props.loadExample}> 
                  Load Example</Button>
                <Button 
                  className="w-100 mb-1" 
                  variant="danger"
                  onClick={this.props.resetState}
                  >
                  Reset</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default CvForm;