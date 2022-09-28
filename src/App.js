import './App.css';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CvForm from './Components/CvForm';
import CvPreview from './Components/CvPreview';
import WorkExp from './WorkExp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      state: "",
      // Work Experiences
      workExp: [
        new WorkExp(),
      ],
      // Education
      education: [

      ],
    };
    this.addWorkExp = this.addWorkExp.bind(this);
    this.removeWorkExp = this.removeWorkExp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // Add or update a work experience
  addWorkExp(index, newWorkExp) {
    const workExp = this.state.workExp;

    if (index < 0) {
      workExp.push(new WorkExp());
    } else if (newWorkExp instanceof WorkExp) {
      workExp.slice(index, 1, newWorkExp);
    }

    this.setState({
      workExp: workExp
    });
  }

  // Remove a work experience by index
  removeWorkExp(index) {
    const workExp = this.state.workExp;
    workExp.splice(index, 1);
    this.setState({
      workExp: workExp,
    })
  }

  // Update states based on user input in CvForm component
  handleOnChange(event, property) {
    this.setState({
      [property]: event.target.value,
    });
  }

  render() {
    return (
      <Container fluid className="cv-container">
        <Row>
          <Col lg="6" className="cv-form mb-3">
            <CvForm
              handleOnChange={this.handleOnChange}
              addWorkExp={this.addWorkExp}
              removeWorkExp={this.removeWorkExp}
              workExp={this.state.workExp}
              education={this.state.education}
            />
          </Col>
          <Col lg="6" className="cv-preview">
            <CvPreview
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              phoneNumber={this.state.phoneNumber}
              city={this.state.city}
              state={this.state.state}
              workExp={this.state.workExp}
            />
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;