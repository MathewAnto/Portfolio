import React, { useEffect } from "react";
import './SayHello.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SayHello = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='say-hello' className="p-0 py-5">
        <h1>Say Hello!</h1>
        <Container className='say-hello-content'>
          <Row>
            <Col className='contactForm' data-aos="flip-left" data-aos-duration="1000" data-aos-easing="linear">

            </Col>
            <Col className='contactDetails' data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear">
              <p>+91 81 24 36 49 69</p>
              <p>mathewanto.19@gmail.com</p>
              <p><Link to='www.linkedin.com/in/mathewanto' >www.linkedin.com/in/mathewanto</Link></p>
            </Col>
          </Row>
        </Container>
    </div>
  )
})

export default SayHello