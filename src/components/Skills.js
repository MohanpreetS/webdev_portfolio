import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import devBadge from '../assets/img/dev_badge.png'
import pracBadge from '../assets/img/prac_badge.png'
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Skills = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <p>My preferred stack is React/Next JS for frontend, Express and .NET for backend, MongoDB and PostgreSQL for data storage, and AWS for cloud services. But i have significant professional experience with the following technologies.</p>
              <section className="project" id="projects" style={{ "border-radius": "40px" }}>
                <Container>
                  <Row>
                    <Col size={12}>
                          <div>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">Languages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="second">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="third">Libraries</Nav.Link>
                                </Nav.Item>
                              </Nav>
                              <Tab.Content id="slideInUp" >
                                
                                <Tab.Pane eventKey="first">
                                <Container className="skill-heading"><h2>Languages</h2></Container>
                                  <Col size={12}>
                                  <span className="skill-text">C#</span>
                                  <span className="skill-text">Typescript</span>
                                  <span className="skill-text">HTML</span>
                                  <span className="skill-text">CSS</span>
                                  <span className="skill-text">SQL</span>
                                  <span className="skill-text">Python</span>
                                  <span className="skill-text">Dart</span>
                                  <span className="skill-text">Javascript</span>
                                  </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Container className="skill-heading"><h2>Frameworks</h2></Container>
                                  <Col size={12}>
                                  <span className="skill-text">NET Core</span>
                                  <span className="skill-text">Node JS</span>
                                  <span className="skill-text">Express JS</span>
                                  <span className="skill-text">Next JS</span>
                                  <span className="skill-text">Tailwind</span>
                                  <span className="skill-text">SASS</span>
                                  <span className="skill-text">Bootstrap</span>
                                  <span className="skill-text">Flutter</span>
                                  </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Container className="skill-heading"><h2>Libraries</h2></Container>
                                  <Col size={12}>
                                  <span className="skill-text">C#</span>
                                  <span className="skill-text">Typescript</span>
                                  <span className="skill-text">HTML</span>
                                  <span className="skill-text">CSS</span>
                                  <span className="skill-text">SQL</span>
                                  <span className="skill-text">Python</span>
                                  <span className="skill-text">Dart</span>
                                  <span className="skill-text">NET Core</span>
                                  <span className="skill-text">Express JS</span>
                                  <span className="skill-text">Next JS</span>
                                  <span className="skill-text">Tailwind</span>
                                  <span className="skill-text">SASS</span>
                                  <span className="skill-text">Bootstrap</span>
                                  <span className="skill-text">Flutter</span>
                                  </Col>
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>

    /*{ <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Stack and Certifications</h2>
                        <p>My preferred stack is React/Next JS for frontend, Express and .NET for backend, MongoDB and PostgreSQL for data storage, and AWS for cloud services. But i have significant professional experience with the following technologies.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <span className="skill-text"></span>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section> }*/
  )
}

{/* <Tab.Pane eventKey="first">
                                  <Container className="skill-heading"><h2>Certifications</h2></Container>
                                  <Row className="badges">
                                    <Col size={12} sm={6}>
                                      <a href="https://www.credly.com/badges/52fd3f49-135e-4950-a2ea-1885acee4872/public_url" target="_blank"><img src={devBadge} alt="" /></a>
                                    </Col>
                                    <Col size={12} sm={6}>
                                      <a href="https://www.credly.com/badges/ce5db11d-1fa9-4e39-b004-5f3c34d1a6da/public_url" target="_blank"><img src={pracBadge} alt="" /></a></Col>
                                  </Row>
                                </Tab.Pane> */}