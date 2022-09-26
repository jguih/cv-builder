import './App.css';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CvForm from './Components/CvForm';
import CvPreview from './Components/CvPreview';

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
      // Work Experience states array
      workExp: [{
        position: "",
        startDate: "",
        endDate: "",
        company: "",
        location: "",
      }],
      educationProps: [{

      }],
    };

    this.addWorkExp = this.addWorkExp.bind(this);
    this.removeWorkExp = this.removeWorkExp.bind(this);
  }

  // Add a new workExp component
  addWorkExp() {
    const workExp = this.state.workExp;
    workExp.push({
      position: "",
      startDate: "",
      endDate: "",
      company: "",
      location: "",
    });
    this.setState({
      workExp: workExp
    });
  }

  // Remove a work experience item from array
  removeWorkExp(index) {
    const workExp = this.state.workExp.filter((item) => item !== this.state.workExp[index]);
    this.setState({
      workExp: workExp,
    })
  }

  render() {
    return (
      <Container fluid className="cv-container">
        <Row>
          <Col lg="6" className="cv-form mb-3">
            <CvForm
              onChangeFirstName={(event) => this.setState({ firstName: event.target.value })}
              onChangeLastName={(event) => this.setState({ lastName: event.target.value })}
              onChangeEmail={(event) => this.setState({ email: event.target.value })}
              onChangePhoneNumber={(event) => this.setState({ phoneNumber: event.target.value })}
              onChangeCity={(event) => this.setState({ city: event.target.value })}
              onChangeState={(event) => this.setState({ state: event.target.value })}
              addWorkExp={this.addWorkExp}
              removeWorkExp={this.removeWorkExp}
              workExp = {this.state.workExp}
              education = {this.state.education}
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
            />
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;