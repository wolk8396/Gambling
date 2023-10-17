import React from 'react';
import './App.scss';
import { HeaderComponent } from './app/components/header/header';
import MainComponent  from './app/components/main/main';
import { Footer } from './app/components/footer/footer';


const App = () => {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
