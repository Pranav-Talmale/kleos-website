import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Register() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="register-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
            Registration Criteria
            </h2>
            <h4 className="description">
            1. Only <b>UNDERGRADUATE STUDENTS</b> can participate in the hackathon.
            <br></br>
            <br></br>
            2. This competition is open for all irrespective of their branch, year of study etc.
            <br></br>
            <br></br>
            3. Once the participants have registered for the event , they have to meet the requirements for ROUND 1 of the hackathon.
            <br></br>
            <br></br>
            4. The presentation template provided by RAIT ACM has to be followed strictly followed by all the teams. Failing to do so will result in disqualification.
            <br></br>
            <br></br>
            5. Only students who will pass the round 1 of the hackathon will be eligible for round 2. Arrangment of student accomadation is made in college. If student want to stay with parents they can stay at their own expense.
            <br></br>
            <br></br>
            6. Students can work in teams where each team would have maximum of 4 members.
            <br></br>
            <br></br>
            7. Submissions should be made on time. Late submissions will not be taken into account.
            <br></br>
            <br></br>
            8. No plagiarism or reusing of past work will be allowed. If you decide to submit projects consisting of re-used code, or re-submit a project that you have already submitted previously to any other hackathon, you are to disclose such previous use and its extent with the submission. If not , their submissions will be dismissed.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              color="primary"
              href="#pablo"
              role="button"
              size="lg"
            >
              <i className="tim-icons icon-spaceship" /> Registration starts from 20th Feb
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/*<Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="twitter"
              size="lg"
            >
              <i className="fab fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Tweet!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Share!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="github"
              href="https://github.com/creativetimofficial"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-github" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Star on Github
            </UncontrolledTooltip>
          </Col>
        </Row>*/}
      </Container>
    </div>
  );
}
