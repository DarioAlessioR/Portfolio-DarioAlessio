import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiSass,
  DiRuby,
//  DiRubyRough,
  DiPostgresql,
  DiHtml5,
  DiRor,
  DiCss3,
} from "react-icons/di";
//import {
//  SiAdobeillustrator,
//  SiAdobephotoshop,
//  SiAdobeaftereffects,
//} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiRor /> <span>Ruby on Rails</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby /> <span>Ruby</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <span>JavaScript</span>     
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <span>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> <span>HTML</span>
      </Col>
  {    <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> <span>CSS</span>
      </Col>  }
      <Col xs={4} md={2} className="tech-icons">
        <DiSass /> <span>Sass</span>
      </Col>
   {   <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql /> <span>PostgreSQL</span>
      </Col>   }
     { /*  <Col xs={4} md={2} className="tech-icons">
        <DiRubyRough />
      </Col> */}
   {/*   <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
  </Col>  */}
    </Row>
  );
}

export default Techstack;
