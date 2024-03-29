import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 // AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Dario Alessio</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/DarioAlessioR"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
        {    <li className="social-icons">
              <a
                href="https://microverse-students.slack.com/team/U039GCFRK9B"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineSlack />
              </a>
  </li>  }
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dario-alessio/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
        
            <li className="social-icons">
              <a
                href="mailto:darioalessiorivas@yahoo.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                email
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
