import React from "react";
import Spline from "@splinetool/react-spline";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <Spline
          className="spline"
          scene="https://prod.spline.design/tettRnoA98V1CwD5/scene.splinecode"
        />
      </Container>
    </div>
  );
}
