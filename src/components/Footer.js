import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={icon1} alt="Icon" /></a>
              <a href="#"><img src={icon2} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}