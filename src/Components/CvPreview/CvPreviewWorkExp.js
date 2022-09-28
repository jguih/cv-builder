import React from "react";
import { Col, Row } from "react-bootstrap";

class CvPreviewWorkExp extends React.Component {
  render() {
    const { currentWorkExp } = this.props;

    return (
      <div className="mb-3">
        <Row className="justify-content-between">
          <Col sm="auto">
            <b>{currentWorkExp['position'] || "Position"}</b>
          </Col>
          <Col sm="auto">
            {(currentWorkExp['startDate'] || currentWorkExp['endDate'] ? 
              (currentWorkExp['startDate'] + " - " + currentWorkExp['endDate']) :
              "start date - end date")}
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col sm="auto">
            {currentWorkExp['company'] || "Company"}
          </Col>
          <Col sm="auto">
            {currentWorkExp['location'] || "location"}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CvPreviewWorkExp;