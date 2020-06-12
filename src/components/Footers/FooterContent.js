import React from 'react';
import { useTranslation } from 'react-i18next'
import { Container } from 'reactstrap';

export default function FooterContent() {
  const { t } = useTranslation();
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <div>
              <div>De kastanjeboom</div>
              <div><a href="mailto:info@dekastanjeboom.be" style={{
                padding: 0, fontSize: 'inherit',
                textTransform: 'none',
                textDecoration: 'underline'
              }}>info@dekastanjeboom.be</a></div>
              <div>Kastanjebosstraat 19</div>
              <div>8490 Jabbeke ({t('Belgium')})</div>
              <div>Tel: +32 (0)50 81 22 83</div>
              <div>Gsm: +32 (0)473 47 89 98</div>
            </div>
          </li>

        </ul>
      </nav>
      <div>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Kastanjebosstraat%2019%208490%20Jabbeke%20(Belgium)&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
      </div>


      <div className="copyright mb-3 ml-3" id="copyright">
        © {new Date().getFullYear()}, <a href="mailto:bert.lievrouw@gmail.com">Bert Lievrouw</a>
      </div>

    </Container>
  )
}