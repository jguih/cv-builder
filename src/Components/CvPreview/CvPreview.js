import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import CvPreviewWorkExp from "./CvPreviewWorkExp";
import '../../style/CvPreview.css'
import CvPreviewEducation from "./CvPreviewEducation";
import ReactToPrint from 'react-to-print';

class CvPreview extends React.Component {
  render() {
    const { firstName, lastName, email, phoneNumber, city, state, workExp, education } = this.props;

    return (
      <Card border="dark" className="shadow">
        <Card.Header>
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              CV Preview
            </Col>
            <Col xs="auto">
              <ReactToPrint
                trigger={() => {
                  return <Button>Export PDF</Button>
                }}
                content={() => this.componentRef}
              />
            </Col>
          </Row>
        </Card.Header>
        <div ref={el => (this.componentRef = el)}>
          <Card.Body>
            {/* Persons name */}
            <Card.Title className="name mb-0">
              {(firstName || lastName) === "" ? "Your Name" : firstName + " " + lastName}
            </Card.Title>
            {/* Info section */}
            <div className="mb-3">
              {(email || "email") + " | " +
                (phoneNumber || "phone number") + " | " +
                (city || "city") + ", " +
                (state || "state")}
            </div>
            <h5 className="title">Work Experience</h5>
            <Hr></Hr>
            {/* Creates a CvPreviewWorkExp component for every work experience object */
              workExp.map((currentWorkExp, index) => {
                return <CvPreviewWorkExp
                  currentWorkExp={currentWorkExp}
                  key={index} />
              })
            }
            <h5 className="title">Education</h5>
            <Hr></Hr>
            {/* Creates a CvPreviewEducation component for every education object */
              education.map((currentEducation, index) => {
                return <CvPreviewEducation
                  currentEducation={currentEducation}
                  key={index} />
              })
            }
          </Card.Body>
        </div>
      </Card>
    );
  }
}

function Hr() {
  return (
    <hr className="mt-0 mb-0"></hr>
  );
}

export default CvPreview;