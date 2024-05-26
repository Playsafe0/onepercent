import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { rootState } from '../../../store/rootState';
import {
  getAddtoCartAction,
  getAddtoCartSuccess,
  getAddtoCartFailure,
  AddtoCartFetchActions,
  AddtoCartActionTypes,
} from '../actions/addToCart';
import getAddToCart from '../services/getAddToCartEpic';

const getAddToCartEpic = (
  action$: ActionsObservable<AddtoCartFetchActions>,
  state$: StateObservable<rootState>,
) =>
  action$.pipe(
    filter(isOfType(AddtoCartActionTypes.ADD_TO_CART)),
    mergeMap(async (action: getAddtoCartAction) => {
      try {
        const response = await getAddToCart(action.payload.data, action.payload.deletetheItem);
        const cartList = response.data;
        return getAddtoCartSuccess({ cartList: cartList, deletetheItem: action.payload.deletetheItem });
      } catch (error) {
        console.log('Api error response: ', error);
        return of(getAddtoCartFailure({ error: error }));
      }
    }),
  );
export default getAddToCartEpic;