import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import resume from "../assets/img/resume.pdf";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mohanpreet`}</h1>
                  <p>I'm a 25 year old Full Stack Developer with 3 years of professional experience. I'm highly inquisitive and on a pursuit of knowledge. From front-end design to back-end logic, I've got it covered. I enjoy collaborating with teams to turn ideas into functional, polished products. I'm currently working at <a className="web-link" href="https://learnweb3.io/">LearnWeb3</a> - a comprehensive platform to help upskill developer students.</p>
                  <button onClick={() => window.open(resume)}>View Resume<ArrowRightCircle size={25} /></button>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
