import React from "react";
import { Col, Row } from "react-bootstrap";

class CvPreviewEducation extends React.Component {
  render() {
    const { currentEducation } = this.props;

    const showDate = () => {
      if(currentEducation['startDate'] && !currentEducation['endDate']) {
        return currentEducation['startDate'];
      } else if (!currentEducation['startDate'] && currentEducation['endDate']) {
        return currentEducation['endDate'];
      } else if (currentEducation['startDate'] && currentEducation['endDate']) {
        return currentEducation['startDate'] + " - " + currentEducation['endDate'];
      } else { return "start date - end date" }
    };

    return (
      <div className="mb-3">
        <Row className="justify-content-between">
          <Col xs="auto">
            <b>{currentEducation.schoolName || "School name"}</b>
          </Col>
          <Col xs="auto">
            {showDate()}
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col xs="auto">
            {currentEducation.diploma || "Diploma"}
          </Col>
          <Col xs="auto">
            {currentEducation.location || "location"}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CvPreviewEducation;