import piano from '../assets/soccerImg.svg';
import basket from '../assets/basquetImg.svg';
import yoga from '../assets/raquetaImg.svg';

import { IoIosLogIn, IoIosLogOut } from 'react-icons/io';
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
} from 'react-icons/fa';

export const links = [
  {
    href: '#',
    icon: FaChartBar,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: FaCalendarAlt,
    text: 'Kanban',
    badge: {
      text: 'Pro',
      color: 'bg-gray-100 text-gray-800',
      darkColor: 'dark:bg-gray-700 dark:text-gray-300',
    },
  },
  {
    href: '#',
    icon: FaFacebookMessenger,
    text: 'Inbox',
    badge: {
      text: '4',
      color: 'bg-blue-100 text-blue-800',
      darkColor: 'dark:bg-blue-900 dark:text-blue-300',
    },
  },
  {
    href: '#',
    icon: FaUsersCog,
    text: 'Users',
  },
  {
    href: '#',
    icon: FaListAlt,
    text: 'Products',
  },
  {
    href: '#',
    icon: IoIosLogIn,
    text: 'Sign In',
  },
  {
    href: '#',
    icon: IoIosLogOut,
    text: 'Sign Up',
  },
];

export const intro = {
  title: 'Descubre Cultura & Deportes',
  description:
    'La cultura abarca conocimientos, creencias y expresiones que definen a una sociedad, mientras que el deporte es actividad física recreativa o competitiva. Incluyen arte, música, literatura, religión y deportes como atletismo y fútbol.',
};

export const tallerInfo = [
  {
    name: 'Piano',
    frase: 'Aprende a tocar piano',
    image: piano,
  },
  {
    name: 'Basketball',
    frase: 'Disfruta de jugar basketball ',
    image: basket,
  },
  {
    name: 'Yoga',
    frase: 'Relajarte haciendo yoga',
    image: yoga,
  },
];
