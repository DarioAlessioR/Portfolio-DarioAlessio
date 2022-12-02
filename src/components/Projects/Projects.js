import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import space from "../../Assets/Projects/space.png";
import homesharing from "../../Assets/Projects/homesharing.png";
import suicide from "../../Assets/Projects/suicide.png";
import apod from "../../Assets/Projects/apod.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homesharing}
              isBlog={false}
              title="Home Sharing App"
              description="The Home Sharing App is a fully responsive app that provides the service
               for connecting homeowners wanting to rent their properties and potential clients,
                enabling the creation of reservations for periods of time on selected properties.
              
              The app was built with a Ruby on Rails backend and a React/Redux frontend,
               located on separate repositories.
               
               This is an academic project built by a team of 4 students."
              ghLink="https://github.com/Home-Sharing-Team/final-capstone-Project-Back-End/tree/readme"
              demoLink="https://home-sharing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apod}
              isBlog={false}
              title="Astronomical Picture of the Day"
              description="The Astronomical Picture of the Day (APOD) app shows a collection
               of the last 30 images provided by the National Aeronautics and 
               Space Administration of the United States (NASA) via its api service.
               
               Everyday a new pictured
                is added to the collection.
                The APOD app has been built with React and Redux / Redux Toolkit. This is an individual
                academic project that can be used for educational or recreational purposes"
              ghLink="https://github.com/DarioAlessioR/capstone-apod/tree/main"
              demoLink="https://tranquil-fudge-35218d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Travelers' Hub"
              description="The Space Travelers' Hub consists of Rockets, Missions, and the My
               Profile section.

              It let users to book fictional rockets trips and space missions.
              The Rockets section displays a list of all available SpaceX rockets. 
              
              
              The Missions section displays a list of current missions along with their
               brief description. 
              
              The My Profile section displays all booked items.
              
              Built with React / Redux Toolkit as an academic project by a group of 2 students."
              ghLink="https://github.com/DarioAlessioR/space-travel"
              demoLink="https://joyful-kitsune-4f643f.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
