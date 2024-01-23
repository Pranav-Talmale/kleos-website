import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import TeamInfo from "views/profile/ProfileSections/TeamInfo.js";
import HackTemplate from "views/profile/ProfileSections/HackTemplate.js";
import Payment from "views/profile/ProfileSections/Payment.js";

let ps = null;

export default function ProfilePage() {
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <img alt="..." className="dots" src={require("assets/img/dots.png")} />
        <ExamplesNavbar />
        <TeamInfo />
        <HackTemplate />
        <Payment />
        <Footer />
      </div>
    </>
  );
}
