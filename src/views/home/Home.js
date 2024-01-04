import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page
import FAQ from "views/home/HomeSections/FAQs.js";
import Domains from "views/home/HomeSections/Domains.js";
import Register from "views/home/HomeSections/Register.js";
import Timeline from "views/home/HomeSections/Timeline.js";
import About from "views/home/HomeSections/About.js";

export default function Home() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <About />
          <Domains />
          <Timeline />
          <FAQ />
          <Register />
        </div>
        <Footer />
      </div>
    </>
  );
}
