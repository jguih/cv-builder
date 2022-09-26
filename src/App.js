import './App.css';
import React from 'react';
import { Form, FormLabel, FormGroup, FormControl, Row, Col, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <Container fluid className="cv-container">
        <Row>
          <Col lg="6" className="cv-form">
            <Form>
              <Row>
                <Col>
                  <FormGroup className='mb-3'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl type='text' placeholder='Your First Name'></FormControl>
                  </FormGroup>
                </Col>
                <Col> 
                  <FormGroup className='mb-3'>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type='text' placeholder='Your Last Name'></FormControl>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg="6" className="cv-preview">
            <Alert variant='success'>
              Your CV
              <hr></hr>
            </Alert>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
