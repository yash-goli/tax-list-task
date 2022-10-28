import { TaxItemRow } from "../models/types";

export enum ActionType {
  UPDATE_ROW = 'UPDATE_ROW',
  UPDATE_INIT = 'UPDATE_INIT'
}

// An interface for our actions
export interface ActionPayload {
  type: ActionType;
  payload: TaxItemRow[];
}

const reducer = (state: TaxItemRow[], action: ActionPayload) => {
  const { type } = action;
  switch(type) {
    case ActionType.UPDATE_ROW:
      const { payload: [ updateItem ] }  = action;
      const itemIndex = state.findIndex(item => item.id === updateItem.id);
      const newState = [...state];
      newState.splice(itemIndex, 1, updateItem);
      return newState;
    case ActionType.UPDATE_INIT: 
      const { payload }  = action;
      return [...payload];
  default:
    return state;
  }
};

export default reducer;