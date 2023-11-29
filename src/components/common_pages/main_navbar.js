import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const navElement = navRef.current;
      const navOffsetTop = navElement.offsetTop;

      if (window.scrollY > navOffsetTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = scrolled ? "sticky" : "";

  return (
    <div className="m-0 p-0">
      <Container fluid>
        <Row>
          <Navbar collapseOnSelect expand="sm">
            <Navbar.Brand href="/">
              <img
                src="/home/brand_logo.png"
                className="img-fluid "
                alt=""
                srcSet=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`me-auto  ${navbarClassName}`} ref={navRef}>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/men">MEN</Nav.Link>
                <Nav.Link href="/women">WOMEN</Nav.Link>
                <Nav.Link href="/about">ABOUT</Nav.Link>
                <Nav.Link href="/contact">CONTACT</Nav.Link>
                <Nav.Link href="#">
                  <CgProfile />
                </Nav.Link>
                <Nav.Link href="#">
                  <AiOutlineHeart />
                </Nav.Link>
                <Nav.Link href="#">
                  <span className="position-relative">
                    <FiShoppingCart />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1">
                      10
                    </span>
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          <div className="flat fs-4">
            <marquee
              behavior=""
              direction=""
              className=" d-flex justify-content-center align-items-center"
            >
              <b>
                FLAT 10000 OFF ON 3999. CODE: HEY BUDDY | VALID ON EVERYTHING |
                FREE SHIPPING ON ALL ORDERS!
              </b>
            </marquee>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainNavbar;
