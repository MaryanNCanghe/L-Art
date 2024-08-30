import React from 'react';

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Intro />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
