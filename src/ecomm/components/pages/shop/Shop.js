import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Col,Accordion,Button } from 'react-bootstrap';
import Coffee from '../../../assets/images/Coffee.png'


function Shop() {
    return (
      <Container className="shopAlign">
        <Row>
          <img src={Coffee} alt='Coffee'/>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col xs={3}>        
            <Row>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Company</Accordion.Header>
                  <Accordion.Body>
                      A return policy is a set of rules a retailer creates to manage how customers 
                    return and exchange unwanted merchandise they've purchased. Return policies tell 
                    customers what items can be returned and for what reasons, as well as the timeframe
                    over which returns are accepted
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    A return policy is a set of rules a retailer creates to manage how customers 
                    return and exchange unwanted merchandise they've purchased. Return policies tell 
                    customers what items can be returned and for what reasons, as well as the timeframe
                    over which returns are accepted
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                      Citizens online and mobile-friendly, policyholder self-service tool.
                    You can use myPolicy to view and download policy documents 
                    (excluding claims documents); submit a claim; and view your policy,
                    claims and billing information. You also can make payments under certain conditions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
          <Col xs={9}>
            <Row>
              <Col>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Everyday Essentials</Button>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Cleaning Essentials</Button>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Immunity & Health</Button>
                <Button style={{backgroundColor: '#004197', borderRadius: '1px',width: '25%'}} variant="primary">Vitamin Supplemer</Button>
              </Col>
            </Row>
            <Row>
              <Col><h1>3 of 3</h1></Col>
              <Col><h1>3 of 3</h1></Col>
              <Col><h1>3 of 3</h1></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default Shop;