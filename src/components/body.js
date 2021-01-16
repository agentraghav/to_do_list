import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
export const Body = () => {
  return (
    <Container fluid className='back'>
      <Row>
        <Col className='box'>
          <h1>Hello World</h1>
        </Col>
      </Row>
    </Container>
  );
};
