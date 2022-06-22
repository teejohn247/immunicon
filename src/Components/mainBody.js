import React from 'react';
import { Col, Row, Image, Button } from 'antd';

import illustration from '../assets/11.png';

import illus1 from '../assets/14.png';
import illus7 from '../assets/17.png';



import AppFooter from './AppFooter';

function mainScreen() {
    return (

        <div className="mainScreen">
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <div >
                    <Row className="spon_mob" style={{ padding: "20px" }}>

                        <Col xs={24} sm={24} md={24} style={{ display: 'flex', justifyContent: "center" }}>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn Finance<span style={{ color: "#68A7AD" }}>Ecosystem</span></h3>
                        </Col>



                    </Row>

                </div>

                <div>
                    <Row className="spon_mob_1" style={{ padding: "20px" }}>




                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <p style={{ color: "white", fontWeight: "bold", margin: "0px" }}>TOKENS</p>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Token</span></h3>
                            <p style={{ color: "white" }}>

                                As a community-driven DAO, the users of the platform will be able to participate in the network’s governance and also have a say in the process of voting by being owners and holders of the native utility token of the platform $IMU.
                                <br />
                                <br />
                                They’ll also be allowed to submit any proposals they have that will benefit the community, as long as they meet the requirements in the number of tokens owned.


                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                                <Button style={{ background: "#68A7AD", border: "none", color: "white", marginLeft: "10px" }} size="large">Whitepaper</Button>
                            </div>
                        </Col>


                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image className="img-1" src={illustration} preview={false} />
                        </Col>

                    </Row>
                </div>




                <div>
                    <Row style={{ padding: "20px" }}>

                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image className="img-1" src={illus1} preview={false} />
                        </Col>

                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <p style={{ color: "white", fontWeight: "bold", margin: "0px" }}>TOKENS</p>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Token</span></h3>
                            <p style={{ color: "white" }}>
                                As a community-driven DAO, the users of the platform will be able to participate in the network’s governance and also have a say in the process of voting by being owners and holders of the native utility token of the platform $IMU.
                                <br />
                                <br />
                                They’ll also be allowed to submit any proposals they have that will benefit the community, as long as they meet the requirements in the number of tokens owned.

                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                                <Button style={{ background: "#68A7AD", border: "none", color: "white", marginLeft: "10px" }} size="large">Whitepaper</Button>
                            </div>
                        </Col>




                    </Row>
                </div>



                <div>
                    <Row className="spon_mob_1" style={{ padding: "20px" }}>




                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <p style={{ color: "white", fontWeight: "bold", margin: "0px" }}>TOKENS</p>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Token</span></h3>
                            <p style={{ color: "white" }}>

                                As a community-driven DAO, the users of the platform will be able to participate in the network’s governance and also have a say in the process of voting by being owners and holders of the native utility token of the platform $IMU.
                                <br />
                                <br />
                                They’ll also be allowed to submit any proposals they have that will benefit the community, as long as they meet the requirements in the number of tokens owned.


                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                                <Button style={{ background: "#68A7AD", border: "none", color: "white", marginLeft: "10px" }} size="large">Whitepaper</Button>
                            </div>
                        </Col>


                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image className="img-1" src={illus7} preview={false} />
                        </Col>

                    </Row>
                </div>



                <div>
                    <Row style={{ padding: "40px", background: "#68A7AD", borderRadius: "10px" }}>

                        <Col xs={24} sm={24} md={14} className="pad-mob">
                            <h3 style={{ color: "white", fontSize: "40px" }}>Presale Bonuses</h3>
                            <p style={{ color: "white" }}>
                                Earn Up to 20% Extra $IMU Tokens When Referring Your Friends To The Immunicorn Finance Presale!
                            </p>
                        </Col>


                        <Col xs={24} sm={24} md={9} className="pad-mob" style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                            <Button size="large">Get Early Access</Button>
                        </Col>

                    </Row>
                </div>
                <div>
                    <AppFooter />
                </div>


            </div>
        </div>
    );
}

export default mainScreen;