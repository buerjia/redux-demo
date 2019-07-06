
const defaultState = {
  val: 'write txt',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
};
export default (state = defaultState, action) => {
  let { type, value } = action;
  if (type === 'changeVal') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.val = value;
    return newState
  }
  if (type === 'changeList') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.val);
    newState.val = ''
    return newState
  }
  if (type === 'delItem') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(value,1);
    return newState
  }
  return state
}