import React, { useState, } from 'react';

import { Anchor, Drawer, Button, Image } from 'antd';

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
          </Anchor>
        </div>

        <div className="mobileHidden sidemenu" style={{ zIndex: 99 }}>
          <Anchor targetOffset="105">
            <Button className="txt" title="Enter Presale">Enter Presale</Button>
          </Anchor>
        </div>
        <div className="mobileVisible" style={{ zIndex: 99 }}>
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >

            <Anchor targetOffset="65">
              <Link href="/" title="Home" />
              <Link href="/about" title="Whitepaper" />
              <Link href="/" title="More" />

            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;