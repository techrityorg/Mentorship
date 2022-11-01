import React, { useCallback, useReducer } from "react";
import { LOADING, DATA_AVALIABLE, UPDATE_USER_RANGE, ERROR } from "../lib/types";
import Store from "./store-context";

const storeReducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }
  if (action.type === DATA_AVALIABLE) {
    return {
      ...state,
      loading: false,
      v_metrics: action.v_axisTransform.V_metrics,
      x_axis: action.axis_detail.H_axis,
      chartLine: action.v_axisTransform.chartDetail,
    };
  }
  if (action.type === UPDATE_USER_RANGE) {
    return {
      ...state,
      userObj: action.userRangeObj,
    };
  }

  if (action.type === ERROR) {
    return {
      ...state,
      loading: false,
      error: true,
      v_metrics: [],
      x_axis: [],
      chartLine: [],
    };
  }

  return state;
};

const intialObj = {
  loading: false,
  error: false,
  v_metrics: [],
  x_axis: [],
  chartLine: [],
  userObj: { min: 1, max: 10 },
};

const StoreProvider = ({ children }) => {
  const [storeState, dispatchStoreAction] = useReducer(storeReducer, intialObj);

  const storeUpdateHandler = useCallback((action) => {
    dispatchStoreAction(action);
  }, []);

  const storeContextState = {
    ...storeState,
    storeUpdate: storeUpdateHandler,
  };

  return <Store.Provider value={storeContextState}>{children}</Store.Provider>;
};

export default StoreProvider;
