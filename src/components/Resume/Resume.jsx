import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="resumePage bg-light py-5" id="resume">
      <h1 id="resumeTitle" className="pb-3">Resume</h1>
      <Container className="resume">
        <Row>
          <Col className="titleContent ps-5 py-5 bg-danger col-5" data-aos="fade-down-right" data-aos-duration="3000" data-aos-easing="ease-in-sine">
            
              <p id="firstName" className="m-0">Mathew</p>
              <p id="lastName" className="m-0">Anto</p>
              <p id="desig" className="m-0">MERN Stack Intern</p>
            
          </Col>

          <Col className="connect bg-warning py-4 pe-5" data-aos="fade-down-left" data-aos-duration="3000" data-aos-easing="ease-in-sine">
            <p id="contactNum" className="m-0">+91 8124 36 49 69</p>
            <p id="emailID" className="m-0">mathewanto.19@gmail.com</p>
            <p id="linkedIn" className="m-0">www.linkedin.com/in/mathewanto</p>
            <p id="gitID" className="m-0">www.github.com/MathewAnto</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row className="devSkills" data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-in-sine">
              <p id="devSkillsTitle">WEB DEV SKILLS</p>
              <ul id="devSkillsContent">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Responsive Web Design</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MVC Architecture</li>
                <li>JSON Web Tokens (JWT)</li>
                <li>Git & Github</li>
              </ul>
            </Row>

            <Row className="softSkills" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
              <p id="softSkillsTitle">SOFT SKILLS</p>
              <ul id="softSkillsContent">
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Creativity</li>
                <li>Positive Attitude</li>
                <li>Interpersonal Skills</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Work Ethic</li>
                <li>Attention to detail</li>
              </ul>
            </Row>

            <Row className="interests" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
              <p id="interestsTitle">INTERESTS</p>
              <ul id="interestsContent">
                <li>Travel</li>
                <li>Food</li>
                <li>Cycling</li>
                <li>Reading</li>
                <li>Photography</li>
              </ul>
            </Row>
          </Col>

          <Col>
            <Row className="intro">
              <p id="introTitle">An Intro</p>
              <p id="introContent">
                <strong>"Intellectually curious"</strong> is how I would
                describe myself in two words. My curiosity has always made me
                interested in the world of programming, and finally, with my
                MERN Full Stack Development internship, I'm able to take my
                first step. My internship experience has not only allowed me to
                apply what I've learned but has also given me valuable insights
                into the real-world applications of programming concepts. I
                would love to start off my career in software development at a
                company that provides me with an environment of continuous
                learning and innovation.
              </p>
              <p id="dob">DOB: 16/11/1989</p>
              <p id="nation">Nationality: India</p>
            </Row>

            <Row className="projects" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
              <p id="projectsTitle">PROJECTS</p>
              <ul id="projectsContent">
                <li>
                  Youtube Clone - React.js, Node.js, Express.js and MongoDB
                  https://mathewanto.github.io/youtube-react/
                </li>
                <li>
                  User Registration with email OTP functionality + Login with
                  token validation for user and admin using JSON Web Tokens
                  https://github.com/MathewAnto/JWT-authentication-With-OTP
                </li>
                <li>
                  School (Student / Teacher) Database Management System -
                  React.js, Node.js, Express.js and MongoDB
                </li>
              </ul>
            </Row>
          </Col>

          <Col>
            <Row className="experience" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-in-sine">
              <p id="experienceTitle">EXPERIENCE</p>
              <p id="exp1">
                <strong>MERN Stack Intern</strong> GALTech Technologies Pvt.
                Ltd., Infopark Koratty
                <strong>Jan 2024 - Present</strong>
              </p>
              <p id="exp2">
                <strong>Operations Engineer</strong> Excellence Trading W. L.
                L., Doha - Qatar
                <strong>June 2017 - June 2023</strong>
              </p>
              <p id="exp3">
                <strong>Content Writer</strong> Wordist - Chennai
                <strong>Mar 2014 - Aug 2016</strong>
              </p>
            </Row>

            <Row className="education" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
              <p id="educationTitle">EDUCATION</p>
              <p id="edu1">
                <strong>B. E. Electrical & Electronics - AMCET,</strong> Anna
                University
                <strong>2011</strong>
              </p>
              <p id="edu2">
                <strong>12th - St. Ann's EMHSS,</strong> Kerala State Board
                <strong>2007</strong>
              </p>
              <p id="edu3">
                <strong>SSLC - Lourdes High School,</strong> Maharashtra State
                Board
                <strong>2005</strong>
              </p>
            </Row>

            <Row className="languages" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
              <p id="languagesTitle">LANGUAGES</p>
              <ul id="languagesContent">
                <li>English</li>
                <li>Malayalam</li>
                <li>Hindi</li>
                <li>Tamil</li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Resume