import u1 from '../assets/img/dkb_uptown_1.webp';
import u2 from '../assets/img/dkb_uptown_2.webp';

import d1 from '../assets/img/dkb_downtown_1.webp';
import d2 from '../assets/img/dkb_downtown_2.webp';
import d3 from '../assets/img/dkb_downtown_3.webp';
import d4 from '../assets/img/dkb_downtown_4.webp';
import d5 from '../assets/img/dkb_downtown_5.webp';

export const ROOM_DETAIL_URL_NAME = 'rooms';

export const STANDARD_ROOM = 'uptown';
export const DELUXE_ROOM = 'downtown';

export const roomTypes = [STANDARD_ROOM, DELUXE_ROOM];

// Room prices
export const roomPricesPerNight = {
  [STANDARD_ROOM]: process.env.REACT_APP_PRICE_PER_ROOM_PER_NIGHT_EURO_STANDARD,
  [DELUXE_ROOM]: process.env.REACT_APP_PRICE_PER_ROOM_PER_NIGHT_EURO_DELUXE,
};


export const roomAvailability = [
  process.env.REACT_APP_STANDARD_ROOM_IS_AVAILABLE,
  process.env.REACT_APP_DELUXE_ROOM_IS_AVAILABLE,
];

export const roomNames = {
  [STANDARD_ROOM]: 'Uptown',
  [DELUXE_ROOM]: 'Downtown',
}

export const roomDescriptions = {
  [STANDARD_ROOM]: 'Upstairs room',
  [DELUXE_ROOM]:  'Downstairs room with adjoining terras',

}

export const roomImages = {
  [STANDARD_ROOM]: [u1, u2],
  [DELUXE_ROOM]: [d1, d2, d3, d4, d5],
}



export const roomInfo = {
  [STANDARD_ROOM]: 'The room has two single beds and a sofa bed (for one extra person) available. This room has a private bathroom downstairs.',
  [DELUXE_ROOM]: 'The room has one double and a sofa bed ( for 1 extra person) available. This room has a private bathroom in the room and access to a terrace.',
}

export const bookingTitle = {
  [STANDARD_ROOM]: 'Book the uptown room',
  [DELUXE_ROOM]: 'Book the downtown room',
}

//TRANSLATION: Amenity names need to be translated
export const amenities = [
  {
    name: 'WiFi',
    iconClassName: 'fas fa-wifi',
  },
  {
    name: 'Shower',
    iconClassName: 'fas fa-shower',
  },
  {
    name: 'TV',
    iconClassName: 'fas fa-tv',
  },
  {
    name: 'Parking',
    iconClassName: 'fas fa-parking',
  },
  {
    name: 'Sofabed for one extra person',
    iconClassName: 'fas fa-bed'
  },
  {
    name: 'Airco',
    iconClassName: '',
  },
  {
    name: 'Towels',
    iconClassName: '',
  },
  {
    name: 'Hairdryer',
    iconClassName: '',
  },
  {
    name: 'Silent fridge',
    iconClassName: '',
  },
  {
    name: 'Terras',
    iconClassName: ''
  }
]

export const amenityAvailability = {
  [STANDARD_ROOM]: [true, true, true, true, true, true, true, true, true, false],
  [DELUXE_ROOM]: [true, true, true, true, true, true, true, true, true, true],
}
