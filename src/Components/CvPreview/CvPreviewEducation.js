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
          <Col sm="auto">
            <b>{currentEducation.schoolName || "School name"}</b>
          </Col>
          <Col sm="auto">
            {showDate()}
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col sm="auto">
            {currentEducation.diploma || "Diploma"}
          </Col>
          <Col sm="auto">
            {currentEducation.location || "location"}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CvPreviewEducation;