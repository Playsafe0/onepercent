import { Reducer } from 'redux';
import { StockDetailFetchActions, StockDetailActionTypes } from '../actions/stockDetails';

export interface IStockDetailState {
  stockDetail: any;
  isLoading: boolean;
  isSuccess: boolean;
  error?: any,
}
const initialStockDetailState: IStockDetailState = {
  stockDetail: [],
  isLoading: false,
  isSuccess: false,
  error: {},
};
const StockDetailReducer: Reducer<IStockDetailState, StockDetailFetchActions> = (
  state = initialStockDetailState,
  action: StockDetailFetchActions,
): IStockDetailState => {
  switch (action.type) {
    case StockDetailActionTypes.GET_STOCK_DETAIL:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case StockDetailActionTypes.GET_STOCK_DETAIL_SUCCESS:
      return {
        ...state,
        stockDetail: action.payload.data,
        isLoading: false,
        isSuccess: true,
      };
    case StockDetailActionTypes.GET_STOCK_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action.payload.error,
      };
    case StockDetailActionTypes.RESET_STOCK_DETAIL:
      return initialStockDetailState;
    default:
      return state;
  }
};
export default StockDetailReducer;