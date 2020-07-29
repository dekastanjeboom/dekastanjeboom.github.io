/*eslint-disable*/
import React from "react";
import { withTranslation } from 'react-i18next';
// reactstrap components
import { Container, Row, Col } from "reactstrap";


function DarkFooter({ t }) {
  const gmapsEmbededMapURL = 'https://maps.google.com/maps?q=Kastanjebosstraat%2019%208490%20Jabbeke%20(Belgium)&t=&z=13&ie=UTF8&iwloc=&output=embed';
  return (
    <footer className="footer" data-background-color="black">
      <Container style={{ paddingLeft: 4, paddingRight: 4 }}>
        <Row>
          <Col xs="12" md="6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16}}>
            <div className="text-center">
              <div>De kastanjeboom</div>
              <a href="mailto:info@dekastanjeboom.be" style={{ display: 'block' }}>info@dekastanjeboom.be</a>
              <div>Kastanjebosstraat 19</div>
              <div>8490 Jabbeke ({t('Belgium')})</div>
              <div>Tel: +32 (0)50 81 22 83</div>
              <div>Gsm: +32 (0)473 47 89 98</div>
            </div>
          </Col>
          <Col xs="12" md="6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16}}>
            <div>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe id="gmap_canvas" src={gmapsEmbededMapURL} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <div className="w-100 text-center copyright" id="copyright">
            © {process.env.REACT_APP_YEAR_LAST_UPDATED}, <a href="mailto:bert.lievrouw@gmail.com">Bert Lievrouw</a>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default withTranslation()(DarkFooter);
