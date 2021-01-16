import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/styles.css';
export const Body = () => {
  let [list, setList] = useState(
    JSON.parse(window.localStorage.getItem('list')) || []
  );
  let [compList, setCompList] = useState(
    JSON.parse(window.localStorage.getItem('comp_list')) || []
  );
  let curr_value;
  const handleInput = (e) => {
    curr_value = e.target.value;
  };

  const handleAdd = (e) => {
    let inp = document.getElementById('list').value;
    if (inp.length > 0) {
      const obj = { id: '', todo: curr_value };
      list = list.map((todo, index) => {
        return { ...todo, id: index };
      });
      list.push({ ...obj, id: list.length });
      window.localStorage.setItem('list', JSON.stringify(list));
      window.location.reload();
    }
  };

  const handleDel = (e) => {
    let obj = { id: '', comp: list[Number(e.target.id)].todo };
    compList = compList.map((complete, index) => {
      return { ...complete, id: index };
    });
    compList.push({ ...obj, id: compList.length });
    window.localStorage.setItem('comp_list', JSON.stringify(compList));
    list.splice(Number(e.target.id), 1);
    window.localStorage.setItem('list', JSON.stringify(list));
    window.location.reload();
  };

  const handleClear = (e) => {
    setList([]);
    setCompList([]);
    window.location.reload();
  };

  useEffect(() => {
    setList(list);
    window.localStorage.setItem('list', JSON.stringify(list));
    setCompList(compList);
    window.localStorage.setItem('comp_list', JSON.stringify(compList));
  }, [list, compList]);

  return (
    <Container fluid className='back'>
      <Row className='box'>
        <Col>
          <h2 className='head'>
            To Do List <i className='fas fa-pencil-alt'></i>
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
              aria-hidden='true'></i>{' '}
            <i
              className='fa fa-trash clear'
              onClick={handleClear}
              aria-hidden='true'></i>
          </Col>
          <Col>
            {list.map((item, index) => (
              <Alert key={index} variant='danger' className='li-item'>
                <i
                  key={index}
                  id={index}
                  className='fa fa-times del'
                  onClick={handleDel}
                  aria-hidden='true'></i>
                {item.todo}
              </Alert>
            ))}
          </Col>
          <Col>
            <h3 className='comp'>Completed Tasks</h3>
          </Col>
          <Col>
            {compList.map((item, index) => (
              <Alert key={index} variant='success' className='li-item'>
                <p className='complete'>{item.comp}</p>
              </Alert>
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
