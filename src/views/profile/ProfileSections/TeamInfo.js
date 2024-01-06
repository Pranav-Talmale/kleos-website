import React from "react";
import classnames from "classnames";
import { useSelector } from 'react-redux';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Modal,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
  
  export default function TeamInfo() {
    const [tabs, setTabs] = React.useState(1);
    const { userInfo } = useSelector((state) => state.auth);

    //Add Member 2 Form
    const [formModal1, setFormModal1] = React.useState(false);
    const [name2Focus, setName2Focus] = React.useState(false);
    const [email2Focus, setEmail2Focus] = React.useState(false);
    const [number2Focus, setNumber2Focus] = React.useState(false);

    //Add Member 3 Form
    const [formModal2, setFormModal2] = React.useState(false);
    const [name3Focus, setName3Focus] = React.useState(false);
    const [email3Focus, setEmail3Focus] = React.useState(false);
    const [number3Focus, setNumber3Focus] = React.useState(false);

    //Add Member 4 Form
    const [formModal3, setFormModal3] = React.useState(false);
    const [name4Focus, setName4Focus] = React.useState(false);
    const [email4Focus, setEmail4Focus] = React.useState(false);
    const [number4Focus, setNumber4Focus] = React.useState(false);

    //Add Team Name
    const [formModal4, setFormModal4] = React.useState(false);
    const [teamNameFocus, setTeamNameFocus] = React.useState(false);
    const [shortNameFocus, setShortNameFocus] = React.useState(false);
    return (
      <>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                {userInfo ? (
                  <>
                    <h1 className="profile-title text-left">{userInfo.member1Name}</h1>
                  </>):(
                  <>
                    <h1 className="profile-title text-left">Mike Schnider</h1>
                  </>)
                }
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Offices parties lasting outward nothing age few resolve.
                  Impression to discretion understood to we interested he
                  excellence. Him remarkably use projection collecting. Going
                  about eat forty world has round miles.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    onClick={() => setFormModal4(true)}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Set Team Name
                  </Button>
                </div>
                {/*<div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
              </div>*/}
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/kleos-logo-full.png")}
                    />
                    <h4 className="title">Team Information</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Members
                        </NavLink>
                      </NavItem>
                      {/*<NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Add Members
                        </NavLink>
                        </NavItem>*/}
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          Emails
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Sr. No</th>
                              <th className="header">Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                              {userInfo ? (
                                <>
                                  {userInfo.member1Name}
                                </>):(
                                <>
                                  Mike Scheinder
                                </>)
                              }
                                </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                            <Button
                              className="btn-simple btn-round"
                              color="primary"
                              onClick={() => setFormModal1(true)}
                            >
                             Add Member 2
                            </Button>
                            </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                            <Button
                              className="btn-simple btn-round"
                              color="primary"
                              onClick={() => setFormModal2(true)}
                            >
                             Add Member 3
                            </Button>
                                </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                              <Button
                              className="btn-simple btn-round"
                              color="primary"
                              onClick={() => setFormModal3(true)}
                              >
                                Add Member 4
                              </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      {/*<TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Name</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. 1Nasd92348hU984353hfid"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Email</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-simple-add" />
                        </Button>
                        <FormText color="default" tag="span">
                          Team can only have 4 members including you.
                        </FormText>
                        </TabPane>*/}
                      <TabPane tabId="tab3">
                      <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Sr. No</th>
                              <th className="header">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                              {userInfo ? (
                                <>
                                  {userInfo.member1Email}
                                </>):(
                                <>
                                  example@email.com
                                </>)
                              }
                                </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                              <Button
                              className="btn-simple btn-round"
                              color="primary"
                              onClick={() => setFormModal1(true)}
                              >
                                Add Member 2
                              </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                              <Button
                              className="btn-simple btn-round"
                              color="primary"
                              onClick={() => setFormModal2(true)}
                              >
                                Add Member 3
                              </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                              <Button
                              className="btn-simple btn-round"
                              color="primary"
                              onClick={() => setFormModal3(true)}
                              >
                                Add Member 4
                              </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          {/* Start Form Modal 1*/}
          <Modal
            modalClassName="modal-black"
            isOpen={formModal1}
            toggle={() => setFormModal1(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal1(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Add Member 2</h3>
              </div>
            </div>
            <div className="modal-body">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": name2Focus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      onFocus={(e) => setName2Focus(true)}
                      onBlur={(e) => setName2Focus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": email2Focus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmail2Focus(true)}
                      onBlur={(e) => setEmail2Focus(false)}
                    />
                  </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": number2Focus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-bell-55" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Number"
                        type="text"
                        onFocus={(e) => setNumber2Focus(true)}
                        onBlur={(e) => setNumber2Focus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Add Member
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
          {/* End Form Modal 1*/}

          {/* Start Form Modal 2*/}
          <Modal
            modalClassName="modal-black"
            isOpen={formModal2}
            toggle={() => setFormModal2(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal2(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Add Member 3</h3>
              </div>
            </div>
            <div className="modal-body">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": name3Focus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      onFocus={(e) => setName3Focus(true)}
                      onBlur={(e) => setName3Focus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": email3Focus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmail3Focus(true)}
                      onBlur={(e) => setEmail3Focus(false)}
                    />
                  </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": number3Focus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-bell-55" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Number"
                        type="text"
                        onFocus={(e) => setNumber3Focus(true)}
                        onBlur={(e) => setNumber3Focus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Add Member
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
          {/* End Form Modal 2*/}

          {/* Start Form Modal 3*/}
          <Modal
            modalClassName="modal-black"
            isOpen={formModal3}
            toggle={() => setFormModal3(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal3(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Add Member 4</h3>
              </div>
            </div>
            <div className="modal-body">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": name4Focus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      onFocus={(e) => setName4Focus(true)}
                      onBlur={(e) => setName4Focus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": email4Focus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmail4Focus(true)}
                      onBlur={(e) => setEmail4Focus(false)}
                    />
                  </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": number4Focus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-bell-55" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Number"
                        type="text"
                        onFocus={(e) => setNumber4Focus(true)}
                        onBlur={(e) => setNumber4Focus(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Add Member
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
          {/* End Form Modal 3*/}

          {/* Start Form Modal 4*/}
          <Modal
            modalClassName="modal-black"
            isOpen={formModal4}
            toggle={() => setFormModal4(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal4(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Set Team Name</h3>
              </div>
            </div>
            <div className="modal-body">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": teamNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-bulb-63" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Team Name"
                      type="text"
                      onFocus={(e) => setTeamNameFocus(true)}
                      onBlur={(e) => setTeamNameFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": shortNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Short Name for your Team"
                      type="text"
                      onFocus={(e) => setShortNameFocus(true)}
                      onBlur={(e) => setShortNameFocus(false)}
                    />
                  </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Set Name
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
          {/* End Form Modal 4*/}
          </Container>
        </div>
      </div>
    </>
  );
}