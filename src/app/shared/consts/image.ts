import { LogoNavModule, NavModule } from '../../modules/nav.module';
import language_logo from '../../../assets/images/Icon - Planet.svg';
import logo_1 from '../../../assets/images/social media/Buttons - Socials-1.svg';
import logo_2 from '../../../assets/images/social media/Buttons - Socials-2.svg';
import logo_3 from '../../../assets/images/social media/Buttons - Socials-3.svg';
import logo_4 from '../../../assets/images/social media/Buttons - Socials-4.svg';
import logo_5 from '../../../assets/images/social media/Buttons - Socials-5.svg';
import logo_6 from '../../../assets/images/social media/Buttons - Socials-6.svg';
import logo_7 from '../../../assets/images/social media/Buttons - Socials.svg';
import line1_shield from '../../../assets/line_1/Shield.svg';
import line1_m from '../../../assets/line_1/M.svg';
import line_Soccer from '../../../assets/line_1/Soccer.svg';
import line_Group from '../../../assets/line_1/Group.svg';

import line2_Vector from '../../../assets/line_2/Vector.svg';
import line2_Crown from '../../../assets/line_2/Crown.svg';
import line2_Timer from '../../../assets/line_2/Timer.svg';
import line2_M from '../../../assets/line_1/M.svg';

import line3_Soccer from '../../../assets/line_3/Soccer.svg';
import line3_Shield from '../../../assets/line_3/Shield.svg';
import line3_M from '../../../assets/line_3/M.svg';
import line3__Crown from '../../../assets/line_2/Crown.svg';


const ImagesSocialMedia:NavModule[] = [
  {
    id:1,
    image: logo_1,
    url:'#'
  },
  {
    id:2,
    image: logo_2,
    url:'#'
  },
  {
    id:3,
    image: logo_3,
    url:'#'
  },
  {
    id:4,
    image: logo_4,
    url:'#'
  },
  {
    id:5,
    image: logo_5,
    url:'#'
  },
  {
    id:6,
    image: logo_6,
    url:'#'
  },
  {
    id:7,
    image: logo_7,
    url:'#'
  }
];

const line_1 = [line1_shield, line1_m, line_Soccer, line2_Crown];
const line_2 = [line3_Soccer, line2_Crown, line2_Timer, line2_M];
const line_3 = [line3_Soccer, line3_Shield, line3_M, line3__Crown];

const bunner_1 = [...line_1, ...line_1, ...line_1, line_1];
const bunner_2 = [...line_2, ...line_2, ...line_2, line_2];
const bunner_3 = [...line_3, ...line_3, ...line_3, line_3];

export { language_logo, ImagesSocialMedia, bunner_1,  bunner_2, bunner_3};