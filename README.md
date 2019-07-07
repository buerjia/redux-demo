## redux 学习
### 1.redux图解
  ![Demo](https://jspang.com/images/redux_flow.png)
  [redux图解完成图片地址](https://jspang.com/images/redux_flow.png)

### 2.安装redux并创建文件夹

```
   cnpm i redux -S
   创建store文件夹
   并在其内创建index.js   reducer.js
```
### 3.code
```js
  /** index.js: */
  import {createStore} from 'redux'
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
### 4.工作中用技巧(一)

    工作中如果组件中的action.type单词拼写错误之后，与reducer.js中的判断不一致时，是不会报错的，导致问题不容易解决；
    我们会将所有的action.type抽离出来，放到store/actionTypes.js中，定义action.type的名称为常量，例：

```
    export const CHANGE_VAL = 'changeVal';
    // 在组件中导入，reducer中导入，直接使用常量就可以，如果常量拼写错误，直接会报错，容易定位问题
```
### 5.工作中用技巧(二)

    组件中声明过多的action会显得冗余，所以我们会将action抽离出来，创建一个文件store/actionCreators.js

```js
    import { CHANGE_VAL, CHANGE_LIST, DEL_ITEM } from './actionTypes';

    export const changeValAction = (value) => ({
      type: CHANGE_VAL,
      value
    })
    export const changeListAction = () => ({
      type: CHANGE_LIST,
    })
    export const delItemAction = (value) => ({
      type: DEL_ITEM,
      value
    })
```
    在组件中引入并替换：
```js
    import { changeValAction } from './store/actionCreators';
    store.dispatch(changeValAction('xxx'));
```


