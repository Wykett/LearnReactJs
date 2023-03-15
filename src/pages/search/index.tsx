import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.scss";
import personData from '../../mockdata/persons.json';

const Counter: React.FC = () => {

    const [keyword, setKeyword] = useState("");

    return (
      <div>
        <h1>Search</h1>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control type="text" placeholder="Search..." onChange={(event) => {setKeyword(event.target.value)}} />
          </Col>
          <Col xs="auto">
            {/* <Button variant="primary" type="submit" onClick={() => searchKeyword(keyword)} >
              Search
            </Button> */}
          </Col>
        </Row>
        {personData.filter((value) => {
          if (keyword === "") {
            return value
          } else if (value.first_name.toLowerCase().includes(keyword.toLowerCase())) {
            return value
          }
        }).
        map((value, key) => {
          return (
            <div className="person-row" key={key}>
              <p>{value.first_name + ' ' + value.last_name}</p>
            </div> 
          )
        })}
      </div>
    );
  }
  
  export default Counter;
  