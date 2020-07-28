import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import materFamiliasImg from '../../assets/img/house-outside/mater_familias.webp';

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
            <p>
              {t('In a newly furnished home, located in a quiet and green neighbourhood, two cosy guestrooms were set up. The house is located in Jabbeke, in between Oostende en Brugge, twelve kilometer off the coast (exit 6 of the E40 highway).')}
            </p>


            <p>
              {t("You'll be received friendly by Greet. In the morning, you can enjoy a well catered and delicious meal. A comprehensive, touristy informationpacket will be waiting for you.")}
            </p>

            <p>
              {t("It's an ideal starting point for biking routes and trips.")}
            </p>
          </Col>
          <Col xs="12" sm="6" md="4" className="text-center">
            <img alt="owner" style={{ display: 'inline' }} src={materFamiliasImg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroSection;
