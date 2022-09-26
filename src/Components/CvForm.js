import React from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormControl, Card } from 'react-bootstrap';

class CvForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card border="dark">
        <Card.Header>Your info</Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl
                    type='text'
                    onChange={this.props.onChangeFirstName}
                  />
                </FormGroup>
              </Col>
              <Col>
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
              <Col>
                <FormGroup>
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="example@email.com"
                    onChange={this.props.onChangeEmail}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl
                    type="phone"
                    onChange={this.props.onChangePhoneNumber}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FormGroup>
                  <FormLabel>City</FormLabel>
                  <FormControl 
                    type="text"
                    onChange={this.props.onChangeCity}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>State</FormLabel>
                  <FormControl 
                    type="text"
                    onChange={this.props.onChangeState}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default CvForm;