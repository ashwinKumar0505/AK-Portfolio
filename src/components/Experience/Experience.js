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
          {/* Moniepoint Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="July 2025 – Current"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "5px" }}
            >
              Moniepoint Group – Senior Frontend Engineer
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ marginBottom: "10px", fontSize: "1rem", opacity: 0.9 }}
            >
              Bengaluru, India
            </h5>
            <ul style={{ textAlign: "left" }}>
              <li>
                Led frontend architecture and development for{" "}
                <strong>MonieDesk</strong>, a large-scale enterprise operations
                platform serving <strong>8,000+ users</strong> across support
                and business teams. Led the complete frontend rebuild of
                MonieDesk from the ground up, driving the migration to a modern,
                scalable architecture using AI-assisted development workflows to
                accelerate delivery while maintaining code quality and
                consistency.
              </li>
              <li>
                Designed and developed scalable, reusable frontend applications
                using <strong>React, TypeScript, Tailwind CSS</strong>, and
                modern frontend engineering practices. Architected and
                implemented micro-frontend integrations to enable independent
                development, deployment, and scaling across multiple product
                teams while maintaining consistent UX and shared frontend
                standards.
              </li>
              <li>
                Improved operational efficiency by <strong>30%</strong> through
                workflow redesign, UI optimization, reusable component
                architecture, and frontend performance improvements. Reduced
                page load times by <strong>35%</strong> and increased{" "}
                <strong>Lighthouse scores from 68 to 90+</strong> through code
                splitting, lazy loading, caching, rendering optimizations, and
                bundle-size reduction.
              </li>
              <li>
                Enhanced CI/CD and frontend release processes, reducing
                production deployment failures by <strong>25%</strong> and
                improving deployment reliability. Led technical design reviews,
                established frontend engineering standards, and mentored junior
                engineers. Introduced AI-assisted development practices across
                the team, improving development productivity by{" "}
                <strong>20%</strong> and enabling the team to accelerate the
                complete MonieDesk rebuild from scratch.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Visa Inc. Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="June 2023 – July 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "5px" }}
            >
              Visa Inc – Senior Software Engineer
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ marginBottom: "10px", fontSize: "1rem", opacity: 0.9 }}
            >
              Bengaluru, India
            </h5>
            <ul style={{ textAlign: "left" }}>
              <li>
                Owned and led development for{" "}
                <strong>three mission-critical micro-frontend applications</strong>{" "}
                within the Authorize.Net payment ecosystem which is used by
                thousands of merchants.
              </li>
              <li>
                Managed frontend systems supporting high-volume transaction
                environments with strict security and compliance standards.
              </li>
              <li>
                Migrated legacy UI modules to{" "}
                <strong>React + TypeScript architecture</strong>, reducing
                regression defects by <strong>22%</strong>.
              </li>
              <li>
                Spearheaded frontend modernization initiative improving
                maintainability and reducing technical debt.
              </li>
              <li>
                Reduced post-release production issues by <strong>20%</strong>{" "}
                through structured testing strategies and improved code review
                processes.
              </li>
              <li>
                Optimized CI/CD pipelines using GitHub and Jenkins, improving
                deployment stability and reducing rollback incidents by{" "}
                <strong>30%</strong>.
              </li>
              <li>
                Mentored newly onboarded Frontend Engineers, guiding them on
                code standards, architectural principles, and secure frontend
                development practices. Leveraged AI-assisted development tools
                to accelerate refactoring, documentation generation, and unit
                test creation.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* TEK Systems Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 – June 2023"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "5px" }}
            >
              TEK Systems – Senior Software Engineer
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ marginBottom: "10px", fontSize: "1rem", opacity: 0.9 }}
            >
              Bengaluru, India
            </h5>
            <p style={{ textAlign: "left", fontWeight: "bold", marginBottom: "5px" }}>
              Schneider Electric – EcoStruxure Power Commission Software
            </p>
            <ul style={{ textAlign: "left" }}>
              <li>
                Owned frontend system for enterprise energy management platform.
              </li>
              <li>
                Led React UI performance improvements and architectural
                refactoring initiatives.
              </li>
              <li>
                Resolved complex UI performance bottlenecks impacting enterprise
                customers.
              </li>
              <li>
                Collaborated across global teams to enhance stability and
                scalability.
              </li>
            </ul>
            <p style={{ textAlign: "left", fontWeight: "bold", marginBottom: "5px" }}>
              Tata Cliq – E-commerce Platform
            </p>
            <ul style={{ textAlign: "left" }}>
              <li>
                Developed critical user flows including PDP, Profile, and PLP
                system flows.
              </li>
              <li>
                Built REST APIs and fullstack integrations to support seamless
                UI experiences.
              </li>
              <li>
                Contributed to frontend performance optimization and improved
                scalability.
              </li>
              <li>
                Advocated Agile best practices to accelerate feature delivery.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Codebrahma Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 – Nov 2021"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "5px" }}
            >
              Codebrahma – Software Developer &amp; Intern
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ marginBottom: "10px", fontSize: "1rem", opacity: 0.9 }}
            >
              Bengaluru, India
            </h5>
            <ul style={{ textAlign: "left" }}>
              <li>
                Contributed to enterprise cloud and web applications for
                multiple clients.
              </li>
              <li>
                Developed scalable UI components and reusable frontend
                libraries.
              </li>
              <li>
                Contributed to open-source React-based website builder
                (<strong>Composer</strong>).
              </li>
              <li>
                Worked on cloud-native security platform (
                <strong>AccuKnox</strong>), focusing on scalability and
                reliability.
              </li>
              <li>
                Gained strong exposure to AWS-based deployments and
                microservices architecture.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Awards & Achievements */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Achievements"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "10px" }}
            >
              Awards &amp; Achievements
            </h3>
            <ul style={{ textAlign: "left" }}>
              <li>
                <strong>Runner-Up – Visa Engineering Hackathon:</strong> Built
                an AI-powered Image-to-Code generation solution leveraging
                LLM-based models to convert UI mockups into structured frontend
                components, demonstrating innovation in AI-assisted development
                workflows.
              </li>
              <li>
                Contributed to open-source React libraries adopted by the
                developer community, enhancing reusable component patterns.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2016 – Mar 2020"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ marginBottom: "5px" }}
            >
              Kongu Engineering College
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ marginBottom: "10px", fontSize: "1rem", opacity: 0.9 }}
            >
              Erode, India
            </h5>
            <p style={{ textAlign: "left", margin: 0 }}>
              <strong>BE Computer Science</strong> – Grade: 7.99
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
};

export default Experience;
