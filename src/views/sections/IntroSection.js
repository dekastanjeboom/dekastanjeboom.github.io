import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import introImg from '../../assets/img/dkb_greet.webp';

// core components

function IntroSection() {
  // Translations
  const { t } = useTranslation();
  return (
    <div className="section">
      <Container>
        <Row>

          <Col xs="12" sm="6" md="8" className="text-center">
            <h3>{t('Welcome')}</h3>
            <p>{t('[initial_welcome_message]')}</p>
          </Col>
          <Col xs="12" sm="6" md="4" className="text-center">
            <img alt="owner" style={{ display: 'inline' }} src={introImg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroSection;
