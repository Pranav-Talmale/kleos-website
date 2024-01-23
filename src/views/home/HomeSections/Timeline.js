import React from "react";
import "assets/css/timeline.css";

export default function Timeline() {
  return (
    <div className="section section-examples" id="timeline">
      <section className="section section-lg">
        <h1 className="timeline-title">Event Schedule</h1>
        <div className="timeline-container">
          <div className="timeline">
            <ul>
              <li>
                <div className="timeline-content">
                  <h3 className="date">20th February, 2024</h3>
                  <h1>Registration</h1>
                  <hr className="line-success" />
                  <p>
                    {" "}
                    The registration process begins, and participants have to
                    register through the website.. Once the participants have
                    registered for the event, they have to meet the requirements
                    for ROUND 1 of the hackathon.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h3 className="date">5th March, 2024</h3>
                  <h1>Phase 1</h1>
                  <hr className="line-warning" />
                  <p>
                    {" "}
                    A shortlisting process would be done from which certain
                    teams would be selected out of the lot to take part in
                    Kleos. Shortlisting process begins from 28th February.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h3 className="date">6th March, 2024</h3>
                  <h1>Phase 2</h1>
                  <hr className="line-primary" />
                  <p>
                    On 6th March 2023, a final list of teams will be announced
                    which are selected for Round 2.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h3 className="date">31st March, 2024</h3>
                  <h1>Phase 3</h1>
                  <hr className="line-danger" />
                  <p>
                    {" "}
                    Round 2 will be conducted in DYPU, Navi Mumbai campus,
                    selected teams will be coming on campus and competing
                    against each other and prepare their models/prototypes.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                  <h3 className="date">2nd April, 2024</h3>
                  <h1>Phase 4</h1>
                  <hr className="line-success" />
                  <p>
                    {" "}
                    Teams will showcase their prototypes and pitch their idea to
                    the jury. Each team will get 10 minutes to present their
                    pitch and the Winning teams for KLEOS 2023 will be
                    announced.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
