import React from "react";
import { Container, Row, Col } from "reactstrap";
// import o1 from '../../assets/img/dkb_ontbijt_1.webp';
import o2 from '../../assets/img/dkb_ontbijt_2.webp';
// import o3 from '../../assets/img/dkb_ontbijt_3.webp';
import o4 from '../../assets/img/dkb_ontbijt_4.webp';
// import o5 from '../../assets/img/dkb_ontbijt_5.webp';
// import o6 from '../../assets/img/dkb_ontbijt_6.webp';
// import o8 from '../../assets/img/dkb_ontbijt_8.webp';
// import o9 from '../../assets/img/dkb_ontbijt_9.webp';
// import o10 from '../../assets/img/dkb_ontbijt_10.webp';
// import o11 from '../../assets/img/dkb_ontbijt_11.webp';
// import o12 from '../../assets/img/dkb_ontbijt_12.webp';
// import o13 from '../../assets/img/dkb_ontbijt_13.webp';
// import o14 from '../../assets/img/dkb_ontbijt_14.webp';
// import o15 from '../../assets/img/dkb_ontbijt_15.webp';
import { useTranslation } from 'react-i18next';


function BreakfastSection() {
  const { t } = useTranslation();
  return (
    <div className="section">
      <Container>
        <Row>
          <Col xs="3" md="2" style={{ paddingLeft: 0, paddingRight: 0 }}>
            {[o2, o4].map((img, i) => (
              <img
                alt={`breakfast ${i}`}
                src={img}
              />
            ))}

          </Col>
          <Col xs="9" md="10" style={{ paddingLeft: 16, paddingRight: 4 }}>
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
