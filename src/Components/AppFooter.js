import React from 'react';

import { Col, Row, Image, Layout } from 'antd';

import log from '../assets/logo.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import tiktok from '../assets/tiktok.png';


const { Footer } = Layout;



function AppFooter() {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <Row>
        <div className="myfoot" style={{ width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "Left", display: "flex", justifyContent: "center" }}>

          <Col xs={24} sm={24} md={10}>
            <Image src={log} preview={false} />
            <p className="footerp" style={{ textAlign: "left", width: "60%" }}>Welcome to Immunicorn Finance, the number one cryptocurrency that aims to provide a safe and secure digital environment.</p>
            <p className="footerp" style={{ textAlign: "left", width: "60%" }}>@2022 <span style={{ color: "#68A7AD" }}>immunicornfinance.com</span>  All rights reserved.</p>
          </Col>


          <Col xs={24} sm={24} md={4}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Quick Links</p>
            <p>Get Support</p>
            <p>Staking</p>
            <p>Accelerator</p>
            <p>Buy Axion</p>
            <p>Vote</p>

          </Col>


          <Col xs={24} sm={24} md={4}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Resources</p>






            <p>Whitepaper</p>
            <p>Brand Guide</p>
            <p>Knowledge Base</p>
            <p>Dextools Chart</p>
            <p>CoinGecko Chart</p>
            <p>CoinGecko Chart</p>
            <p>Github Code</p>

          </Col>


          <Col xs={24} sm={24} md={4}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Follow Us</p>
            <div>
              <Image src={discord} />
              <Image src={twitter} />
              <Image src={youtube} />
              <Image src={tiktok} />

            </div>
          </Col>
        </div>
      </Row>
    </Footer>


  );
}

export default AppFooter;