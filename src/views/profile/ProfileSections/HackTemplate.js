import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
    {
      src: require("assets/img/denys.jpg"),
      altText: "Slide 1",
      caption: "Big City Life, United States",
    },
    {
      src: require("assets/img/fabien-bazanegue.jpg"),
      altText: "Slide 2",
      caption: "Somewhere Beyond, United States",
    },
    {
      src: require("assets/img/mark-finn.jpg"),
      altText: "Slide 3",
      caption: "Stocks, United States",
    },
  ];
  
  export default function HackTemplate() {
    return (
      <>
      <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Kleos PPT Template</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                1. The presentation template provided by RAIT ACM has to be followed strictly followed by all the teams. 
                <br/>
                2. Failing to do so will result in disqualification. Submissions should be made on time. Late submissions will 
                not be taken into account. 
                <br/>
                3. No plagiarism or reusing of past work will be allowed. If you decide to submit projects 
                consisting of re-used code, or re-submit a project that you have already submitted previously to any other hackathon, 
                you are to disclose such previous use and its extent with the submission. If not , their submissions will be dismissed.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="https://docs.google.com/presentation/d/1mK-qhy8gXfUHjqd6MDg8kcnL0E-L30uv/edit?usp=sharing&ouid=105478635307635313115&rtpof=true&sd=true"
                  >
                    <i className="tim-icons icon-book-bookmark" /> Download Template
                  </Button>
                  {/*<Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>*/}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}