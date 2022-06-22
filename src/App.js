import React from 'react';
import {  Layout } from 'antd';
import './App.css';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import "./assets/fonts/SpaceGrotesk-Regular.ttf";

import About from './Pages/About';


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