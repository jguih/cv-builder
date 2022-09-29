import './style/App.css';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CvForm from './Components/CvForm/CvForm';
import CvPreview from './Components/CvPreview/CvPreview';
import WorkExp from './WorkExp';
import Education from './Education';

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
      workExp: [
        new WorkExp(),
      ],
      education: [
        new Education(),
      ],
    };
    this.addWorkExp = this.addWorkExp.bind(this);
    this.removeWorkExp = this.removeWorkExp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
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

  // Adds or updates an education
  addEducation(index, newEducation) {
    const education = this.state.education;

    if (index < 0) {
      education.push(new Education())
    } else if (newEducation instanceof Education) {
      education.slice(index, 1, newEducation);
    }

    this.setState({
      education: education
    });
  }

  // Removes an education by index
  removeEducation(index) {
    const education = this.state.education;
    education.splice(index, 1);
    this.setState({
      education: education
    });
  }

  // Update states based on user input in CvForm component
  handleOnChange(event, property) {
    this.setState({
      [property]: event.target.value,
    });
  }

  render() {
    return (
      <Container className="cv-container">
        <Row>
          <Col lg="5" className="cv-form mb-3">
            <CvForm
              handleOnChange={this.handleOnChange}
              addWorkExp={this.addWorkExp}
              removeWorkExp={this.removeWorkExp}
              workExp={this.state.workExp}
              addEducation={this.addEducation}
              removeEducation={this.removeEducation}
              education={this.state.education}
            />
          </Col>
          <Col lg="7" className="cv-preview">
            <div className="sticky-top" >
              <CvPreview
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                phoneNumber={this.state.phoneNumber}
                city={this.state.city}
                state={this.state.state}
                workExp={this.state.workExp}
                education={this.state.education}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;