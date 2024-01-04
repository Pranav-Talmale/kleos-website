import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

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
              href="/register-page"
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
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Download the PPT Template for KLEOS.
            </h3>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="download-template"
              size="lg"
              href="https://docs.google.com/presentation/d/1mK-qhy8gXfUHjqd6MDg8kcnL0E-L30uv/edit?usp=sharing&ouid=105478635307635313115&rtpof=true&sd=true"
            >
              <i className="tim-icons icon-cloud-download-93" />
            </Button>
            <UncontrolledTooltip delay={0} target="download-template">
              Download!
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
