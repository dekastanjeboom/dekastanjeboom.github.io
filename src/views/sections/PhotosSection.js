import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import img1 from 'assets/img/other/de_kastanjeboom_stone.webp';
import img2 from 'assets/img/other/certificaat.JPG';
import img3 from 'assets/img/breakfast/breakfast_3.JPG';
import img4 from 'assets/img/other/kaartje.JPG';
import img5 from 'assets/img/house-outside/house.webp';
import img6 from 'assets/img/other/maskobos.JPG';
import img7 from 'assets/img/other/vaart.JPG';
import img8 from 'assets/img/other/vaart2.JPG';
import img9 from 'assets/img/other/permeke1.JPG';
import img10 from 'assets/img/other/permeke2.JPG';
import img11 from 'assets/img/other/fietsen_dekanstanjeboom.JPG'

function PhotosSection() {
  const imageUrls = [img2, img3, img4, img1, img5, img6, img7, img8, img9, img10, img11];

  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imageUrls.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imageUrls.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = imageUrls.map((imgUrl, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <img src={imgUrl} alt={`room_img_${i}`} />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div className="section">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h3>{t('Photos')}</h3>
          </Col>
        </Row>
        <Col md="8" className="offset-md-2">
          <Carousel style={{ maxHeight: 350 }}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>

      </Container>
    </div>
  );
}

export default PhotosSection;
