import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookstore from "../../Assets/Projects/bookstore.png";
import gastronomy from "../../Assets/Projects/gastronomy.png";
import space from "../../Assets/Projects/space.png";
import homesharing from "../../Assets/Projects/homesharing.png";
import math from "../../Assets/Projects/math.png";
import apod from "../../Assets/Projects/apod.png";
import plancha1crc from "../../Assets/Projects/plancha1crc.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've recently worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homesharing}
              isBlog={false}
              title="Home Sharing App"
              description=<p>The Home Sharing App is a fully responsive app that provides the service
               for connecting homeowners wanting to rent their properties and potential clients,
                enabling the creation of reservations for periods of time on selected properties.
              
              The app was built with a <span className="stack">Ruby on Rails</span> backend and a <span className="stack">React/Redux</span> frontend,
               located on separate repositories.
               
               This is an academic project built by a team of 4 students.</p>
              ghLink="https://github.com/Home-Sharing-Team/final-capstone-Project-Back-End/tree/readme"
              demoLink="https://home-sharing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apod}
              isBlog={false}
              title="Astronomical Picture of the Day"
              description=<p>The Astronomical Picture of the Day (APOD) app shows a collection
               of the last 30 images provided by the National Aeronautics and 
               Space Administration of the United States (NASA) via its api service.
               
               Everyday a new pictured
                is added to the collection.
                The APOD app has been built with <span className="stack">React and Redux / Redux Toolkit.</span> This is an individual
                academic project that can be used for educational or recreational purposes.</p>
              ghLink="https://github.com/DarioAlessioR/capstone-apod/tree/main"
              demoLink="https://tranquil-fudge-35218d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Travelers' Hub"
              description=<p>The Space Travelers' Hub consists of Rockets, Missions, and the My
               Profile section.

              It lets users book fictional rockets trips and space missions.
              The Rockets section displays a list of all available SpaceX rockets. 
              
              
              The Missions section displays a list of current missions along with their
               brief description. 
              
              The My Profile section displays all booked items.
              
              Built with <span className="stack">React / Redux Toolkit</span> as an academic project by a group of 2 students.</p>
              ghLink="https://github.com/DarioAlessioR/space-travel"
              demoLink="https://joyful-kitsune-4f643f.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore CMS"
              description=<p>The Bookstore CMS app is a website that allows you to

              display a list of books, add a book, and remove a selected book.

              It consumes an API service to store the users's books information.
              
              Built with <span className="stack">React and Redux</span> as an individual academic project.</p>
              ghLink="https://github.com/DarioAlessioR/bookstore1/tree/dev"
              demoLink="https://effervescent-dodol-706742.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math}
              isBlog={false}
              title="Math Magicians"
              description=<p>Math Magicians is a website for all fans of mathematics.
               It allows users to
               do simple arithmetics calculations. There's also a section to read a nice quote
               from Galileo Galilei.
               It is a Single Page App (SPA)
                Built with <span className="stack">React</span> as an individual academic project.</p>
              ghLink="https://github.com/DarioAlessioR/math-magic"
              demoLink="https://benevolent-tanuki-9d1893.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plancha1crc}
              isBlog={false}
              title="House Speciality"
              description=<p>House Speciality is a web application based on an external API
               that provides data about food. 
               Users can comment and give likes to different dishes. These interactions are
               saved in an external API. The app was built with <span className="stack">JavaScript</span> as a
                 group academic project.</p>
              ghLink="https://github.com/DarioAlessioR/JS-Capstone/tree/dev"
              demoLink="https://plancha1crc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gastronomy}
              isBlog={false}
              title="House Speciality"
              description=<p>House Speciality is a web application based on an external API
               that provides data about food. 
               Users can comment and give likes to different dishes. These interactions are
               saved in an external API. The app was built with <span className="stack">JavaScript</span> as a
                 group academic project.</p>
              ghLink="https://github.com/DarioAlessioR/JS-Capstone/tree/dev"
              demoLink="https://house-speciality.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
