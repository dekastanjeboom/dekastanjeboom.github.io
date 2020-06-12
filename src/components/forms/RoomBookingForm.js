import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row, Col,
} from "reactstrap";

function RoomBookingForm(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const { t } = useTranslation();
  return (
    <Form
      action={process.env.REACT_APP_BOOKING_POST_URL}
      className="form"
      method="post"
    >
      <Card className="card-plain">
        <CardHeader className="text-center">
        </CardHeader>
        
        <CardBody>
          <InputGroup
            className={
              "no-border input-lg" +
              (firstFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i class="far fa-user"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              required
              placeholder={t('Name')}
              name="entry.44682580"
              type="text"
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            ></Input>
          </InputGroup>

          <InputGroup
            className={
              "no-border input-lg" +
              (lastFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i class="fas fa-at"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              required
              name="emailAddress"
              placeholder={t("Email address")}
              type="email"
              onFocus={() => setLastFocus(true)}
              onBlur={() => setLastFocus(false)}
            ></Input>
          </InputGroup>

          <Row>
            <Col md="6">
              <InputGroup
                className={
                  "no-border input-md" +
                  (lastFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i class="fas fa-calendar-week"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  required
                  name="???"
                  placeholder={t("From")}
                  type="text"
                  name="entry.1264566198"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                ></Input>
              </InputGroup>
            </Col>
            <Col md="6">
              <InputGroup
                className={
                  "no-border input-md" +
                  (lastFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i class="fas fa-calendar-week"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  required
                  placeholder={t("Until")}
                  type="text"
                  name="entry.378321255"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                ></Input>
              </InputGroup>
            </Col>
          </Row>

          <div class="form-group no-border input-md">
            {/* <label for="exampleFormControlTextarea1">Adres</label> */}
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={t('Address')} name="entry.2138137815"></textarea>
          </div>

          <InputGroup
            className={
              "no-border input-md" +
              (lastFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
              <i class="fas fa-globe-europe"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              required
              name="entry.1094738225"
              placeholder={t("Country")}
              type="text"
              onFocus={() => setLastFocus(true)}
              onBlur={() => setLastFocus(false)}
            ></Input>
          </InputGroup>

          <div class="form-group no-border input-md">
            {/* <label for="exampleFormControlTextarea1">Adres</label> */}
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={t('Message')} name="entry.1443772620"></textarea>
          </div>

        </CardBody>
        <CardFooter className="text-center">
          <Button
            block
            className="btn-round"
            color="info"
            type="submit"
            // href="#pablo"
            // onClick={e => e.preventDefault()}
            size="lg"
          >
            {t('Book room')}
          </Button>
        </CardFooter>
      </Card>
    </Form>
  )
}

RoomBookingForm.propTypes = {
  roomType: PropTypes.string.isRequired,
}

export default RoomBookingForm;