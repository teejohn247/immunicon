import React from 'react';
import { Button } from 'antd';
import AppHeader from './header';


function BreadCrumb() {
    return (

        <div id="hero" className="heroBlock" style={{ height: "80vh" }}>

            <div className="container-fluid">
                <AppHeader />

                <div className="content homeSlide" >


                    <h3 className="homeSlide rewrds" style={{ marginTop: "80px" }}>Immunicorn Finance <span style={{ color: "#68A7AD" }}>Token</span></h3>
                    <h5 className>A world with a <span style={{ color: "#68A7AD" }}>Promise of Protection.</span></h5>
                    <p>Welcome to Immunicorn Finance, the number one cryptocurrency that aims to provide a safe and secure digital environment where all of your digital assets are immune to failure.</p>
                    <div className="btnHolder">
                        <Button size="large">Whitepaper</Button>
                        <Button size="large"> Audit</Button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;