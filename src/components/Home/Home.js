import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import homeLogo from "../../Assets/home-image.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header" style={{ textAlign: "center" }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ashwin Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="type-mobile-view">
                <Type />
              </div>

              <div className="d-flex justify-content-center z-3">
                <Button
                  variant="outline-light"
                  href="/experience"
                  style={{ marginRight: "10px" }}
                >
                  View Projects
                </Button>
                <Button variant="outline-light" href="/contact">
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: "20px" }}>
                <a
                  href="https://www.linkedin.com/in/ashwin-kumar-bb53ba187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                  }}
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/ashwinKumar0505"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <AiFillGithub />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
