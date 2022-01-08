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

import i1 from 'assets/img/dkb_decoratie_1.webp';
import i2 from 'assets/img/dkb_fietsen_1.webp';
import i3 from 'assets/img/dkb_fietsen_2.webp';
import i4 from 'assets/img/dkb_fietsen_3.webp';
import i5 from 'assets/img/dkb_huis_1.webp';
import i6 from 'assets/img/dkb_huis_2.webp';
import i7 from 'assets/img/dkb_huis_3.webp';
import i8 from 'assets/img/dkb_huis_4.webp';
import i9 from 'assets/img/dkb_huis_5.webp';
import i10 from 'assets/img/dkb_huis_6.webp';
import i18 from 'assets/img/dkb_huis_7.webp';
import i11 from 'assets/img/dkb_omgeving_1.webp';
import i12 from 'assets/img/dkb_omgeving_2.webp';
import i13 from 'assets/img/dkb_omgeving_3.webp';
import i14 from 'assets/img/dkb_omgeving_4.webp';
import i15 from 'assets/img/dkb_tuin_1.webp';
import i16 from 'assets/img/dkb_tuin_2.webp';
import i17 from 'assets/img/dkb_tuin_3.webp';


import o1 from '../../assets/img/dkb_ontbijt_1.webp';
import o2 from '../../assets/img/dkb_ontbijt_2.webp';
import o3 from '../../assets/img/dkb_ontbijt_3.webp';
import o4 from '../../assets/img/dkb_ontbijt_4.webp';
import o5 from '../../assets/img/dkb_ontbijt_5.webp';
import o6 from '../../assets/img/dkb_ontbijt_6.webp';
import o7 from '../../assets/img/dkb_ontbijt_7.webp';
import o8 from '../../assets/img/dkb_ontbijt_8.webp';
import o9 from '../../assets/img/dkb_ontbijt_9.webp';
import o10 from '../../assets/img/dkb_ontbijt_10.webp';
import o11 from '../../assets/img/dkb_ontbijt_11.webp';
import o12 from '../../assets/img/dkb_ontbijt_12.webp';
import o13 from '../../assets/img/dkb_ontbijt_13.webp';
// import o14 from '../../assets/img/dkb_ontbijt_14.webp';
import o15 from '../../assets/img/dkb_ontbijt_15.webp';


function PhotosSection() {
  const imageUrls = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o15];

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
