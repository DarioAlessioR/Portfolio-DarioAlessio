import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGithubBadge,
  DiNpm,
  DiScrum,
} from "react-icons/di";
import {
//  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiSwagger,
  SiFigma,
  SiNetlify,
//  SiAdobe,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge /> <span>GitHub</span>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <span>Visual Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm /> <span>npm</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> <span>Heroku</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum /> <span>Scrum</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify /> <span>Netlify</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> <span>Figma</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger /> <span>Swagger</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
