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