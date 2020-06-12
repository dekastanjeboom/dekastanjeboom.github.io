import React from "react";
import { Container, Row, Col, CardImg, Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

import { useTranslation } from 'react-i18next';


import bruggeImg from 'assets/img/see-and-do/brugge.webp';
import bikingImg from 'assets/img/see-and-do/biking.webp';
import beachImg from 'assets/img/see-and-do/beach.webp';
import diningImg from 'assets/img/see-and-do/dining.webp';


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
      mainLink: 'https://west-vlinderen.be/routes/detail/sxx522/',
      otherLinks: [],
    },
    {
      title: t('Visit the coast'),
      img: beachImg,
      mainLink: 'http://www.dekust.be/',
      otherLinks: [{
        name: 'kustpas.be',
        link: 'http://www.kustpas.be/'
      }],
    },
    {
      title: 'Dining out',
      img: diningImg,
      mainLink: '',
      otherLinks: [
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
        }
      ],
    }
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
            <Col md="3">
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
                    <CardText>
                      <ul>
                        {item.otherLinks.map((linkItem) => (
                          <li><a target="_blank" rel="noopener noreferrer" href={linkItem.link}>{linkItem.name}</a></li>
                        ))}
                      </ul>
                    </CardText>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SeeAndDoSection;
