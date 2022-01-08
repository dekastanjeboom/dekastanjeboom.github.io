import React from "react";

import { withTranslation } from 'react-i18next';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  TabPane,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import MainNavbar from 'components/Navbars/MainNavbar';
import DarkFooter from 'components/Footers/DarkFooter';
import RoomBookingHeader from "../../components/Headers/RoomBookingHeader";
import { amenities, amenityAvailability, roomInfo, roomPricesPerNight, bookingTitle } from 'constants/rooms';


class RoomBookingPage extends React.Component {
  state = {
    iconPill: "1",
  }

  setIconPill = (iconPill) => {
    this.setState({ iconPill })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
  }

  componentDidUpdate() {
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
  }

  componentWillUnmount() {
    document.body.classList.remove("sidebar-collapse");
  }

  render() {
    const { t, location } = this.props;
    const urlChunks = location.pathname.split('/');
    const roomType = urlChunks[urlChunks.length - 1];

    return (
      <>
        <MainNavbar />
        <div className="wrapper">
          <RoomBookingHeader roomType={roomType} onRoomSelection={() => this.setIconPill('1')} />
          <Container>
            <Col md="12" style={{ padding: 4 }}>
              <Card style={{ color: '#000', boxShadow: 'none' }}>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={this.state.iconPill === "1" ? "active" : ""}
                        onClick={e => {
                          e.preventDefault();
                          this.setIconPill("1");
                        }}
                      >
                        <i className="now-ui-icons travel_info"></i>
                        {t('Info')}
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={this.state.iconPill === "2" ? "active" : ""}
                        onClick={e => {
                          e.preventDefault();
                          this.setIconPill("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        {t('House rules')}

                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={this.state.iconPill === "3" ? "active" : ""}
                        onClick={e => {
                          e.preventDefault();
                          this.setIconPill("3");
                        }}
                      >
                        <i className="now-ui-icons ui-1_simple-add"></i>
                        {t('Extras')}
                      </NavLink>
                    </NavItem>

                  </Nav>
                </CardHeader>
                <CardBody style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + this.state.iconPill}
                  >
                    <TabPane tabId="iconPills1">
                      <Container>
                        <Row className="mb-2">
                          <Col xs="5" className="text-right" style={{ paddingLeft: 8, paddingRight: 8 }}>
                            <b>{t('Info')}</b>
                          </Col>
                          <Col xs="7" className="text-left">
                            {t(roomInfo[roomType])}
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col xs="5" className="text-right" style={{ paddingLeft: 8, paddingRight: 8 }}>
                            <b>{t('Amenities')}</b>
                          </Col>
                          <Col xs="7" className="text-left">

                            {roomType && roomType !== '' && (
                              <ul style={{ listStyleType: 'none', paddingLeft: 16 }}>
                                {amenities
                                  .filter((a, i) => amenityAvailability[roomType][i])
                                  .map((amenityObj) => (
                                    <li key={amenityObj.name} style={{ position: 'relative' }}>
                                      {amenityObj.iconClassName !== ''
                                        ? <i className={`fa-li ${amenityObj.iconClassName}`} />
                                        : <i className={`fa-li fas fa-check`} />}
                                      {t(amenityObj.name)}</li>
                                  ))}
                              </ul>
                            )}
                          </Col>
                        </Row>
                        
                        <Row className="mb-2">
                          <Col xs="5" className="text-right" style={{ paddingLeft: 8, paddingRight: 8 }}>
                            <b>{t('Price per night')}</b>
                          </Col>
                          <Col xs="7" className="text-left">
                            <span>€{roomPricesPerNight[roomType]}</span>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col xs="5" className="text-right" style={{ paddingLeft: 8, paddingRight: 8 }}>
                            <b>{t('Minimum reservation')}</b>
                          </Col>
                          <Col xs="7" className="text-left">
                            <span>{t('Two nights')}</span>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col xs="5" className="text-right" style={{ paddingLeft: 8, paddingRight: 8 }}>
                            <b>{t('Check-in and out')}</b>
                          </Col>
                          <Col xs="7" className="text-left">
                            <div>{t('Check-in from 5pm')}</div>
                            <div>{t('Check-out until 11am')}</div>
                          </Col>
                        </Row>
                        
                      </Container>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <ul style={{ listStyleType: 'none' }}>
                        <li>{t('Minimumreservation: 2 nights')}</li>
                        <li>{t('Non-smokers')}</li>
                        <li>{t('Pets not allowed')}</li>
                        <li>{t('Cash payment')}</li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <ul style={{ listStyleType: 'none' }}>
                        <li>{t("Childrens bed available (+€5 per night)")}</li>
                        <li>{t('A reservation of a single night is possible on request according to availability (+€10).')}</li>
                      </ul>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Container>
          <div className="section">
            <Container>

              <Col className="ml-auto mr-auto text-center" md="8">
                <h3>{t(bookingTitle[roomType])}</h3>

                <Button
                  block
                  className="btn-round"
                  color="info"
                  href={`mailto:info@dekastanjeboom.be?subject=${t(bookingTitle[roomType])}`}
                  role="button"
                  size="lg"
                >
                  {t('Send us an e-mail')}
                </Button>

                <p><b>{t('Or just give us a call')}</b></p>
                <p>
                  {process.env.REACT_APP_PHONE_NR_CELL}
                </p>
                <p>
                  {process.env.REACT_APP_PHONE_NR_HOME}
                </p>
                

              </Col>
            </Container>
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }
}

export default withTranslation()(RoomBookingPage);
