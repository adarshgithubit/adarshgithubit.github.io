import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import TypeWriterEffect from "react-typewriter-effect";
import "./About.css";
import profile from "../assets/img/profile/profile.png";
const About = () => {
  return (
    <div className="bgi mar-container about-container">
      <Container className="about-container bgi" id="about">
        <Row>
          <Col>
            <h1>ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi">
        <Row className="about-container">

        <Col>
            <Image src={profile} rounded className="profile-image" />
          </Col>
         
          <Col>
            <div className="aobut-name">
              {/* <h6>Hi there! I am  Adarsh Singh,</h6> */}
              <h4></h4>
              <br />
              <div id="abt">
              <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "black",
              fontWeight: 50,
              fontSize: "2vw",
            }}
            startDelay={2000}
            // cursorColor="#3F3D56"
            cursorColor="transparent"
            multiText={["Name: Adarsh Singh"]}
            
            multiTextDelay={1000}
           
            typeSpeed={30}
            loop="true"
            autoStart="true"
          />
            <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "black",
              fontWeight: 50,
              fontSize: "2vw",
            }}
            startDelay={3000}
            // cursorColor="#3F3D56"
            cursorColor="transparent"
            multiText={["Profile: Full Stack Web Developer"]}
            
            multiTextDelay={1000}
           
            typeSpeed={30}
            loop="true"
            autoStart="true"
          />
  <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "black",
              fontWeight: 50,
              fontSize: "2vw",
            }}
            startDelay={4000}
            // cursorColor="#3F3D56"
            cursorColor="transparent"
            multiText={["Education: B.C.A."]}
            
            multiTextDelay={1000}
           
            typeSpeed={30}
            loop="true"
            autoStart="true"
          />
  <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "black",
              fontWeight: 50,
              fontSize: "2vw",
            }}
            startDelay={5000}
            cursorColor="transparent"
            multiText={["Address: Varanasi, UP, India"]}
            
            multiTextDelay={1000}
           
            typeSpeed={30}
            loop="true"
            autoStart="true"
          />


              </div>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export { About };
