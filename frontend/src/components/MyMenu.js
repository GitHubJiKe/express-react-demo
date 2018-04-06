import React from 'react';
import { Menu, Icon } from 'antd';

export default class MyMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  getMenuItems = () => {
    return this.props.menus.map(m => <Menu.Item key={m.key}>
      <Icon type={m.icon} />
      <span>{m.text}</span>
    </Menu.Item>)
  }


  render() {
    return <Menu
      onSelect={this.props.onSelect}
      style={{ minHeight: 800 }}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}>
      {this.getMenuItems()}
    </Menu>
  }
}