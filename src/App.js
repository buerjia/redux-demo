import React, { Component } from 'react';
import store from './store'
import 'antd/dist/antd.css'
import { Input, Button, List, Alert } from 'antd'
import { CHANGE_VAL, CHANGE_LIST, DEL_ITEM } from './actionTypes';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ...store.getState(),
      visible: false
    }
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  render() {
    return (
      <div className="wrap" style={{ width: '250px', margin: '100px auto' }}>
        <Input
          ref={(ipt) => this.ipt = ipt}
          onChange={() => { this.valChange() }}
          placeholder={this.state.val}
          value={this.state.val}
        ></Input>
        <Button onClick={() => { this.add() }} type="primary" >增加</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, idx) => <List.Item onClick={this.delItem.bind(this, idx)}>{item}</List.Item>}
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
    const action = {
      type: CHANGE_VAL,
      value: this.ipt.input.value
    }
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
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
        this.setState({ visible: false })
      })
      return
    };
    const action = {
      type: CHANGE_LIST,
    }
    store.dispatch(action)
  }
  delItem(idx) {
    const action = {
      type: DEL_ITEM,
      value: idx
    }
    store.dispatch(action)
  }
}

export default App;
