import React from "react";
import { Card, Row, Col, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

class CvFormEducation extends React.Component {
  render() {
    const index = this.props.index;
    const currentEducation = this.props.currentEducation;

    const handleOnChange = (event, property) => {
      currentEducation[property] = event.target.value;
      this.props.addEducation(index, currentEducation)
    }

    return (
      <Card className="mb-3">
        <Card.Header>Education {index + 1}</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <FormGroup>
                <FormLabel>School name</FormLabel>
                <FormControl
                  type="text"
                  value={currentEducation.schoolName || ""}
                  onChange={(e) => handleOnChange(e, "schoolName")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="6">
              <FormGroup>
                <FormLabel>Start date</FormLabel>
                <FormControl
                  type="text"
                  value={currentEducation.startDate || ""}
                  onChange={(e) => handleOnChange(e, "startDate")}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>End date</FormLabel>
                <FormControl
                  type="text"
                  value={currentEducation.endDate || ""}
                  onChange={(e) => handleOnChange(e, "endDate")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm="6">
              <FormGroup>
                <FormLabel>Diploma</FormLabel>
                <FormControl
                  type="text"
                  value={currentEducation.diploma || ""}
                  onChange={(e) => handleOnChange(e, "diploma")}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Location</FormLabel>
                <FormControl
                  type="text"
                  value={currentEducation.location || ""}
                  onChange={(e) => handleOnChange(e, "location")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="auto">
              <Button
                variant="danger" 
                onClick={() => this.props.removeEducation(index)}>
                Remove
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CvFormEducation;