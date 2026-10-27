import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Senior Frontend Engineer</b> with{" "}
              <b className="purple">7 years</b> of experience designing,
              building, and scaling high-performance web applications across{" "}
              <b className="purple">
                fintech, payments, e-commerce, and enterprise domains
              </b>
              .
              <br />
              <br />I have strong expertise in frontend engineering with{" "}
              <i>
                <b className="purple">React, Next.js, TypeScript,</b>
              </i>{" "}
              and modern JavaScript ecosystems, complemented by hands-on
              experience in{" "}
              <b className="purple">
                backend development, APIs, cloud services,
              </b>{" "}
              and <b className="purple">full-stack system design</b>.
              <br />
              <br />I have a proven track record of leading{" "}
              <b className="purple">architecture decisions</b>, developing
              scalable{" "}
              <i>
                <b className="purple">
                  micro-frontend and distributed systems
                </b>
              </i>
              , optimizing <b className="purple">Core Web Vitals</b> and
              application performance, and delivering mission-critical products
              end-to-end.
              <br />
              <br />
              Passionate about leveraging{" "}
              <i>
                <b className="purple">AI-assisted development workflows</b>
              </i>{" "}
              and <b className="purple">intelligent product capabilities</b> to
              accelerate delivery, improve developer productivity, and enhance
              user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashwin-kumar-bb53ba187/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/ashwinKumar0505"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jjashwinkumar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
