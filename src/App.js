import React, { FC, Fragment, ReactElement } from 'react';
import { Button, Layout } from 'antd';
import './App.css';
// import { Header } from 'antd/lib/layout/layout';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import "./assets/fonts/SpaceGrotesk-Regular.ttf";

// import './fonts/Josefin_Sans/JosefinSans-BoldItalic.ttf';
import About from './Pages/About';
// import Product from './pages/products';
// import Faqs from './pages/faqs';

// import RoadMaps from './pages/roadMaps';


const App = () => (

  <BrowserRouter>
<Layout className="mainLayout">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />




    </Routes>
    </Layout>

  </BrowserRouter>



     
);

export default App;