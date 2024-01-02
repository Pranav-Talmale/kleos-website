import React from "react";
// reactstrap components
import {Container, Row, Col} from "reactstrap";

export default function Domains() {
  return (
    <div className="section section-examples" id="domains">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <section className="section section-lg">
            <Container>
                <Row className="justify-content-center">
                <Col lg="12">
                    <h1 className="text-center">Hackathon Domains</h1>
                    <Row className="row-grid justify-content-center">
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-success">
                            <i className="tim-icons icon-world" />
                        </div>
                        <h4 className="info-title">Environment</h4>
                        <hr className="line-success" />
                        <p>
                        Innovative ideas that help manage and generate renewable sustainable 
                        sources more efficiently for creating an eco-friendly environment.
                        </p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-warning">
                            <i className="tim-icons icon-atom" />
                        </div>
                        <h4 className="info-title">Education</h4>
                        <hr className="line-warning" />
                        <p>
                        Smart education is a concept that describes learning in the digital age. 
                        It enables learners to learn more effectively, efficiently, flexibly, and 
                        comfortably.
                        </p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-primary">
                            <i className="tim-icons icon-coins" />
                        </div>
                        <h4 className="info-title">Finance</h4>
                        <hr className="line-primary" />
                        <p>
                        Provide ideas in a decentralized and distributed ledger technology used to store 
                        digital information that powers cryptocurrencies and NFTs and can radically 
                        change multiple sectors.
                        </p>
                        </div>
                    </Col>
                    </Row>
                    <Row className="row-grid justify-content-center">
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-danger">
                            <i className="tim-icons icon-support-17" />
                        </div>
                        <h4 className="info-title">Rural Development</h4>
                        <hr className="line-danger" />
                        <p>
                        Developing solutions, keeping in mind the need to enhance the primary sector of India 
                        - Agriculture and to manage and process our agricultural produce.
                        </p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-success">
                            <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Healthcare</h4>
                        <hr className="line-success" />
                        <p>
                        Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare 
                        trends and growing populations also present an array of opportunities for innovation.
                        </p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-info">
                            <i className="tim-icons icon-controller" />
                        </div>
                        <h4 className="info-title">Entertainment</h4>
                        <hr className="line-info" />
                        <p>
                        The Telecom and New Media Track focus is finding and developing innovative solutions to real-world problems 
                        together. Projects in this track will make the most of hackers’ interdisciplinary skills as well as keeping 
                        the user at the forefront of design.
                        </p>
                        </div>
                    </Col>
                    </Row>
                    <Row className="row-grid justify-content-center">
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-success">
                            <i className="tim-icons icon-key-25" />
                        </div>
                        <h4 className="info-title">Women Empowerment</h4>
                        <hr className="line-success" />
                        <p>
                        Since the inception of this world, women have undeniably played a significant role in society for development and 
                        growth whilst facing tremendous challenges. Yet we have a long way to go, in seeking to reduce the number of obstacles 
                        they face in society.
                        </p>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="info">
                        <div className="icon icon-warning">
                            <i className="tim-icons icon-bulb-63" />
                        </div>
                        <h4 className="info-title">Student Innovation</h4>
                        <hr className="line-warning" />
                        <p>
                        Ideas should be limitless and they definitely shouldn’t be put in a box, so we have an open innovation track where hackers can 
                        come up with their own ideas to make impactful and innovative projects irrespective of theme.
                        </p>
                        </div>
                    </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
        </section>
      </div>
  );
}