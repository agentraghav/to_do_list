import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
export const Body = () => {
  return (
    <Container fluid className='back'>
      <Row className='box'>
        <Col>
          <h2 className='head'>
            To Do List <i class='fas fa-pencil-alt'></i>
          </h2>
        </Col>
        <Col>
          <input type='text' id='list' onClick={handleInput} />
        </Col>
      </Row>
    </Container>
  );
};
