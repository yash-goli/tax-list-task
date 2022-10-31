import { Dispatch, useEffect, useReducer } from "react";
import api from "../api/api";
import { TaxItemRow } from "../models/types";
import reducer, { ActionPayload, ActionType } from "../reducer/reducer";

const useGetTaxList = (): [TaxItemRow[], Dispatch<ActionPayload>] => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const callApi = async () => {
      const { items } = await api();
      const newItems = items.map((item): TaxItemRow => ({...item, isFav: false}));
      dispatch({type: ActionType.UPDATE_INIT, payload: newItems});
    };
    callApi();
  }, []);

  return [state, dispatch];
}

export default useGetTaxList;