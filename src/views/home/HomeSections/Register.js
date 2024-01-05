import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Register() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="register-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="8" md="12">
            <h2 className="title text-center">
            Registration Criteria
            </h2>
              <p>
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
              </p>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              color="primary"
              tag={Link} to="/register"
              role="button"
              size="lg"
            >
              {userInfo ? (
                  <>
                    <i className="tim-icons icon-badge" /> Go To Profile
                  </>):(
                  <>
                    <i className="tim-icons icon-spaceship" /> Register
                  </>)
                }
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
