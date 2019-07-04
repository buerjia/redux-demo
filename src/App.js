import React, { Component } from 'react';

import 'antd/dist/antd.css'
import { Input, Button, List, Alert } from 'antd'

class App extends Component {
  constructor() {
    super()
    this.state = {
      val: '',
      list: [],
      visible: false
    }
  }
  render() {
    return (
      <div className="wrap" style={{ width: '250px', margin: 'auto' }}>
        <Input
          ref={(ipt) => this.ipt = ipt}
          onChange={() => { this.valChange() }}
          value={this.state.val}
        ></Input>
        <Button onClick={() => { this.add() }} type="primary" >增加</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, idx) => <List.Item>{item}</List.Item>}
        />
        {this.state.visible ? (
          <Alert
            message="请输入增加的内容"
            type="success"
            banner
          />
        ) : null}
      </div>
    );
  }
  valChange() {
    this.setState({
      val: this.ipt.input.value
    });
  }
  handleClose() {
    this.setState({
      visible: false
    });
  }
  openAlert(cb) {
    this.setState({
      visible: true
    }, () => {
      setTimeout(() => {
        cb()
      }, 1000);
    });
  }
  add() {
    if (!this.state.val) {
      this.openAlert(() => {
        this.setState({visible: false})
      })
      return
    };
    let list = this.state.list;
    list.push(this.state.val)
    this.setState({
      list,
      val: ''
    });
  }
  del(idx) {
    let list = this.state.list;
    list.splice(idx, 1);
    this.setState({
      list,
    });
  }
}

export default App;
