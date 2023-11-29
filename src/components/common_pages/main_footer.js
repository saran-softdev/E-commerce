import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../common_css/footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const MainFooter = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <footer className="footer">
            <Container>
              <Row>
                <Col md={6} lg={3} className="footer-col">
                  <h4>company</h4>
                  <ul>
                    <li>
                      <a href="#">about us</a>
                    </li>
                    <li>
                      <a href="#">our services</a>
                    </li>
                    <li>
                      <a href="#">privacy policy</a>
                    </li>
                    <li>
                      <a href="#">affiliate program</a>
                    </li>
                  </ul>
                </Col>
                <Col md={6} lg={3} className="footer-col">
                  <h4>get help</h4>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">shipping</a>
                    </li>
                    <li>
                      <a href="#">returns</a>
                    </li>
                    <li>
                      <a href="#">order status</a>
                    </li>
                    <li>
                      <a href="#">payment options</a>
                    </li>
                  </ul>
                </Col>
                <Col md={6} lg={3} className="footer-col">
                  <h4>online shop</h4>
                  <ul>
                    <li>
                      <a href="#">MEN</a>
                    </li>
                    <li>
                      <a href="#">WOMEN</a>
                    </li>
                    <li>
                      <a href="#">MEN-SHIRT</a>
                    </li>
                    <li>
                      <a href="#">WOMEN-SHIRT</a>
                    </li>
                  </ul>
                </Col>
                <Col md={6} lg={3} className="footer-col">
                  <h4>follow us</h4>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-facebook-f">
                        <FaFacebook />
                      </i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter">
                        <AiOutlineTwitter />
                      </i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram">
                        <AiOutlineInstagram />
                      </i>
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </Row>
        <Row></Row>
      </Container>
      <p className=" text-center text-white bg-black p-4  m-0">Copyright © 2023 FASHION BEAT | Powered by FASHION BEAT</p>
    </div>
  );
};

export default MainFooter;
