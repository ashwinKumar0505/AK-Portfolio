import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwin Kumar </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            <br />I am a <b className="purple">Senior Frontend Engineer</b> with{" "}
            <b className="purple">7 years</b> of experience designing, building,
            and scaling high-performance web applications across{" "}
            <b className="purple">
              fintech, payments, e-commerce, and enterprise domains
            </b>
            .
            <br />
            <br />I specialize in frontend architecture and engineering with{" "}
            <b className="purple">
              React, Next.js, TypeScript, Tailwind CSS, Material UI,
            </b>{" "}
            and <b className="purple">Micro-Frontends</b>, complemented by
            hands-on experience in{" "}
            <b className="purple">
              Node.js, Java (Spring Boot), .NET (C#), AWS,
            </b>{" "}
            and <b className="purple">CI/CD pipelines</b>.
            <br />
            <br />
            Proven track record of leading{" "}
            <b className="purple">architecture decisions</b>, optimizing{" "}
            <b className="purple">Core Web Vitals &amp; Lighthouse scores</b>,
            mentoring engineers, and leveraging{" "}
            <i>
              <b className="purple">
                AI-assisted development &amp; LLM workflows
              </b>
            </i>{" "}
            to accelerate delivery and improve developer productivity.
            <br />
            <br />
            <b className="purple">Awards &amp; Achievements:</b>
            <ul>
              <li className="about-activity">
                🏆 <b>Runner-Up – Visa Engineering Hackathon:</b> Built an
                AI-powered Image-to-Code generation solution leveraging
                LLM-based models to convert UI mockups into structured frontend
                components.
              </li>
              <li className="about-activity" style={{ marginTop: "8px" }}>
                🚀 Contributed to open-source React libraries adopted by the
                developer community, enhancing reusable component patterns.
              </li>
            </ul>
            <b className="purple">Education:</b>
            <br />
            🎓 <b>BE Computer Science</b> — Kongu Engineering College, Erode,
            India (May 2016 – Mar 2020) | <b>Grade: 7.99</b>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
