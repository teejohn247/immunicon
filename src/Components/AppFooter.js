import React from 'react';

import { Col, Row, Image, Layout, Button } from 'antd';

import log from '../assets/logo.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/you.png';
import tiktok from '../assets/tik.png';


const { Footer } = Layout;



function AppFooter() {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <Row>
        <div className="myfoot mob_web" style={{ width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "Left", display: "flex", justifyContent: "center" }}>

          <Col xs={24} sm={24} md={8}>
            <Image src={log} preview={false} />
            <br />
            <Button style={{background: "#68A7AD", border:"none", color:"white", margin: "20px 0px 20px 0px"}} size="large">Find Out More</Button>

            <p className="footerp" style={{ textAlign: "left", width: "80%" }}>@2022 <span style={{ color: "#68A7AD" }}>immunicornfinance.com</span><br />  All rights reserved.</p>
          </Col>

          


          <Col xs={24} sm={12} md={4}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Quick Links</p>
            <p>Get Support</p>
            <p>Staking</p>
            <p>Accelerator</p>
            <p>Buy Axion</p>
            <p>Vote</p>

          </Col>


          <Col xs={24} sm={12} md={4}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Resources</p>

            <p>Whitepaper</p>
            <p>Brand Guide</p>
            <p>Knowledge Base</p>
            <p>Dextools Chart</p>
            <p>CoinGecko Chart</p>
            <p>CoinGecko Chart</p>
            <p>Github Code</p>

          </Col>


          <Col xs={24} sm={24} md={6}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Follow Us</p>
            <div>
              <Image style={{padding: "5px"}} src={discord} preview={false} />
              <Image style={{padding: "5px"}} src={twitter} preview={false}/>
              <Image style={{padding: "5px"}} src={youtube} preview={false}/>
              <Image style={{padding: "5px"}} src={tiktok} preview={false}/>

            </div>
          </Col>
        </div>
      </Row>















<div className="mob_footer">

      <Row className="mob_foot">
        <div className="myfoot" style={{ width: "100%", marginLeft: "auto", marginRight: "auto", textAlign: "Left", display: "flex", justifyContent: "center" }}>

          <Col xs={24} sm={24} md={8} style={{display:"grid", padding:"30px", marginLeft:"auto", marginRight:"auto"}}>
            <Image src={log} preview={false} style={{width:"60% !important"}} />
            <br />
            <Button style={{background: "#68A7AD", border:"none", color:"white", margin: "20px 0px 20px 0px"}} size="large">Find Out More</Button>
          </Col>


          
        </div>
      </Row>

      <Row style={{width: "80%",marginLeft: "auto",marginRight: "auto", textAlign:"left"}}>
        <Col xs={12} sm={12} md={12}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Quick Links</p>
            <p  >Get Support</p>
            <p>Staking</p>
            <p>Accelerator</p>
            <p>Buy Axion</p>
            <p>Vote</p>

          </Col>


          <Col xs={12} sm={12} >
            <p className="tkon" style={{ color: "#68A7AD" }}>Resources</p>

            <p>Whitepaper</p>
            <p>Brand Guide</p>
            <p>Knowledge Base</p>
            <p>Dextools Chart</p>
            <p>CoinGecko Chart</p>
            <p>CoinGecko Chart</p>
            <p>Github Code</p>

          </Col>


          <Col xs={24} sm={24} md={6}>
            <p className="tkon" style={{ color: "#68A7AD" }}>Follow Us</p>
            <div style={{display:"flex"}}>
              <Image style={{padding: "5px"}} src={discord} preview={false} />
              <Image style={{padding: "5px"}} src={twitter} preview={false}/>
              <Image style={{padding: "5px"}} src={youtube} preview={false}/>
              <Image style={{padding: "5px"}} src={tiktok} preview={false}/>

            </div>
          </Col>
      </Row>

      <Row>
      <Col xs={24} sm={24} md={24} style={{  width: "80% !important", marginTop:"20px" }}>
            <p className="footerp" >@2022 <span style={{ color: "#68A7AD" }}>immunicornfinance.com</span>  All rights reserved.</p>
          </Col>
      </Row>
      </div>

    </Footer>


  );
}

export default AppFooter;