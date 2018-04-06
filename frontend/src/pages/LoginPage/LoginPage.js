import React, { Component } from 'react';
import moment from 'moment';
import { Input, Button, Card, Row, Col } from 'antd';
import './LoginPage.css'
import { appHistory } from '../../router';
import { showAlertByType } from '../../commonFunc';
import axios from 'axios';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  validUserInfo = (info) => info.username && info.password


  handleLogin = () => {
    let user = this.state.user;
    if (this.validUserInfo(user)) {
      axios.post('/api/login', user)
        .then(res => {
          appHistory.push('/home')
        }).catch(err => {
          showAlertByType('error', {
            title: "登录异常",
            content: err.message
          });
        });
    } else {
      showAlertByType('warning', {
        title: '输入有误',
        content: '请输入正确的用户名和密码'
      });
    }

  }


  handleInputByType = (e, type) => {
    let value = e.currentTarget.value;
    let user = this.state.user;
    user[type] = value;
    this.setState({ user });
  }

  render() {
    return (
      <Row style={{ top: "30%" }}>
        <Col span="8"></Col>
        <Col span="8">
          <Card title="欢迎登录" hoverable style={{ textAlign: "center" }}>
            <Input style={{ marginBottom: 20 }}
              placeholder="请输入用户名"
              value={this.state.user.username}
              onChange={(e) => this.handleInputByType(e, 'username')}
            />
            <Input
              type="password"
              style={{ marginBottom: 20 }}
              placeholder="请输入密码"
              value={this.state.user.password}
              onChange={(e) => this.handleInputByType(e, 'password')}
            />
            <Button type="primary" onClick={this.handleLogin}>登录</Button>
          </Card>
        </Col>
        <Col span="8"></Col>
      </Row>
    )
  }

}