import React from 'react';
import { Col, Row, Image, Button } from 'antd';

import illustration from '../assets/11.png';

import illus1 from '../assets/14.png';
import illus7 from '../assets/17.png';
import illust from '../assets/illust.png';




import AppFooter from './AppFooter';

function mainScreen() {
    return (

        <div className="mainScreen">
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                    <Row className="spon_mob" style={{ padding: "20px" }}>

                    <Col xs={24} sm={24} md={24} style={{ display: 'flex', justifyContent: "center" }}>
                            <p style={{color:"white", fontWeight: "bold", margin:"0px", textAlign:"center"}}>ECOSYSTEM</p>
                        </Col>

                        <Col xs={24} sm={24} md={24} style={{ display: 'flex', justifyContent: "center" }}>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn Finance<span style={{ color: "#68A7AD" }}> Ecosystem</span></h3>
                        </Col>



                    </Row>


                    <Row className="spon_mob_1" style={{ padding: "20px" }}>




                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <p style={{ color: "white", fontWeight: "bold", margin: "0px" }}>TOKENS</p>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>DAO</span></h3>
                            <p style={{ color: "white" }}>

                                As a community-driven DAO, the users of the platform will be able to participate in the network’s governance and also have a say in the process of voting by being owners and holders of the native utility token of the platform $IMU.
                                <br />
                                <br />
                                They’ll also be allowed to submit any proposals they have that will benefit the community, as long as they meet the requirements in the number of tokens owned.


                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                            <Button style={{ background: "#68A7AD", border: "none", color: "white"}} size="large">Find out more</Button>

                            </div>
                        </Col>


                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image style={{width: "90%", marginLeft: "auto",justifyContent: "flex-end",display: "flex"}} className="img-1" src={illustration} preview={false} />
                        </Col>

                    </Row>



                    <Row  style={{ padding: "20px" }}>

                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image style={{width: "90%", marginLeft: "auto",justifyContent: "flex-end",display: "flex"}} className="img-1" src={illust} preview={false} />
                        </Col>

                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Staking</span></h3>
                            <p style={{ color: "white" }}>
                            With Immunicorn staking, users will be able to earn from the growth in the supply of the $IMU tokens.
                            <br />
                                <br />
                              After the protocol mints new $IMU tokens from their treasury, the large majority of it is given to the stakers, which will make it so that their gain from it comes from the compounding of their balance.  

                                
                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                                <Button style={{ background: "#68A7AD", border: "none", color: "white"}} size="large">Find out more</Button>
                            </div>
                        </Col>




                    </Row>




                    <Row className="spon_mob_1" style={{ padding: "20px", marginBottom: "30px" }}>

                       

                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Lending</span></h3>
                            <p style={{ color: "white" }}>
                            Users of the Immunicorn platform can lend their assets to the platform so that a liquidity pool consists of multiple cryptocurrencies such as ETH and BNB. After every transaction, a derivative is created upon the deposited amount of a 1:1 valuation that can either be stored, redeemed, or traded.

                                <br/>
                                <br/>

                                This means that even when the original asset is still locked in the liquidity pool, the value is still free with the derivative token.
                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                            <Button style={{ background: "#68A7AD", border: "none", color: "white"}} size="large">Find out more</Button>

                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image style={{width: "90%", marginRight: "auto",justifyContent: "flex-end",display: "flex"}} className="img-1" src={illus1} preview={false} />
                        </Col>




                    </Row>



                    <Row  style={{ padding: "20px", marginBottom: "30px" }}>


                    <Col xs={24} sm={24} md={12} className="pad-mob">
                            <Image style={{width: "90%", marginRight: "auto",justifyContent: "flex-end",display: "flex"}} className="img-1" src={illus7} preview={false} />
                        </Col>


                        <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "120px" }}>
                            <h3 style={{ color: "white", fontSize: "40px" }}>Immunicorn <span style={{ color: "#68A7AD" }}>Borrowing</span></h3>
                            <p style={{ color: "white" }}>

                                For borrowing, borrowers remove money from the liquidity pool in exchange for collateral. After they have paid back the amount with interest, their collateral is then released.

                                <br />
                                <br />

                               Unlike with traditional financing, the collateral dropped must be higher in value than the amount which is to be borrowed. For Immunicorn, the amount required is at least 130% of the borrowed amount. So if 100 ETH is borrowed, the borrower must let go of collateral worth 130% ETH. If the borrower then fails to refund the loan, their collateral is then liquidated and distributed among their lenders.

                            </p>

                            <div className="btnHolder" style={{ display: "flex", justifyContent: "space-between", width: "35%" }}>
                            <Button style={{ background: "#68A7AD", border: "none", color: "white"}} size="large">Find out more</Button>

                            </div>
                        </Col>



                    </Row>



                    <Row style={{ padding: "40px", background: "#68A7AD", borderRadius: "10px" }}>

                        <Col xs={24} sm={24} md={14} className="pad-mob">
                            <h3 style={{ color: "white", fontSize: "40px" }}>Presale Bonuses</h3>
                            <p style={{ color: "white" }}>
                                Earn Up to 20% Extra $IMU Tokens When Referring Your Friends To The Immunicorn Finance Presale!
                            </p>
                        </Col>


                        <Col xs={24} sm={24} md={9} className="pad-mob" style={{ display: "flex", alignItems: "center", marginTop: "30px",
                    justifyContent:"flex-end" }}>
                            <Button style={{background:"white", color:"#68A7AD"}} size="large">Get Early Access</Button>
                        </Col>

                    </Row>
                <div>
                    <AppFooter />
                </div>


            </div>
        </div>
    );
}

export default mainScreen;