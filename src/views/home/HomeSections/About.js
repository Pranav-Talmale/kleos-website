import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function About() {
  return (
    <section className="section section-lg section-safe">
      <Container>
        <Row className="row-grid justify-content-between">
          <Col md="5">
            <img
              alt="..."
              className="floating"
              src={require("assets/img/kleos-logo-full.png")}
            />
          </Col>
          <Col md="6">
            <div className="px-md-5">
              <hr className="line-success" />
              <h3>About The Hackathon</h3>
              <p>
                Kleos is a platform for all those talented students, developers,
                and engineers, to compete over 36 hours to find creative
                solutions to solve tough and real-world problems related to
                focusing on performance. The hackathon inspires developers to
                keep their focus aside from pure functionality and bring
                innovativeness to the concept.
              </p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-success mb-2">
                      <i className="tim-icons icon-calendar-60" />
                    </div>
                    <div className="ml-3">
                      <h6>Date: 31st March 2024 - 2nd April 2024</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-success mb-2">
                      <i className="tim-icons icon-single-02" />
                    </div>
                    <div className="ml-3">
                      <h6>Team Size: 1 to 4 members</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-success mb-2">
                      <i className="tim-icons icon-shape-star" />
                    </div>
                    <div className="ml-3">
                      <h6>Free registrations</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-success mb-2">
                      <i className="tim-icons icon-money-coins" />
                    </div>
                    <div className="ml-3">
                      <h6>
                        Participation fee of Rs. 500 to be paid after getting
                        shortlisted
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-success mb-2">
                      <i className="tim-icons icon-coins" />
                    </div>
                    <div className="ml-3">
                      <h6>Prize pool of Rs. 50,000!</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
