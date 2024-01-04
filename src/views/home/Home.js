import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/viewimport Basics from "views/home/HomeSections/Basics.js";
//import Navbars from "views/home/HomeSections/Navbars.js";
//import Tabs from "views/home/HomeSections/Tabs.js";
//import Pagination from "views/home/HomeSections/Pagination.js";
//import Typography from "views/home/HomeSections/Typography.js";
//import JavaScript from "views/home/HomeSections/JavaScript.js";
//import NucleoIcons from "views/home/HomeSections/NucleoIcons.js";
//import Examples from "views/home/HomeSections/Examples.js";
import FAQ from "views/home/HomeSections/FAQs.js";
import Domains from "views/home/HomeSections/Domains.js";
import Register from "views/home/HomeSections/Register.js";
import Timeline from "./HomeSections/Timeline.js";
import About from "./HomeSections/About.js";

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
          {/*<Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Typography />
          <NucleoIcons />
          <Examples />
          <JavaScript />*/}
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
