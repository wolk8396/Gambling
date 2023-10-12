import React from 'react';
import './App.scss';
import { HeaderComponent } from './app/components/header/header';

const App = () => {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <div className='wrapper__container'>
      </div>
    </div>
  );
}

export default App;
