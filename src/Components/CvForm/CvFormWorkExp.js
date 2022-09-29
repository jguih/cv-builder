import React from "react";
import { Row, Col, FormGroup, FormLabel, Card, FormControl, Button } from 'react-bootstrap';

class CvFormWorkExp extends React.Component {
  render() {
    const index = this.props.index;
    const currentWorkExp = this.props.currentWorkExp;

    // Updates the current work exp attributes and updates the main app state
    const handleOnChange = (event, property) => {
      currentWorkExp[property] = event.target.value;
      // Updates the work exp array state in App component
      this.props.addWorkExp(index, currentWorkExp);
    }

    return (
      <Card className="mb-3">
        <Card.Header>Work Experience {this.props.index + 1}</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <FormGroup>
                <FormLabel>Role</FormLabel>
                <FormControl
                  type="text"
                  value={currentWorkExp.position || ""}
                  onChange={(e) => handleOnChange(e, "position")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="6">
              <FormGroup>
                <FormLabel>From</FormLabel>
                <FormControl
                  type="text"
                  value={currentWorkExp.startDate || ""}
                  onChange={(e) => handleOnChange(e, "startDate")}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <FormLabel>To</FormLabel>
                <FormControl
                  type="text"
                  value={currentWorkExp.endDate || ""}
                  onChange={(e) => handleOnChange(e, "endDate")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="6">
              <FormGroup>
                <FormLabel>Company</FormLabel>
                <FormControl 
                  type="text"
                  value={currentWorkExp.company || ""}
                  onChange={(e) => handleOnChange(e, "company")}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <FormLabel>Location</FormLabel>
                <FormControl 
                  type="text"
                  value={currentWorkExp.location || ""}
                  onChange={(e) => handleOnChange(e, "location")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="auto">
              <Button
                variant="danger"
                onClick={() => this.props.removeWorkExp(index)} >
                Remove
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CvFormWorkExp;