import standardRoomOverviewImg from '../assets/img/rooms/standard/standard_overview.jpg';
import standardRoomBathroomImg from '../assets/img/rooms/standard/standard_bathroom.jpg';

import deluxeRoomOverviewImg from '../assets/img/rooms/deluxe/deluxe_overview.jpg';
import deluxeRoomTerrasImg from '../assets/img/rooms/deluxe/deluxe_terras.jpg';
import deluxeRoomBathroomImg from '../assets/img/rooms/deluxe/deluxe_bathroom.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export const ROOM_DETAIL_URL_NAME = 'rooms';

export const STANDARD_ROOM = 'standard';
export const DELUXE_ROOM = 'deluxe';

export const roomTypes = [STANDARD_ROOM, DELUXE_ROOM];

export const roomPricesPerNight = {
  standard: process.env.REACT_APP_PRICE_PER_ROOM_PER_NIGHT_EURO_STANDARD,
  deluxe: process.env.REACT_APP_PRICE_PER_ROOM_PER_NIGHT_EURO_DELUXE,
};

export const roomAvailability = [
  process.env.REACT_APP_STANDARD_ROOM_IS_AVAILABLE,
  process.env.REACT_APP_DELUXE_ROOM_IS_AVAILABLE,
];

export const roomNames = {
  standard: 'Standard room',
  deluxe: 'Deluxe room',
}

export const roomDescriptions = {
  standard: i18n.t('Upstairs room'),
  deluxe:  i18n.t('Downstairs room with adjoining terras'),

}

export const roomImages = {
  standard: [standardRoomOverviewImg, standardRoomBathroomImg],
  deluxe: [deluxeRoomOverviewImg, deluxeRoomTerrasImg, deluxeRoomBathroomImg],
}

export const amenities = [
  {
    name: 'WiFi',
    iconClassName: 'fas fa-wifi',
  },
  {
    name: i18n.t('Shower'),
    iconClassName: 'fas fa-shower',
  },
  {
    name: i18n.t('TV'),
    iconClassName: 'fas fa-tv',
  },
  {
    name: i18n.t('Parking'),
    iconClassName: 'fas fa-parking',
  },
  {
    name: i18n.t('Sofabed for one extra person'),
    iconClassName: 'fas fa-bed'
  },
  {
    name: i18n.t('Towels'),
    iconClassName: '',
  },
  {
    name: i18n.t('Hairdryer'),
    iconClassName: '',
  },
  {
    name: i18n.t('Silent fridge'),
    iconClassName: '',
  },
  {
    name: i18n.t('Terras'),
    iconClassName: ''
  }
]

export const amenityAvailability = {
  standard: [true, true, true, true, true, true, true, true, false],
  deluxe: [true, true, true, true, true, true, true, true, true],
}

export const roomInfo = {
  standard: i18n.t('The room has two single beds and a sofa bed (for one extra person) available. This room has a private bathroom downstairs.'),
  deluxe: i18n.t('The room has one double and a sofa bed ( for 1 extra person) available. This room has a private bathroom in the room and access to a terrace.'),
}

export const bookingTitle = {
  standard: i18n.t('Book a standard room'),
  deluxe: i18n.t('Book a deluxe room'),
}