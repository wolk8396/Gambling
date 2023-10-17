import Button from '../../shared/UI/button/button';
import Navigation from '../../shared/UI/navigation/navigation';
import { nav_header } from '../../shared/consts/const-nav';
import { language_logo } from '../../shared/consts/image';
import classNames from 'classnames';
import './header.scss';
import { useState } from 'react';

export const HeaderComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const burger = classNames(' btn_burger burger_btn-line', {isActive: open});
  const menuBurger = classNames('navigation-menu', {isActive: open});
  const header = classNames('wrapper-header', {isActive: open});

  const onMenu = () => {
    setOpen(!open); 
  };

  
  return (
    <header className={header}>
      <div className='container'>
        <div className='container__burger'>
          <button onClick={onMenu} className={burger}>
              <span className='menu'></span>
          </button>
        </div>
        <div className='container__menu'>
          <nav className={menuBurger}>
            <Navigation
              classNameUl="nav-contacts"
              classNameLi="nav-contacts__list"
              data={nav_header}
              classNameLink="contacts"
              title=''
            />
            <div className='container-btns'>
              <Button className={'black btn-menu'}  
                onButtonClick={() => {}} 
                type='button'
                text='SIGN IN'
              />
              <Button  className={'blue btn-menu'}  
                onButtonClick={() => {}} 
                type='button'
                text='SIGN UP'
              />
            </div>
          </nav>
          <div className="registration-menu">
            <Button className={'black btn'}  
              onButtonClick={() => {}} 
              type='button'
            > 
              <img src= {language_logo} alt="" />
              <span className='logo-btn'>EN</span>
            </Button>
            <Button className={'black btn'}  
              onButtonClick={() => {}} 
              type='button'
              text='SIGN IN'
            />
            <Button  className={'blue btn'}  
              onButtonClick={() => {}} 
              type='button'
              text='SIGN UP'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

