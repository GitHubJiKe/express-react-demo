import React, { Component } from 'react';
import axios from 'axios';
import { Table, Tag, Button } from 'antd';
import { showAlertByType } from '../commonFunc';

const _users = [
  {
    id: 1,
    name: "Peter",
    age: 25,
    location: "北京",
    hobbys: [
      "健身",
      "做饭",
      "写代码"
    ]
  },
  {
    id: 2,
    name: "Peter",
    age: 25,
    location: "北京",
    hobbys: [
      "健身",
      "做饭",
      "写代码"
    ]
  },
  {
    id: 3,
    name: "Peter",
    age: 25,
    location: "北京",
    hobbys: [
      "健身",
      "做饭",
      "写代码"
    ]
  },
  {
    id: 4,
    name: "Peter",
    age: 25,
    location: "北京",
    hobbys: [
      "健身",
      "做饭",
      "写代码"
    ]
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '地址',
    dataIndex: 'location',
    key: 'location'
  },
  {
    title: '爱好',
    dataIndex: 'hobbys',
    key: 'hobbys',
    render: (text, item) => {
      return item.hobbys.map((v, idx) => <Tag color="#108ee9" key={idx}>{v}</Tag>)
    }
  },
  {
    title: "删除",
    key: "delete",
    render: (text, item) => {
      return <Button type="primary" onClick={() => {
        showAlertByType('success', {
          title: "成功",
          content: `删除了id:${item.id}的用户`
        })
      }}>删除</Button>
    }
  }

]


export default class UserContentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      selectedIds: []
    }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => {
        if (res && res.data.data) {
          this.state.users = res.data.data;
          this.setState({});
        } else {
          showAlertByType('error', {
            title: "请求失败",
            content: res.data.message
          })
        }
      }).catch(err => {
        showAlertByType('error', {
          title: "请求失败",
          content: "获取用户数据失败"
        })
      })
  }

  getRowSelection = () => {
    return {
      onChange: (selectedRowKeys, selectedRows) => {
        this.state.selectedIds = selectedRows.map(v => v.id);
        this.setState({});
      }
    };
  }

  render() {
    const { selectedIds, users } = this.state;
    return <div>
      <Button disabled={selectedIds.length > 0 ? false : true} style={{ marginBottom: 10 }} type="primary">删除</Button>
      <Table
        rowKey={u => u.id}
        rowSelection={this.getRowSelection()}
        dataSource={users || _users}
        columns={columns}>
      </Table>
    </div>
  }

}