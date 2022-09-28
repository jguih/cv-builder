import React from "react";
import { Col, Row } from "react-bootstrap";

class CvPreviewWorkExp extends React.Component {
  render() {
    const { currentWorkExp } = this.props;

    const showDate = () => {
      if(currentWorkExp['startDate'] && !currentWorkExp['endDate']) {
        return currentWorkExp['startDate'];
      } else if (!currentWorkExp['startDate'] && currentWorkExp['endDate']) {
        return currentWorkExp['endDate'];
      } else if (currentWorkExp['startDate'] && currentWorkExp['endDate']) {
        return currentWorkExp['startDate'] + " - " + currentWorkExp['endDate'];
      } else { return "start date - end date" }
    };

    return (
      <div className="mb-3">
        <Row className="justify-content-between">
          <Col sm="auto">
            <b>{currentWorkExp['position'] || "Position"}</b>
          </Col>
          <Col sm="auto">
            {showDate()}
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