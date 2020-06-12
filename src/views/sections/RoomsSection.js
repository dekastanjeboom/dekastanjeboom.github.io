import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Link } from "reactstrap";
import { STANDARD_ROOM, DELUXE_ROOM } from '../../utils/rooms';
import { roomTypes, roomDescriptions, roomPricesPerNight, roomImages, ROOM_DETAIL_URL_NAME } from '../../utils/rooms'

// core components

function RoomsSection() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h3>{t('Our rooms')}</h3>
            <p>{t('You can choose between two rooms. Both rooms are adjoined by a bathroom with toilet, shower and sink. The rooms also have a TV, fridge and wireless internet.')}</p>
          </Col>
        </Row>
        <Row>
          {roomTypes.map((roomType, i) => (
            <Col md="6" className="text-center">
              <Card>
                <CardImg top width="100%" src={roomImages[roomType].length > 0 ? roomImages[roomType][0] : ''} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{roomDescriptions[roomType]}</CardTitle>
                  {/* <CardSubtitle></CardSubtitle> */}
                  <CardText>
                    {/* <div>
                      <sub>Vanaf</sub>
                    </div> */}
                    <div>€{roomPricesPerNight[roomType]}
                    </div>
                    <div>
                      <sup>{t('per night')}</sup>
                    </div>
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
