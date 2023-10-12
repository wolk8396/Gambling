import React from 'react';
import './App.scss';
import { HeaderComponent } from './app/components/header/header';
import { MainComponent } from './app/components/main/main';

const App = () => {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent/>
    </div>
  );
}

export default App;
