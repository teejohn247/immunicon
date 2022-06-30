import React, { useState, } from 'react';

import { Anchor, Drawer, Button, Image, Select } from 'antd';

import { MenuOutlined } from '@ant-design/icons';

import sed from '../assets/logo.png';

const { Option } = Select;



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
            <Link href="/" title="Whitepaper" />
            <Link href="/about" title="More" />
            <Select
              defaultValue="Language"
              style={{
                padding: "10px",

              }}
            >
              <Option value="English">English</Option>
              <Option value="french">Français</Option>
              <Option value="Deutsch">Deutsch</Option>
              <Option value="Türkçe">Türkçe</Option>
              <Option value="Spanish">Spanish</Option>
              <Option value="Italian">Italian</Option>
              <Option value="Arabic">Arabic</Option>
              <Option value="Japanese">Japanese</Option>
            </Select>
            <Button style={{width: "150px",height: "60px", borderRadius: "4px"}} className="txt" title="AUDIT">AUDIT</Button>

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
              <Link href="/" title="Whitepaper" />
              <Link href="/about" title="More" />
              <Select
              defaultValue="Language"
              style={{
                padding: "10px",

              }}
            >
              <Option value="English">English</Option>
              <Option value="french">Français</Option>
              <Option value="Deutsch">Deutsch</Option>
              <Option value="Türkçe">Türkçe</Option>
              <Option value="Spanish">Spanish</Option>
              <Option value="Italian">Italian</Option>
              <Option value="Arabic">Arabic</Option>
              <Option value="Japanese">Japanese</Option>
            </Select>
              
              <Button style={{width: "150px",height: "60px", borderRadius: "4px", margin: "4px 0 6px 16px"}} className="txt" title="AUDIT">AUDIT</Button>

            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;