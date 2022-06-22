import React from 'react';

import { Col, Row, Image, Button } from 'antd';

import sponsor1 from '../assets/logo2.png';
import sponsor2 from '../assets/logo3.png';
import sponsor3 from '../assets/logo4.png';
import sponsor4 from '../assets/logo5.png';
import sponsor5 from '../assets/logo6.png';
import wave from '../assets/wave.png'





const Partners = () => {
    return (
        <div style={{background:"black"}}>
            <div style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}>
            <div >
                <Row className="spon_mob" style={{ padding: "20px" }}>
                    <Col xs={12} sm={12} md={5} className="pad-mob">
                        <Image className="img-1" src={sponsor1} preview={false} />
                    </Col>

                    <Col xs={12} sm={12} md={5} className="pad-mob">
                        <Image className="img-1" src={sponsor2} preview={false} />
                    </Col>

                    <Col xs={12} sm={12} md={5} className="pad-mob">
                        <Image className="img-1" src={sponsor3} preview={false} />
                    </Col>

                    <Col xs={12} sm={12} md={5} className="pad-mob">
                        <Image className="img-1" src={sponsor4} preview={false} />
                    </Col>

                    <Col xs={12} sm={12} md={4} className="pad-mob">
                        <Image className="img-1" src={sponsor5} preview={false} />
                    </Col>

                </Row>

            </div>

            <div>
                <Row style={{ padding: "20px" }}>

                   

                    <Col xs={24} sm={24} md={12} className="pad-mob">
                        <Image className="img-1" src={wave} preview={false} />
                    </Col>

                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{marginTop:"120px"}}>
                        <p style={{color:"white", fontWeight: "bold", margin:"0px"}}>TOKENS</p>
                        <h3 style={{color:"white", fontSize: "40px"}}>Immunicorn <span style={{color: "#68A7AD"}}>Token</span></h3>
                        <p style={{color:"white"}}>
                        The native token of the Immunicorn ecosystem, $IMU is a BEP20 token that has been built on the BNB smart chain and can be used to pay transaction fees.
                          <br />
                          <br />

                        Holders of the token have access to several advantages, including being allowed voting and governance rights on the platform’s ecosystem.
                        </p>

                        <div className="btnHolder" style={{display: "flex"}}>
                        <Button style={{background: "#68A7AD", border:"none", color:"white", margin: "0px 20px 0px 0px"}} size="large">Enter Presale</Button>
                        
                        <Button size="large" style={{border:"1px solid white", background:"transparent", color:"white"}}> Whitepaper</Button>
                        <Button size="large" style={{border:"1px solid black", background:"transparent", color:"white", margin: "0px 20px 0px 20px"}}> Audit</Button>
                   
                    </div>
                    </Col>

                </Row>
                </div>
            </div>
        </div>
    )
}

export default Partners
