import React from 'react';
import { Button } from 'antd';
import AppHeader from './header';


function BreadCrumb() {
    return (

        <div id="hero" className="heroBlock" style={{ height: "80vh" }}>

            <div className="container-fluid">
                <AppHeader />

                <div className="content homeSlide" >


                <h5 style={{marginTop:"110px"}}>A world with a <span style={{color: "#68A7AD"}}>Promise of Protection.</span></h5>

                    <p>Welcome to Immunicorn Finance, the number one cryptocurrency that aims to provide a safe and secure digital environment where all of your digital assets are immune to failure.</p>
                    <div className="btnHolder" style={{display: "flex", justifyContent:"center"}}>
                        <Button style={{ width: "196px", height: "60px", background: "#68A7AD", border:"none", color:"white", margin: "0px 20px 0px 0px"}} size="large">Enter Presale</Button>
                        <Button size="large" style={{width: "196px", height: "60px",border:"1px solid white", background:"transparent", color:"white"}}> Whitepaper</Button>
                   
                    </div>


                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;