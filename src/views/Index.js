import React from "react";

import { Container, Row, Col, Button } from 'reactstrap';

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter";

// sections for this page
import IntroSection from './sections/IntroSection';
import RoomsSection from './sections/RoomsSection';
import BreakfastSection from './sections/BreakfastSection';
import SeeAndDoSection from './sections/SeeAndDoSection';
import PhotosSection from './sections/PhotosSection';

import { ROOM_DETAIL_URL_NAME } from 'constants/rooms';
import { withTranslation } from 'react-i18next';


function Index({ t }) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <MainNavbar asIndex />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <div id="intro-section">
            <IntroSection />
          </div>
          <div id="rooms-section">
            <RoomsSection />
          </div>
          <div id="breakfast-section">
            <BreakfastSection />
          </div>

          <div id="seeanddo-section">
            <SeeAndDoSection />
          </div>
          <div id="photos-section">
            <PhotosSection />
          </div>

          <Container>
            <Row>
              <Col md="12" className="text-center mb-4">
                <Button
                  block
                  className="btn-round"
                  color="info"
                  href={`${process.env.PUBLIC_URL}/#/${ROOM_DETAIL_URL_NAME}`}
                  role="button"
                  size="lg"
                >
                  {t('Book a room')}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default withTranslation()(Index);
