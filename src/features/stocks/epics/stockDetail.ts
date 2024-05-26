import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { rootState } from '../../../store/rootState';
import {
  getStockDetailAction,
  getStockDetailSuccess,
  getStockDetailFailure,
  StockDetailFetchActions,
  StockDetailActionTypes,
} from '../actions/stockDetails';
import GetStockDetail from '../services/stockDetail';

const getStockDetailEpic = (
  action$: ActionsObservable<StockDetailFetchActions>,
  state$: StateObservable<rootState>,
) =>
  action$.pipe(
    filter(isOfType(StockDetailActionTypes.GET_STOCK_DETAIL)),
    mergeMap(async (action: getStockDetailAction) => {
      try {
        const response = await GetStockDetail(action.payload.symbol);
        const stockDetailData = response.data;
        return getStockDetailSuccess({ data: stockDetailData });
      } catch (error) {
        console.log('Api error response: ', error);
        return of(getStockDetailFailure({ error: error }));
      }
    }),
  );
export default getStockDetailEpic;