## redux 学习
首先你需要安装redux

```diff
  cnpm i redux -S  // 安装redux
  创建store文件夹
  并在其内创建index.js   reducer.js
```
```js
  /** index.js: */
  import {createStore} from 'redux;
  import reducer from './reducer'
  const store = createStore(reducer)
  export default store

  /** reducer.js: */
  const defaultState = {
    a:'',b:''
  }
  export default (state=defaultState,action)=>{
    if(action.type==='xxx'){
      let newState = JSON.parse(JSON.stringify(state));
      newState.a = action.value;
      return newState
    }
    return state
  }

  /**c omponentXXX: */
  import store from './store'
  /* 获取store里的数据 */
  store.getState();
  /* 修改store里的数据 */
  store.dispatch({type:'xxx',value:'xxx'});
  /* 从store里更新到组件 */
  constructor(){
    this.storeChange = this.storeChange.bind(this) // *切记要绑定this
    store.subscribe(this.storeChange)
  }
  storeChange(){
    this.setState(store.getState())
  }
```
