import { useState } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from 'slices/usersApiSlice';
import { setCredentials } from 'slices/authSlice';
import { toast } from 'react-toastify';
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
    const [tabs, setTabs] = useState(1);
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const [updateProfile] = useUpdateUserMutation();

    //Add Member 2 Form
    const [formModal1, setFormModal1] = useState(false);
    const [name2Focus, setName2Focus] = useState(false);
    const [email2Focus, setEmail2Focus] = useState(false);
    const [number2Focus, setNumber2Focus] = useState(false);
    const [member2Name, setmember2Name] = useState('');
    const [member2Email, setmember2Email] = useState('');
    const [member2Number, setmember2Number] = useState('');
    const member2SubmitHandler = async (e) => {
      e.preventDefault();
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            member2Name,
            member2Email,
            member2Number,
          }).unwrap();
          console.log(res);
          dispatch(setCredentials(res));
          setFormModal1(false);
          toast.success('Member 2 Added Successfully');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
    };

    //Add Member 3 Form
    const [formModal2, setFormModal2] = useState(false);
    const [name3Focus, setName3Focus] = useState(false);
    const [email3Focus, setEmail3Focus] = useState(false);
    const [number3Focus, setNumber3Focus] = useState(false);
    const [member3Name, setmember3Name] = useState('');
    const [member3Email, setmember3Email] = useState('');
    const [member3Number, setmember3Number] = useState('');
    const member3SubmitHandler = async (e) => {
      e.preventDefault();
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            member3Name,
            member3Email,
            member3Number,
          }).unwrap();
          console.log(res);
          dispatch(setCredentials(res));
          setFormModal2(false);
          toast.success('Member 3 Added Successfully');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
    };

    //Add Member 4 Form
    const [formModal3, setFormModal3] = useState(false);
    const [name4Focus, setName4Focus] = useState(false);
    const [email4Focus, setEmail4Focus] = useState(false);
    const [number4Focus, setNumber4Focus] = useState(false);
    const [member4Name, setmember4Name] = useState('');
    const [member4Email, setmember4Email] = useState('');
    const [member4Number, setmember4Number] = useState('');
    const member4SubmitHandler = async (e) => {
      e.preventDefault();
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            member4Name,
            member4Email,
            member4Number,
          }).unwrap();
          console.log(res);
          dispatch(setCredentials(res));
          setFormModal3(false);
          toast.success('Member 4 Added Successfully');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
    };

    //Add Team Name
    const [formModal4, setFormModal4] = useState(false);
    const [teamNameFocus, setTeamNameFocus] = useState(false);
    const [shortNameFocus, setShortNameFocus] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [shortTeamName, setShortTeamName] = useState('');
    const teamNameSubmitHandler = async (e) => {
      e.preventDefault();
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            teamName,
            shortTeamName,
          }).unwrap();
          console.log(res);
          dispatch(setCredentials(res));
          setFormModal4(false);
          toast.success('Team Name Added Successfully');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
    };
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
                <h1 className="profile-title text-left">Team Settings</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Want to do a 1v4, no problems. We can also accomodate for duos, trios, and squads.
                  Its as simple as clicking the "Add Member" button and adding your teammates.
                  Don't forget to set your team's name. It will be crucial during the actual competition.
                  <br />
                  <br />
                  <b>Choose and add your teammates carefully. You won't be able to change it later !</b>
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
                    <h4 className="title">
                    {userInfo.shortTeamName === null || userInfo.shortTeamName === undefined ? (
                      <>
                      Team Information
                      </>):(
                      <>
                      {userInfo.shortTeamName}'s Team
                      </>)
                      }
                    </h4>
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
                                  Mike Schnider
                                </>)
                              }
                                </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                              {userInfo.member2Name === null || userInfo.member2Name === undefined ? (
                                <>
                                <Button
                                  className="btn-simple btn-round"
                                  color="primary"
                                  onClick={() => setFormModal1(true)}
                                >
                                Add Member 2
                                </Button>
                                </>):(
                                <>
                                  {userInfo.member2Name}
                                </>)
                              }
                            </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                              {userInfo.member3Name === null || userInfo.member3Name === undefined ? (
                                <>
                                <Button
                                  className="btn-simple btn-round"
                                  color="primary"
                                  onClick={() => setFormModal2(true)}
                                >
                                Add Member 3
                                </Button>
                                </>):(
                                <>
                                  {userInfo.member3Name}
                                </>)
                              }
                                </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                              {userInfo.member4Name === null || userInfo.member4Name === undefined ? (
                                <>
                                <Button
                                  className="btn-simple btn-round"
                                  color="primary"
                                  onClick={() => setFormModal3(true)}
                                >
                                Add Member 4
                                </Button>
                                </>):(
                                <>
                                  {userInfo.member4Name}
                                </>)
                              }
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
                                {userInfo.member1Email}
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>
                              {userInfo.member2Email === null || userInfo.member2Email === undefined ? (
                                <>
                                <Button
                                  className="btn-simple btn-round"
                                  color="primary"
                                  onClick={() => setFormModal1(true)}
                                >
                                Add Member 2
                                </Button>
                                </>):(
                                <>
                                  {userInfo.member2Email}
                                </>)
                              }
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>
                              {userInfo.member3Email === null || userInfo.member3Email === undefined ? (
                                <>
                                <Button
                                  className="btn-simple btn-round"
                                  color="primary"
                                  onClick={() => setFormModal2(true)}
                                >
                                Add Member 3
                                </Button>
                                </>):(
                                <>
                                  {userInfo.member3Email}
                                </>)
                              }
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>
                              {userInfo.member4Email === null || userInfo.member4Email === undefined ? (
                                <>
                                <Button
                                  className="btn-simple btn-round"
                                  color="primary"
                                  onClick={() => setFormModal3(true)}
                                >
                                Add Member 4
                                </Button>
                                </>):(
                                <>
                                  {userInfo.member4Email}
                                </>)
                              }
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
                      onChange={(e) => setmember2Name(e.target.value)}
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
                      onChange={(e) => setmember2Email(e.target.value)}
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
                        onChange={(e) => setmember2Number(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={member2SubmitHandler}>
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
                      onChange={(e) => setmember3Name(e.target.value)}
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
                      onChange={(e) => setmember3Email(e.target.value)}
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
                        onChange={(e) => setmember3Number(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={member3SubmitHandler}>
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
                      onChange={(e) => setmember4Name(e.target.value)}
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
                      onChange={(e) => setmember4Email(e.target.value)}
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
                        onChange={(e) => setmember4Number(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={member4SubmitHandler}>
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
                      onChange={(e) => setTeamName(e.target.value)}
                      maxLength={100}
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
                      placeholder="Friendly Short Name for your Team"
                      type="text"
                      onFocus={(e) => setShortNameFocus(true)}
                      onBlur={(e) => setShortNameFocus(false)}
                      onChange={(e) => setShortTeamName(e.target.value)}
                      maxLength={20}
                    />
                  </InputGroup>
                  </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={teamNameSubmitHandler}>
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