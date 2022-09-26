import React from "react";
import { Card } from "react-bootstrap";

class CvPreview extends React.Component {
  render() {
    return (
      <Card border="dark">
        <Card.Header>CV Preview</Card.Header>
        <Card.Body>
          <Card.Title style={{fontSize: 40+'px'}}>{this.props.firstName + " " + this.props.lastName}</Card.Title>
          <Card.Text>
            {this.props.email + " | " + this.props.phoneNumber + 
            " | " + this.props.city + ", " + this.props.state}
          </Card.Text>
          <hr></hr>
        </Card.Body>
      </Card>
    );
  }
}

export default CvPreview;