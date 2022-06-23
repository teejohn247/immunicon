import React, { useState } from 'react';
import { Col, Row, Image, Timeline, Collapse } from 'antd';

import charts from '../assets/Charts.png';
import charts_mob from '../assets/mobile_version.png';

import RoadMap from '../assets/Roadmap.png';

const { Panel } = Collapse;
// const { Option } = Select;

function AboutMain() {

    const [expandIconPosition, setExpandIconPosition] = useState('start');

    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };

    const onChange = (key) => {
        console.log(key);
    };




    return (

        <div className="aboutMain">
            <Row style={{ padding: "20px" }}>





                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                    <p className="imu" style={{ color: "white", fontWeight: "bold", margin: "0px" }}>TOKENOMICS</p>
                    <h3 className="imu" style={{ color: "white", fontSize: "40px" }}>A world with a <span style={{ color: "#68A7AD" }}>Promise of Protection.</span></h3>
                    <p className="imu" style={{ color: "white", width: "60%", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                    The $IMU token, which was very carefully crafted to serve as the major core of the Immunicorn ecosystem, will improve the functionality of the ecosystem and the operations that will be carried out by the users and investors of the platform.
                    </p>

                </Col>

            </Row>

            <Row className="map mob_hide" style={{ padding: "20px" }}>

                <Col xs={24} sm={24} md={24} className="pad-mob " style={{ marginTop: "100px", textAlign: "center", }}>
                    <Image src={charts} preview={false} />

                </Col>

                

            </Row>


            <Row className="map mob_show" style={{ padding: "20px" }}>

                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                    <Image src={charts_mob} preview={false} />

                </Col>

                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                  <h3 className="imu" style={{ color: "white", fontSize:"28px", fontWeight: "400", margin: "0px" }}>COMMUNITY FUND</h3>
                  <h2 className="imu" style={{ color: "white", fontSize:"36px", fontWeight: "bolder", margin: "0px" }}>25%</h2>

                </Col>



            </Row>

            <Row className="cnter" style={{justifyContent:"center"}}>

                <Col xs={10} sm={10} md={6} lg={3} className="bgg" style={{ marginTop: "100px", textAlign: "center", }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "20px", textAlign: "left" }}>$IMU </h3>
                        <p style={{ color: "white", textAlign: "left" }}>TICKER</p>
                    </div>
                </Col>

                <Col xs={10} sm={10} md={6} lg={3} className="bgg" style={{ marginTop: "100px", textAlign: "center", }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "20px", textAlign: "left" }}>50 B </h3>
                        <p style={{ color: "white", textAlign: "left" }}>TOTAL SUPPLY</p>
                    </div>
                </Col>

                <Col xs={10} sm={10} md={6} lg={3} className="bgg" style={{ marginTop: "100px", textAlign: "center", }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "20px", textAlign: "left" }}>15 B </h3>
                        <p style={{ color: "white", textAlign: "left" }}>AVAILABLE FOR PRESALE</p>
                    </div>
                </Col>

                <Col xs={10} sm={10} md={6} lg={3} className="bgg" style={{ marginTop: "100px", textAlign: "center", }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "20px", textAlign: "left" }}>0.0050 </h3>
                        <p style={{ color: "white", textAlign: "left" }}>INITIAL PRICE FOR 1 $IMU</p>
                    </div>
                </Col>

                <Col xs={10} sm={10} md={6} lg={3} className="bgg" style={{ marginTop: "100px", textAlign: "center", }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "20px", textAlign: "left" }}>20th Aug 2022 </h3>
                        <p style={{ color: "white", textAlign: "left" }}>PRESALE DURATION</p>
                    </div>
                </Col>

                <Col xs={10} sm={10} md={6} lg={3} className="bgg" style={{ marginTop: "100px", textAlign: "center", }}>
                    <div>
                        <h3 style={{ color: "white", fontSize: "20px", textAlign: "left" }}>20th Oct 2022 </h3>
                        <p style={{ color: "white", textAlign: "left" }}>LAUNCH DATE</p>
                    </div>
                </Col>


            </Row>


            <Row style={{ padding: "20px" }}>

                <Col xs={24} sm={24} md={12} className="pad-mob mob_no" style={{ marginTop: "100px", textAlign: "center", }}>
                    <Image src={RoadMap} preview={false} />
                </Col>


                <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                    <h3 style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>ROADMAP </h3>

                    <p style={{ textAlign: "left", color: "white", padding: "20px" }}>Welcome to Immunicorn Finance, the number one cryptocurrency that aims to provide a safe and secure digital environment where all of your digital assets are immune to failure.
                    </p>

                    <div>
                        <Timeline mode={'left'}>
                            <Timeline.Item label="2021">

                                <h4>PHASE 1</h4>
                                <br />




                                <p>Formation of the platform idea</p>
                                <p>Website Launch</p>
                                <p>Release of Whitepaper</p>
                                <p>Marketing in preparation for Presale</p>

                            </Timeline.Item>
                            <Timeline.Item label="2022">
                                <h4>PHASE 2</h4>
                                <br />







                                <p>Presale Begins</p>
                                <p>Launch of Immunicorn Token</p>
                                <p>Website Update</p>
                                <p>Listing on the CoinMarketCap/Gecko</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h4>PHASE 3</h4>
                                <br />






                                <p>Presale Ends</p>
                                <p>Launch of Pancake Swap</p>
                                <p>Launch of UniSwap</p>
                            </Timeline.Item>
                            <Timeline.Item label="2022">




                                <h4>PHASE 4</h4>
                                <br />



                                <p>Launch of Immunicorn DAO</p>
                                <p>Launch Of Immunicorn Staking</p>
                                <p>Launch Of Immunicorn Lending/Borrowing</p>
                            </Timeline.Item>

                            <Timeline.Item label="2022">




                                <h4>PHASE 5</h4>
                                <br />





                                <p>Development of Ecosystem</p>
                                <p>New Website Launch</p>
                                <p>List On Every Major Exchange</p>
                            </Timeline.Item>
                        </Timeline>


                    </div>


                </Col>

            </Row>



            <Row style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center",  marginBottom:"80px", fontSize:"24px"}}>
                    <h3 style={{ color: "white", fontSize: "40px" }}>Frequently Asked Questions</h3>


                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                    >
                        <Panel header="What benefit is Immunicorn to the crypto world?" key="1" >
                            <p>Being a decentralized reserve currency, this platform is one of those aiding in removing the crypto world from the bounds of traditional financing.</p>
                        </Panel>
                        <Panel header="What Blockchain network will Immunicorn be built on?" key="2" >
                            <div></div>
                        </Panel>
                        <Panel header="How much is the supply of $IMU that will be dropped?" key="3" >
                            <div></div>
                        </Panel>

                        <Panel header="How can I purchase $IMU tokens?" key="4" >
                            <div></div>
                        </Panel>

                        
                        
                        <Panel header="Who governs the Immunicorn platform?" key="5" >
                            <div></div>
                        </Panel>
                    </Collapse>
                </Col>


            </Row>
        </div>
    );
}

export default AboutMain;