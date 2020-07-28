import React from "react";


// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter";

// sections for this page
import IntroSection from './sections/IntroSection';
import RoomsSection from './sections/RoomsSection';
import BreakfastSection from './sections/BreakfastSection';
import SeeAndDoSection from './sections/SeeAndDoSection';
import PhotosSection from './sections/PhotosSection';

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <MainNavbar asIndex />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <div id="intro-section">
            <IntroSection />
          </div>
          <div id="rooms-section">
            <RoomsSection />
          </div>
          <div id="breakfast-section">
            <BreakfastSection />
          </div>

          <div id="seeanddo-section">
            <SeeAndDoSection />
          </div>
          <div id="photos-section">
            <PhotosSection />
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
