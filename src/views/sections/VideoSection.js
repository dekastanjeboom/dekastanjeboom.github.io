import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "reactstrap";

// core components

function VideoSection() {
  // Translations
  const { t } = useTranslation();
  return (
    <div className="section">
      <Container>
        <Row>

          <Col md="12" className="text-center">
            <h3>{t('Jabbeke')}</h3>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="text-center">
            <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/G7zhh63E7_A"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoSection;
