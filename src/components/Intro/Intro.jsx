/* import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Intro.css'

const Intro = () => {
  useEffect(() => {
    gsap.to(".header-image", {
      rotationY: 180,
      duration: 5,
      repeat: 0, 
      ease: "none" // Linear easing
    });
  }, []);

  return (
    <div>
        <div className="row flex-lg-row-reverse align-items-center g-5 m-0 bg-light" style={{ padding: '2.3rem 7.5rem 7rem 7.5rem' }}>
            <div className="col-lg-6 p-0">
                <img src="https://images.unsplash.com/photo-1577760258779-e787a1733016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block mx-lg-auto img-fluid rounded header-image p-0" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6 text-start header-content p-0">
                <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-3">Hi! My name is <span id='name'>Mathew Anto</span></h1>
                <p className="lead"><b>MERN FULL STACK DEVELOPER</b></p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-warning text-secondary px-4 me-md-2 knowMore">Know more!</button>
                {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro */


import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Intro.css'

const Intro = () => {
  useEffect(() => {
    gsap.to(".intro-image", {
      rotationY: 180,
      duration: 5,
      repeat: 0, 
      ease: "none" // Linear easing
    });
  }, []);

  return (
    <Container fluid className='p-0 py-5' id='introPage'>
      <Row className="flex-lg-row-reverse align-items-center g-5 m-0" style={{ padding: '2.3rem 7.5rem 7rem 7.5rem' }}>
        <Col lg={6} className="p-0">
          <img src="https://images.unsplash.com/photo-1577760258779-e787a1733016?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block mx-lg-auto img-fluid rounded intro-image p-0" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </Col>
        <Col lg={6} className="text-start intro-content p-0">
          <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-3">Hi! My name is <span id='name'>Mathew Anto</span></h1>
          <p className="lead"><b>MERN FULL STACK DEVELOPER</b></p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button variant="warning" className="text-secondary px-4 me-md-2 knowMore">Know more!</Button>
            {/* <Button variant="outline-secondary" className="btn-lg px-4">Default</Button> */}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro;
