import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const WorkIcon = () => <></>;

const Experience = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading" style={{ marginBottom: "50px" }}>
        Professional{" "}
        <strong className="purple">Experience & Contributions</strong>
      </h1>
      <Container>
        <VerticalTimeline>
          {/* Visa Inc. Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="June 2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "10px" }}
            >
              Visa Inc. - Senior Software Engineer
            </h3>
            <p>
              Driving innovation and security in digital payment processing,
              ensuring seamless user experiences for millions of users.
            </p>
            <ul style={{ textAlign: "left" }}>
              <li>
                Enhancing and maintaining Authorize.Net Payment Applications.
              </li>
              <li>
                Primary POC for three critical micro-applications, ensuring
                security and stability.
              </li>
              <li>
                Leading Agile teams for successful and timely project
                deliveries.
              </li>
              <li>
                <strong>Tech Stack:</strong> React.js, TypeScript, JavaScript,
                .NET (C#), Java, AWS, Jest, GitHub, Jenkins, CI/CD pipelines.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* TEK Systems Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 – June 2023"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "10px" }}
            >
              TEK Systems - Senior Software Engineer
            </h3>
            <p>
              Designed and developed scalable web applications for enterprise
              clients in the energy and e-commerce sectors.
            </p>
            <ul style={{ textAlign: "left" }}>
              <li>
                Led UI development for <strong>Schneider Electric's</strong>{" "}
                EcoStruxure Power Commission, optimizing performance.
              </li>
              <li>
                Enhanced product pages, profile pages, and checkout flows for{" "}
                <strong>Tata Cliq</strong>, improving user engagement.
              </li>
              <li>
                Implemented RESTful APIs and enhanced platform scalability.
              </li>
              <li>
                Drove Agile adoption, improving team efficiency and accelerating
                product delivery.
              </li>
              <li>
                <strong>Tech Stack:</strong> React.js, Next.js, AWS, AngularJS,
                Java, Jest, GitHub, Jenkins, CI/CD pipelines.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Codebrahma Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 – Nov 2021"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "10px" }}
            >
              Codebrahma - Software Developer
            </h3>
            <p>
              Worked on cutting-edge web applications and contributed to widely
              adopted open-source projects.
            </p>
            <ul style={{ textAlign: "left" }}>
              <li>
                Started as an intern, gaining hands-on experience in frontend,
                backend, and cloud computing.
              </li>
              <li>
                Developed critical features for various enterprise client
                projects.
              </li>
              <li>
                Contributed to open-source React libraries used by the developer
                community.
              </li>
              <li>
                <strong>AccuKnox:</strong> Developed and optimized a cloud-based
                security platform.
              </li>
              <li>
                <strong>Composer:</strong> Senior developer for Codebrahma's
                open-source React website builder.
              </li>
              <li>
                <strong>Tech Stack:</strong> React.js, jQuery, JavaScript,
                TypeScript, SQL, Java Microservices, AWS, Tailwind, Material-UI,
                Chakra-UI, Bootstrap.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
};

export default Experience;
