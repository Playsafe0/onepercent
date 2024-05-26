import { createAction, ActionType } from 'typesafe-actions';

export enum StockListActionTypes {
  GET_STOCK_LIST = 'GET_STOCK_LIST',
  GET_STOCK_LIST_SUCCESS = 'GET_STOCK_LIST_SUCCESS',
  GET_STOCK_LIST_FAILURE = 'GET_STOCK_LIST_FAILURE',
  RESET_STOCK_LIST = 'RESET_STOCK_LIST',
}
export interface IGetStockListActionData {
  searchString?: string;
  pageSize?: number;
  cursor?: string | number;
}
interface IGetStockListSuccessActionData {
  data: Array<any>;
}
interface IGetStockListFailureActionData {
    error :any ;
}

export const getStockList = createAction(StockListActionTypes.GET_STOCK_LIST)();
export const getStockListSuccess = createAction(
  StockListActionTypes.GET_STOCK_LIST_SUCCESS,
)<IGetStockListSuccessActionData>();
export const getStockListFailure = createAction(
  StockListActionTypes.GET_STOCK_LIST_FAILURE,
)<IGetStockListFailureActionData>();
export const resetStockList = createAction(StockListActionTypes.RESET_STOCK_LIST)();

export type getStockListAction = ActionType<typeof getStockList>;
type getStockListSuccessAction = ActionType<typeof getStockListSuccess>;
type getStockListFailureAction = ActionType<typeof getStockListFailure>;
type resetStockListAction = ActionType<typeof resetStockList>;

export type StockListFetchActions =
  | getStockListAction
  | getStockListSuccessAction
  | getStockListFailureAction
  | resetStockListAction;