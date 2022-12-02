import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi. I'm <span className="purple">Dario Alessio, </span>
            from <span className="purple"> Caracas, Venezuela.</span>
            <br /><br />
            I'm a software developer with a lot of experience working as a
           product manager in the financial industry.<br /><br />
           While doing so, I've used scrum methodology and worked with multidisciplinary teams
            to develop real life financial products, allways under time and budget constraints.<br /> <br />
           Yes, I've been "the client" many times and I know how it feels to be on the other 
           side of the table.<br /><br />
           I'm also a Mechanical Engineer and have a MBA, which helps me to understand both
            the technical and business side of things.<br /><br />
           I'm passionate about web development and I'm always looking for new challenges.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read history and science books
            </li>
            <li className="about-activity">
              <ImPointRight /> Play tennis with my team (double)
            </li>
            <li className="about-activity">
              <ImPointRight /> Play the guitar and sing with friends
            </li>
          </ul>

        {/*}  <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
  <footer className="blockquote-footer">Dario Alessio</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
