import React, { useState, } from 'react';

import { Anchor, Drawer, Button, Image } from 'antd';

import { MenuOutlined } from '@ant-design/icons';

import sed from '../assets/logo.png';




const { Link } = Anchor;


function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo" style={{ zIndex: 99 }}>
          <Image src={sed} />
        </div>
        <div className="mobileHidden" style={{ zIndex: 99, color: "white" }}>
          <Anchor targetOffset="65">
            <Link href="/" title="Home" />
            <Link href="/about" title="Whitepaper" />
            <Link href="/" title="More" />
            <Button style={{width: "150px",height: "60px", borderRadius: "4px"}} className="txt" title="OPEN APP">OPEN APP</Button>

          </Anchor>
        
        </div>

        {/* <div className="mobileHidden sidemenu" style={{ zIndex: 99 }}>
          <Anchor targetOffset="105">
            <Button className="txt" title="Enter Presale">Enter Presale</Button>
          </Anchor>
        </div> */}
        <div className="mobileVisible" style={{ zIndex: 99 }}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >

            <Anchor targetOffset="65">
              <Link href="/" title="Home" /><span className="ant-drawer-header ant-drawer-header-close-only"></span>
              <Link href="/about" title="Whitepaper" />
              <Link href="/" title="More" />
              <Button style={{width: "150px",height: "60px", borderRadius: "4px", margin: "4px 0 6px 16px"}} className="txt" title="OPEN APP">OPEN APP</Button>

            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;