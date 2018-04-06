import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon } from 'antd';
const { Header } = Layout;

const MyHeader = ({ text, children }) => {
  return <Header>
    {children}
    <span style={{ color: 'white', marginLeft: '43%', fontSize: 20 }}>React Demo</span>
    <Link style={{ float: "right" }} to="/">
      <Icon style={{ fontSize: 18 }} type="logout" />
    </Link>
  </Header>
}

export default MyHeader;