import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
// import { STANDARD_ROOM, DELUXE_ROOM } from '../../constants/rooms';
import { roomTypes, roomDescriptions, roomPricesPerNight, roomImages, ROOM_DETAIL_URL_NAME } from '../../constants/rooms';


// core components

function RoomsSection() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h3>{t('Our rooms')}</h3>
            {/* <p>{t('The downstairs room has a bathroom with toilet, shower and sink. The upstairs bathroom is on the ground floor. Each room has a flat screen TV, fridge, air conditioning and wifi.')}</p> */}
          </Col>
        </Row>
        <Row>
          {roomTypes.map((roomType, i) => (
            <Col md="6" className="text-center" key={i}>
              <Card>
                <CardImg top width="100%" src={roomImages[roomType].length > 0 ? roomImages[roomType][0] : ''} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{t(roomDescriptions[roomType])}</CardTitle>
                  {/* <CardSubtitle></CardSubtitle> */}
                  <CardText>
                    <span style={{ display: 'block' }}>€{roomPricesPerNight[roomType]}</span>
                    <sup style={{ display: 'block', lineHeight: '15px' }}>{t('per night')}</sup>
                    {/* <small style={{ lineHeight: '15px', display: 'block' }}>€{Number(roomPricesPerNight[roomType]) + Number(process.env.REACT_APP_PRICE_INCREASE_PER_ROOM_WEEKEND_HOLIDAYS)}&nbsp;{t('per night')}&nbsp;{t('during weekends and school holidays')}</small> */}
                  </CardText>
                  <a
                    href={`${process.env.PUBLIC_URL}/#/${ROOM_DETAIL_URL_NAME}/${roomType}`}
                    className="btn"
                  >{t('More info')}</a>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default RoomsSection;
