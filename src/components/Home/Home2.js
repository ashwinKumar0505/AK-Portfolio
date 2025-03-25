import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              I am a <b className="purple">Senior Software Engineer</b> with
              more than <b className="purple">5 years</b> of expertise in
              designing and developing scalable, high-performance web
              applications.
              <br />
              <br />
              As the <b className="purple">ATC (point of contact)</b> for three
              critical applications, I take ownership of{" "}
              <i>
                <b className="purple">system architecture, troubleshooting,</b>
              </i>{" "}
              and <b className="purple">optimizing workflows</b>.
              <br />
              <br />I am actively involved in{" "}
              <b className="purple">release activities</b>, ensuring smooth
              deployments and minimizing risks in production environments.
              <br />
              <br />
              With strong <b className="purple">leadership skills</b>, I mentor
              teams, drive technical initiatives, and collaborate effectively
              across departments to deliver{" "}
              <i>
                <b className="purple">high-quality software solutions</b>.
              </i>
              <br />
              <br />
              Passionate about leveraging{" "}
              <i>
                <b className="purple">modern technologies</b>
              </i>{" "}
              to build{" "}
              <b className="purple">innovative and efficient applications</b>{" "}
              that enhance user experiences.
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
