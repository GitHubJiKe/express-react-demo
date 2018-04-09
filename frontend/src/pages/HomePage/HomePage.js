import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './HomePage.css'
import { MyHeader, MyMenu, UserContentView, DataContentView, FlexContainerView, FlexItem } from '../../components';
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
const contentStyle = {
  margin: '24px 16px',
  padding: 24,
  background: '#fff',
  minHeight: 280
}
const menus = [
  {
    key: 1,
    icon: "user",
    text: "用户中心"
  },
  {
    key: 2,
    icon: "database",
    text: "数据中心"
  },
  {
    key: 3,
    icon: "dashboard",
    text: "报表中心"
  }
]

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      selectedKey: 1
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleMenuSelect = ({ item, key, selectedKeys }) => this.setState({ selectedKey: key })

  getContentViewByMenuKey = (key) => {
    switch (key) {
      case "1":
        return <UserContentView></UserContentView>
      case "2":
        return <DataContentView></DataContentView>
      case "3":
        return <FlexContainerView>
          <FlexItem />
          <FlexItem cssKey="-content" />
          <FlexItem />
        </FlexContainerView>
      default:
        return <UserContentView></UserContentView>
    }
  }

  render() {
    const { collapsed, selectedKey } = this.state;
    return (
      <Layout className="HomePage">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}>
          <MyMenu menus={menus} onSelect={this.handleMenuSelect} />
        </Sider>
        <Layout>
          <MyHeader text="React Demo">
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </MyHeader>
          <Content style={contentStyle}>{this.getContentViewByMenuKey(selectedKey)}</Content>
        </Layout>
      </Layout>
    );
  }
}

HomePage.propTypes = {}

HomePage.defaultProps = {}

export default HomePage
