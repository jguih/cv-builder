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
          <Col xs="auto">
            <b>{currentWorkExp['position'] || "Position"}</b>
          </Col>
          <Col xs="auto">
            {showDate()}
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col xs="auto">
            {currentWorkExp['company'] || "Company"}
          </Col>
          <Col xs="auto">
            {currentWorkExp['location'] || "location"}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CvPreviewWorkExp;