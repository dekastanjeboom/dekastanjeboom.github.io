import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import {
  Container,
  Col,
  Row,
  Card,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardBody,
  CardText,
  CardHeader,
  TabPane,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import houseSideImg from 'assets/img/house_side.webp';
import { ROOM_DETAIL_URL_NAME, roomNames, roomImages } from 'utils/rooms';


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

  console.log("imageUrl", imageUrls);

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
    <>
      <div
        className="page-header clear-filter page-header-small"
      >
        <div
          className="page-header-image"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${houseSideImg}')`,
            backgroundSize: 'cover',
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <Col className="ml-auto mr-auto" md="4">
            <h2 style={{ marginBottom: 8 }}>{roomNames[roomType]}</h2>
            <a
              onClick={() => {
                if (roomType !== 'standard') {
                  setActiveIndex(0)
                }}}
              className={`btn ${roomType === 'standard' ? 'btn-primary' : ''}`}
              href={`${process.env.PUBLIC_URL}/#/${ROOM_DETAIL_URL_NAME}/standard`}>{t('Standard room')}</a>
            <a
              onClick={() => {
                if (roomType !== 'deluxe') {
                  setActiveIndex(0)
                }
              }}
              className={`btn ${roomType === 'deluxe' ? 'btn-primary' : ''}`}
              href={`${process.env.PUBLIC_URL}/#/${ROOM_DETAIL_URL_NAME}/deluxe`}
            >{t('Deluxe room')}</a>
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
