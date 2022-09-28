import React from "react";
import { Card } from "react-bootstrap";
import CvPreviewWorkExp from "./CvPreviewWorkExp";
import './CvPreview.css'

class CvPreview extends React.Component {
  render() {
    const { firstName, lastName, email, phoneNumber, city, state, workExp } = this.props;

    return (
      <Card border="dark">
        <Card.Header>CV Preview</Card.Header>
        <Card.Body>
          {/* Persons name */}
          <Card.Title className="name">
            {(firstName || lastName) === "" ? "Your Name" : firstName + " " + lastName}
          </Card.Title>
          {/* Info section */}
          <Card.Text>
            { (email || "email") + " | " + 
              (phoneNumber || "phone number") + " | " + 
              (city || "city") + ", " + 
              (state || "state")}
          </Card.Text>
          <h5 className="title">Work Experience</h5>
          <Hr></Hr>
          {/* Creates a CvPreviewWorkExp component for every work experience object */}
          {workExp.map((currentWorkExp, index) => (
            <CvPreviewWorkExp currentWorkExp={currentWorkExp} key={index}></CvPreviewWorkExp>
          ))}
          <h5>Education</h5>
          <Hr></Hr>
        </Card.Body>
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