import Navigation from '../../shared/UI/navigation/navigation';
import NavigationLogo from '../../shared/UI/navigation/navigation-logo';
import { nav_footer } from '../../shared/consts/const-nav';
import { ImagesSocialMedia } from '../../shared/consts/image';
import './footer.scss';


export const Footer = () => {
  return (
    <footer className='wrapper-footer'>
      <div className='wrapper-footer__container'>
        <nav className='footer-nav'>
        <Navigation
          classNameUl="nav-contacts"
          classNameLi="nav-contacts__list-contacts"
          data={nav_footer}
          classNameLink="contacts"
          // title='Terms & Conditions:'
        />
        </nav>
        <nav className='social_media'>Our social media:
          <NavigationLogo 
            data={ImagesSocialMedia} 
            classNameUl='nav-contacts-media'
            classNameLi='nav-contacts-media__list'
            classNameLink={'social-media-contact'}
          />
        </nav>
      </div>
    </footer>
  )
}