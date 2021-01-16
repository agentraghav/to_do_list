import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/styles.css';
export const Body = () => {
  let [list, setList] = useState(
    JSON.parse(window.localStorage.getItem('list')) || []
  );
  let curr_value;
  const handleInput = (e) => {
    curr_value = e.target.value;
  };

  const handleAdd = (e) => {
    if (curr_value !== '') {
      const obj = { id: '', todo: curr_value };
      list = list.map((todo, index) => {
        return { ...todo, id: index };
      });
      list.push({ ...obj, id: list.length });
      window.localStorage.setItem('list', JSON.stringify(list));
      window.location.reload();
    }
  };

  return (
    <Container fluid className='back'>
      <Row className='box'>
        <Col>
          <h2 className='head'>
            To Do List <i class='fas fa-pencil-alt'></i>
          </h2>
          <Col className='inp'>
            <input
              onChange={handleInput}
              required
              type='text'
              id='list'
              placeholder='Add to your list'
            />
            <i
              className='fa fa-plus add'
              onClick={handleAdd}
              aria-hidden='true'></i>
          </Col>
          <Col>
            {list.map((item, index) => (
              <Alert variant='danger' className='li-item' key={index}>
                <i class='fa fa-times del' aria-hidden='true'></i>'{item.todo}
              </Alert>
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
