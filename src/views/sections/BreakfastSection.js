import React from "react";
import { Container, Row, Col } from "reactstrap";
import firstBreakfastImg from '../../assets/img/breakfast/breakfast_1.webp';
import secondBreakfastImg from '../../assets/img/breakfast/breakfast_2.webp';
import { useTranslation } from 'react-i18next';


function BreakfastSection() {
  const { t } = useTranslation();
  return (
    <div className="section">
      <Container>
        <Row>
          <Col xs="2" md="1" style={{paddingLeft: 0, paddingRight: 0}}>
            <img
              alt="breakfast 1"
              src={firstBreakfastImg}
            />
            <img
              alt="breakfast 2"
              src={secondBreakfastImg}
            />
          </Col>
          <Col xs="10" md="11" style={{paddingLeft: 16, paddingRight: 4}}>
            <div>
              <h3>{t('Breakfast')}</h3>
              <p>{t('[breakfast_message]')}</p>

            </div>
          </Col>
          {/* <Col xs="3" style={{paddingLeft: 0, paddingRight: 0}}>
            
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default BreakfastSection;
