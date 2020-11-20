import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import ContactUs from './Components/ContactUs/ContactUs';
import Achievement from './Components/Achievement/Achievement';
import Team from './Components/Team/Team';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Header></Header>
      <WhatWeDo></WhatWeDo>
      <ContactUs></ContactUs>
      <Achievement></Achievement>
      <Team></Team>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
