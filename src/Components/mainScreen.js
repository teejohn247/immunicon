import React from 'react';
import { Image, Button } from 'antd';
import AppHeader from './header';
import illus from '../assets/10.png';
import Timer from './timer.js'

function mainScreen() {
    return (

        <div id="hero" className="heroBlock">
            {/* <video src={sed} loop autoPlay muted /> */}

            <div className="container-fluid">
                <AppHeader />

                <div className="content homeSlide">


                    {/* <h3 className="homeSlide rewrds">Immunicorn Finance <span style={{color: "#68A7AD"}}>Token</span></h3> */}
                    <h5 style={{marginTop:"70px"}}>A world with a <span style={{color: "#68A7AD"}}>Promise of Protection.</span></h5>
                    <p>Welcome to Immunicorn Finance, the number one cryptocurrency that aims to provide a safe and secure digital environment where all of your digital assets are immune to failure.</p>

                    <Image src={illus}  style={{width:"40%"}} preview={false}/>

                    <Timer />

                    <div className="btnHolder" style={{display: "flex", justifyContent:"center"}}>
                        <Button style={{background: "#68A7AD", border:"none", color:"white", margin: "0px 20px 0px 0px"}} size="large">Enter Presale</Button>
                        <Button size="large" style={{border:"1px solid white", background:"transparent", color:"white"}}> Whitepaper</Button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default mainScreen;