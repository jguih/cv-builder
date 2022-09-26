import './App.css';
import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
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
    };
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
