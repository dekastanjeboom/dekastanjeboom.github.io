import React from "react";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

import { useTranslation } from "react-i18next";


function MainNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const { asIndex } = props;
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar 
      fixed={'top'}
      className={navbarColor} 
      expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href={process.env.PUBLIC_URL + '/'}
              // target="_blank"
              id="navbar-brand"
            >
              De kastanjeboom
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              {t('Bed & Breakfast')}
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {asIndex ? (
                <React.Fragment>
                  <NavItem>
                    <NavLink
                      onClick={e => {
                        e.preventDefault();
                        document.documentElement.classList.toggle("nav-open");
                        document
                          .getElementById("intro-section")
                          .scrollIntoView();
                      }}
                    >
                      {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                      <p>{t('Intro')}</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={e => {
                        e.preventDefault();
                        document.documentElement.classList.toggle("nav-open");
                        document
                          .getElementById("breakfast-section")
                          .scrollIntoView();
                      }}
                    >
                      {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                      <p>{t('Breakfast')}</p>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      onClick={e => {
                        e.preventDefault();
                        document.documentElement.classList.toggle("nav-open");
                        document
                          .getElementById("seeanddo-section")
                          .scrollIntoView();
                      }}
                    >
                      {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                      <p>{t('See & Do')}</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={e => {
                        e.preventDefault();
                        document.documentElement.classList.toggle("nav-open");
                        document
                          .getElementById("photos-section")
                          .scrollIntoView();
                      }}
                    >
                      {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                      <p>{t('Photos')}</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                    // <Button
                      // className="nav-link btn-neutral"
                      color="info"
                      id="rooms-section-link"
                      onClick={e => {
                        e.preventDefault();
                        document.documentElement.classList.toggle("nav-open");
                        document
                          .getElementById("rooms-section")
                          .scrollIntoView();
                      }}
                    >
                      {/* <i className="now-ui-icons arrows-1_share-66 mr-1"></i> */}
                      <p>{t('Our rooms')}</p>
                    {/* </Button> */}
                    </NavLink>
                    <UncontrolledTooltip target="#rooms-section-link">
                      {t('Take a look at our rooms')}
                    </UncontrolledTooltip>
                  </NavItem>
                </React.Fragment>
              ) : (
                  <NavItem>
                    <NavLink
                      href={`${process.env.PUBLIC_URL}/`}
                    >
                      <p>Info</p>
                    </NavLink>
                  </NavItem>
                )}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>{t('Book a room')}</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to={`${process.env.PUBLIC_URL}/rooms/standard`} tag={Link}>
                    {t('Standard')}
                  </DropdownItem>
                  <DropdownItem to={`${process.env.PUBLIC_URL}/rooms/deluxe`} tag={Link}>
                    {t('Deluxe')}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  href={process.env.REACT_APP_FACEBOOK_LINK}
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  {t('Find us on Facebook')}
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href={process.env.REACT_APP_TRIPADVISOR_LINK}
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-tripadvisor"></i>
                  <p className="d-lg-none d-xl-none">TripAdvisor</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  {t("Watch our reviews on Tripadvisor")}
                </UncontrolledTooltip>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>{t('LanguageCodeUppercase')}</p>
                </DropdownToggle>
                <DropdownMenu>
                  {t('LanguageCodeUppercase') !== 'EN' && (
                    <DropdownItem onClick={() => changeLanguage("en")}>
                      EN
                    </DropdownItem>
                  )}
                  {t('LanguageCodeUppercase') !== 'NL' && (
                    <DropdownItem onClick={() => changeLanguage("nl")}>
                    NL
                  </DropdownItem>
                  )}
                  {t('LanguageCodeUppercase') !== 'DE' && (
                    <DropdownItem onClick={() => changeLanguage("de")}>
                    DE
                  </DropdownItem>
                  )}
                  {t('LanguageCodeUppercase') !== 'FR' && (
                    <DropdownItem onClick={() => changeLanguage("fr")}>
                    FR
                  </DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

MainNavbar.propTypes = {
  asIndex: PropTypes.bool,
}

MainNavbar.defaultProps = {
  asIndex: false,
}

export default MainNavbar;
