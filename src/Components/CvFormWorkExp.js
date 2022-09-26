import React from "react";
import { Row, Col, FormGroup, FormLabel, Card, FormControl, Button } from 'react-bootstrap';

class CvFormWorkExp extends React.Component {
  render() {
    return (
      <Card className="mb-3" sm="auto">
        <Card.Header>Work Experience {this.props.index + 1}</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <FormGroup>
                <FormLabel>Position</FormLabel>
                <FormControl type="text"></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="6">
              <FormGroup>
                <FormLabel>Start date</FormLabel>
                <FormControl type="text"></FormControl>
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <FormLabel>End date</FormLabel>
                <FormControl type="text"></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="auto">
              <Button variant="danger" onClick={() => this.props.removeWorkExp(this.props.index)}>Remove</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CvFormWorkExp;