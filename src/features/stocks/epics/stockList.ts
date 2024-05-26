import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { rootState } from '../../../store/rootState';
import {
  getStockListAction,
  getStockListSuccess,
  getStockListFailure,
  StockListFetchActions,
  StockListActionTypes,
} from '../actions/stocklist';
import GetStockList from '../services/stockList';

const getStockListEpic = (
  action$: ActionsObservable<StockListFetchActions>,
  state$: StateObservable<rootState>,
) =>
  action$.pipe(
    filter(isOfType(StockListActionTypes.GET_STOCK_LIST)),
    mergeMap(async (action: getStockListAction) => {
      try {
        const response = await GetStockList();
        const stockListData = response.data;
        return getStockListSuccess({ data: stockListData });
      } catch (error) {
        console.log('Api error response: ', error);
        return of(getStockListFailure({ error: error }));
      }
    }),
  );
export default getStockListEpic;