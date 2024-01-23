import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md="3">
            <h1 className="title">RAIT ACM</h1>
          </Col>
          {/*<Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/landing-page" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Col>*/}
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="https://rait.acm.org/#contact" target="_blank">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://rait.acm.org/#about" target="_blank">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://rait.acm.org/blogs.php" target="_blank">
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Our Socials:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/RaitACM"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/in/rait-acm-student-chapter-034026197/"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/rait_acm"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
