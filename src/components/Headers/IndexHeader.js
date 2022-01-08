/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import bgimg from "assets/img/dkb_huis_1.webp";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
        }
        
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgimg}')`,
            backgroundSize: 'cover',
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/chest_nut.webp")}
            ></img>
            <h1 className="h1-seo" style={{textTransform: 'none'}}>De KaSTaNJeBooM</h1>
            <h3>Bed & Breakfast</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
