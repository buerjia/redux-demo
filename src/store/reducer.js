import { CHANGE_VAL, CHANGE_LIST, DEL_ITEM } from './actionTypes';
const defaultState = {
  val: 'write txt',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
};
export default (state = defaultState, action) => {
  let { type, value } = action;
  if (type === CHANGE_VAL) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.val = value;
    return newState
  }
  if (type === CHANGE_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.val);
    newState.val = ''
    return newState
  }
  if (type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(value, 1);
    return newState
  }
  return state
}