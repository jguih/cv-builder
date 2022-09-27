import React from "react";
import { Card } from "react-bootstrap";
import CvPreviewWorkExp from "./CvPreviewWorkExp";

class CvPreview extends React.Component {
  render() {
    return (
      <Card border="dark">
        <Card.Header>CV Preview</Card.Header>
        <Card.Body>
          {/* Persons name */}
          <Card.Title style={{ fontSize: 40 + 'px' }}>
            {(this.props.firstName || this.props.lastName) === "" ? 
              "Your Name" : this.props.firstName + " " + this.props.lastName}
          </Card.Title>
          {/* Info section */}
          <Card.Text>
            {(this.props.email === "" ? "email" : this.props.email)
              + " | " + (this.props.phoneNumber === "" ? "phone" : this.props.phoneNumber) 
              + " | " + (this.props.city === "" ? "city" : this.props.city) 
              + ", " + (this.props.state === "" ? "state" : this.props.state)}
          </Card.Text>
          <hr></hr>
          <h5>Work Experience</h5>
          {/* Creates a CvPreviewWorkExp component for every work experience object */}
          {this.props.workExp.map((currentWorkExp, index) => (
            <CvPreviewWorkExp workExp={currentWorkExp} key={index}></CvPreviewWorkExp>
          ))}
          <hr></hr>
          <h5>Education</h5>
        </Card.Body>
      </Card>
    );
  }
}

export default CvPreview;