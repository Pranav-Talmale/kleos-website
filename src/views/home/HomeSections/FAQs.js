import React from "react";
// reactstrap components
import { 
  UncontrolledAlert, 
  Container,
  Button,
  Modal 
} from "reactstrap";

export default function FAQ() {
  const [partispateModal, setpartispateModal] = React.useState(false);
  const [costModal, setcostModal] = React.useState(false);
  const [applyModal, setapplyModal] = React.useState(false);
  const [round2Modal, setround2Modal] = React.useState(false);
  const [prizesModal, setprizesModal] = React.useState(false);
  const [teamModal, setteamModal] = React.useState(false);

  return (
    <div className="section section-notifications" id="FAQs">
      <Container>
        <div className="space" />
        <h1 className="title">FAQs</h1>

        {/* FAQ1 - START */}
        <UncontrolledAlert className="alert-with-icon" color="primary" onClick={() => setpartispateModal(true)}>
        <span data-notify="icon" className="tim-icons icon-single-02" />
          <span>
            <b>Who can participate?</b>
          </span>
        </UncontrolledAlert>
        <Modal isOpen={partispateModal} toggle={() => setpartispateModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setpartispateModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Who can participate?</h4>
            </div>
            <div className="modal-body">
              <p>
              The hackathon is open for all undergrad students. It is the right place for 
              anyone who's interested in learning and innovating with their ideas.
              </p>
            </div>
            <div className="modal-footer">
              <Button
                color="danger"
                type="button"
                onClick={() => setpartispateModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* FAQ1 - END */}

          {/* FAQ2 - START */}
        <UncontrolledAlert className="alert-with-icon" color="info" onClick={() => setcostModal(true)}>
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            <b>How much will it cost?</b>
          </span>
        </UncontrolledAlert>
        <Modal isOpen={costModal} toggle={() => setcostModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setcostModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">How much will it cost?</h4>
            </div>
            <div className="modal-body">
              <p>
              Although registration for KLEOS is completely free, a small participation fee 
              has to be paid incase your team is shortlisted.
              </p>
            </div>
            <div className="modal-footer">
              <Button
                color="danger"
                type="button"
                onClick={() => setcostModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* FAQ2 - END */}

          {/* FAQ3 - Start */}
        <UncontrolledAlert className="alert-with-icon" color="success" onClick={() => setapplyModal(true)}>
          <span data-notify="icon" className="tim-icons icon-volume-98" />
          <span>
            <b>How can I apply?</b>
          </span>
        </UncontrolledAlert>
        <Modal isOpen={applyModal} toggle={() => setapplyModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setapplyModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">How can I apply?</h4>
            </div>
            <div className="modal-body">
              <p>
              Simply click the register button and mention you and your team details. Registrations 
              end on 5th March 2023
              </p>
            </div>
            <div className="modal-footer">
            <Button color="default" type="button">
                Register
              </Button>
              <Button
                color="danger"
                type="button"
                onClick={() => setapplyModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* FAQ3 - END */}

          {/* FAQ4 - Start */}
        <UncontrolledAlert className="alert-with-icon" color="warning" onClick={() => setround2Modal(true)}>
          <span data-notify="icon" className="tim-icons icon-shape-star" />
          <span>
            <b>What if my team gets into round 2 ?</b>
          </span>
        </UncontrolledAlert>
        <Modal isOpen={round2Modal} toggle={() => setround2Modal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setround2Modal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">What if my team gets into round 2 ?</h4>
            </div>
            <div className="modal-body">
              <p>
              No worries, We'll be making arrangement for teams in our college campus. If the team wants to stay with 
              their parents they can stay at their own expense. A curated list of hotels nearby college is here 
              </p>
            </div>
            <div className="modal-footer">
              <Button color="default" type="button" href="https://drive.google.com/file/d/1MdUMhgkYqoQcgLdY07_6wDgQUtOJoH33/view?usp=drivesdk" target="blank">
                Hotels List
              </Button>
              <Button
                color="danger"
                type="button"
                onClick={() => setround2Modal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* FAQ4 - END */}

          {/* FAQ5 - Start */}
        <UncontrolledAlert className="alert-with-icon" color="danger" onClick={() => setprizesModal(true)}>
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            <b>What are the prizes to be won?</b>
          </span>
        </UncontrolledAlert>
        <Modal isOpen={prizesModal} toggle={() => setprizesModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setprizesModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">What are the prizes to be won?</h4>
            </div>
            <div className="modal-body">
              <p>
              Total cash prize of Rs 50,000 has been announced for the winning teams along with it there will be 
              additional prizes and goodies.
              </p>
            </div>
            <div className="modal-footer">
              <Button
                color="danger"
                type="button"
                onClick={() => setprizesModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* FAQ5 - END */}

          {/* FAQ6 - Start */}
          <UncontrolledAlert className="alert-with-icon" color="success" onClick={() => setteamModal(true)}>
          <span data-notify="icon" className="tim-icons icon-bus-front-12" />
          <span>
            <b>Can we apply as a team?</b>
          </span>
          </UncontrolledAlert>
          <Modal isOpen={teamModal} toggle={() => setteamModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setteamModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Can we apply as a team?</h4>
            </div>
            <div className="modal-body">
              <p>
              Yes! We believe that you’re stronger as a team than apart. You can form teams of 1-4 people. Most teams 
              aim to have a mix of people with both design and development skills.
              </p>
            </div>
            <div className="modal-footer">
              <Button
                color="danger"
                type="button"
                onClick={() => setteamModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
      </Container>
    </div>
  );
}
