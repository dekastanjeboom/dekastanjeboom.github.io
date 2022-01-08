import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import bgimg from "assets/img/dkb_huis_2.webp";

import { ROOM_DETAIL_URL_NAME, roomNames, roomImages, STANDARD_ROOM, DELUXE_ROOM } from 'constants/rooms';


function RoomBookingHeader({ roomType, onRoomSelection }) {
  let pageHeader = React.createRef();
  const { t } = useTranslation();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const imageUrls = roomImages[roomType];

  // Carousel
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
        <img src={imgUrl} alt={`room_img_${i}`} style={{maxHeight: '460px', width: 'auto'}} />
      </CarouselItem>
    );
  });
  
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
      >
        <div
          className="page-header-image"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgimg}')`,
            // backgroundSize: 'cover',
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <Col className="ml-auto mr-auto" md="4">
            <h2 style={{ marginBottom: 8 }}>{t(roomNames[roomType])}</h2>
            <a
              onClick={() => {
                if (roomType !== STANDARD_ROOM) {
                  setActiveIndex(0)
                }}}
              className={`btn ${roomType === STANDARD_ROOM ? 'btn-primary' : ''}`}
              href={`${process.env.PUBLIC_URL}/#/${ROOM_DETAIL_URL_NAME}/uptown`}>{t('Uptown room')}</a>
            <a
              onClick={() => {
                if (roomType !== DELUXE_ROOM) {
                  setActiveIndex(0)
                }
              }}
              className={`btn ${roomType === DELUXE_ROOM ? 'btn-primary' : ''}`}
              href={`${process.env.PUBLIC_URL}/#/${ROOM_DETAIL_URL_NAME}/downtown`}
            >{t('Downtown room')}</a>
          </Col>

          <Row>
            <Col md="12" style={{ padding: 8 }}>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators items={imageUrls} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RoomBookingHeader;
