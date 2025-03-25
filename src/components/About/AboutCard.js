import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwin Kumar </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            <br />I am a <b className="purple">Senior Software Engineer</b> with
            more than <b className="purple">5 years</b> of expertise in
            designing and developing scalable, high-performance web
            applications.
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
            <b className="purple">innovative and efficient applications</b> that
            enhance user experiences.
          </p>
          <br />
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
