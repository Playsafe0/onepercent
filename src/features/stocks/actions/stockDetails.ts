import { createAction, ActionType } from 'typesafe-actions';

export enum StockDetailActionTypes {
  GET_STOCK_DETAIL = 'GET_STOCK_DETAIL',
  GET_STOCK_DETAIL_SUCCESS = 'GET_STOCK_DETAIL_SUCCESS',
  GET_STOCK_DETAIL_FAILURE = 'GET_STOCK_DETAIL_FAILURE',
  RESET_STOCK_DETAIL = 'RESET_STOCK_DETAIL',
}

export interface IGetStockDetailActionData {
  symbol: string;
  language : string ;
}
interface IGetStockDetailSuccessActionData {
  data: any;
}
interface IGetStockDetailFailureActionData {
    error :any ;
}

export const getStockDetail = createAction(StockDetailActionTypes.GET_STOCK_DETAIL)<IGetStockDetailActionData>();
export const getStockDetailSuccess = createAction(
  StockDetailActionTypes.GET_STOCK_DETAIL_SUCCESS,
)<IGetStockDetailSuccessActionData>();
export const getStockDetailFailure = createAction(
  StockDetailActionTypes.GET_STOCK_DETAIL_FAILURE,
)<IGetStockDetailFailureActionData>();
export const resetStockDetail = createAction(StockDetailActionTypes.RESET_STOCK_DETAIL)();

export type getStockDetailAction = ActionType<typeof getStockDetail>;
type getStockDetailSuccessAction = ActionType<typeof getStockDetailSuccess>;
type getStockDetailFailureAction = ActionType<typeof getStockDetailFailure>;
type resetStockDetailAction = ActionType<typeof resetStockDetail>;

export type StockDetailFetchActions =
  | getStockDetailAction
  | getStockDetailSuccessAction
  | getStockDetailFailureAction
  | resetStockDetailAction;