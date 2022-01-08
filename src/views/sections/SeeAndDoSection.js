import React from "react";
import { Container, Row, Col, CardImg, Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

import { useTranslation } from 'react-i18next';


import bruggeImg from 'assets/img/dkb_brugge_1.webp';
import bikingImg from 'assets/img/dkb_fietsen_3.webp';
import beachImg from 'assets/img/dkb_kust_2.webp';
import diningImg from 'assets/img/dkb_dining_1.webp';


function SeeAndDoSection() {
  const { t } = useTranslation();
  const seeAndDoItems = [
    {
      title: t('Visit Bruge'),
      img: bruggeImg,
      mainLink: 'https://www.brugge.be/',
      otherLinks: [],
    },
    {
      title: t('Cycling in the countryside near Bruge'),
      img: bikingImg,
      // mainLink: 'https://west-vlinderen.be/routes/detail/sxx522/',
      otherLinks: [],
    },
    {
      title: t('Visit the coast'),
      img: beachImg,
      mainLink: 'http://www.dekust.be/',
      // otherLinks: [{
      //   name: 'kustpas.be',
      //   link: 'http://www.kustpas.be/'
      // }],
    },
    {
      title: t('Dining out'),
      img: diningImg,
      mainLink: '',
      otherLinks: [
        {
          name: 'Estaminet Alainprovist',
          link: 'https://www.facebook.com/alainprovistestaminet/',
        },
        {
          name: 'Restaurant Côté Préféré',
          link: 'https://coteprefere.be/',
        },
        {
          name: 'Restaurant \'t Oosthof',
          link: 'http://www.oosthof.be/'
        },
        {
          name: 'Ter Spinde',
          link: 'http://terspinde.be/'
        },
        {
          name: 'Eethuis Mint',
          link: 'http://www.eethuismint.be/restaurant-jabbeke/'
        },
        {
          name: '\'t Hoekske',
          link: 'https://www.tripadvisor.be/Restaurant_Review-g641828-d10840864-Reviews-Praat_En_Eetcafe_T_Hoekske-Jabbeke_West_Flanders_Province.html'
        }
      ],
    },
  ]
  return (
    <div className="section">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h3>{t('See & Do')}</h3>
          </Col>
        </Row>
        <Row>
          {seeAndDoItems.map((item, i) => (
            <Col md="6" key={i}>
              <Card>
                <CardHeader>
                  <CardImg top width="100%" src={item.img} alt="Card image cap" />
                </CardHeader>
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>

                  {item.mainLink && item.mainLink !== '' && (
                    <div className="w-100 text-center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.mainLink}
                        className="btn"
                      >{t('More info')}</a>
                    </div>
                  )}

                  {item.otherLinks && item.otherLinks.length > 0 && (

                    <ul>
                      <CardText>
                        {item.otherLinks.map((linkItem, i) => (
                          <li key={i}><a target="_blank" rel="noopener noreferrer" href={linkItem.link}>{linkItem.name}</a></li>
                        ))}
                      </CardText>
                    </ul>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div >
  );
}

export default SeeAndDoSection;
