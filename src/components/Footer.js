import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon1 from "../assets/img/linkedin.svg";

import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import gitIcon from "../assets/img/gitIcon.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohanpreetsn/"><img src={navIcon1} alt="Icon" /></a>
              <a id="small-link" href="https://github.com/MohanpreetS"><img id="small-icon"  src={gitIcon} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
