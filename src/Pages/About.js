import React from 'react';
import { Header } from 'antd/lib/layout/layout';
// import AppHero from '../components/hero';
// import Table from '../components/table';
import Footer from '../Components/AppFooter';
import MainScreen from '../Components/mainScreen';
import MainBody from '../Components/mainBody';

import Partners from '../Components/Partners';
import BreadCrumb from '../Components/BreadCrumb';
import AboutMain from '../Components/AboutMain';


const About = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <AboutMain />
      <Footer />
    </div>
  )
}






export default About;
