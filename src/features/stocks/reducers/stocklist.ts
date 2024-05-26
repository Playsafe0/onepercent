import { Reducer } from 'redux';
import { StockListFetchActions, StockListActionTypes } from '../actions/stocklist';

export interface IStockListState {
  stockList: any;
  isLoading: boolean;
  isSuccess: boolean;
  error?: any,
}
const initialStockListState: IStockListState = {
  stockList: [],
  isLoading: false,
  isSuccess: false,
  error: {},
};
const StockListReducer: Reducer<IStockListState, StockListFetchActions> = (
  state = initialStockListState,
  action: StockListFetchActions,
): IStockListState => {
  switch (action.type) {
    case StockListActionTypes.GET_STOCK_LIST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case StockListActionTypes.GET_STOCK_LIST_SUCCESS:
      return {
        ...state,
        stockList: action.payload.data,
        isLoading: false,
        isSuccess: true,
      };
    case StockListActionTypes.GET_STOCK_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action.payload.error,
      };
    case StockListActionTypes.RESET_STOCK_LIST:
      return initialStockListState;
    default:
      return state;
  }
};
export default StockListReducer;