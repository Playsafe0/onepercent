import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { rootState } from '../../../store/rootState';
import {
  getLoginAction,
  getLoginSuccess,
  getLoginFailure,
  LoginFetchActions,
  LoginActionTypes,
} from '../actions/login';
import Login from '../services/login';

const getLoginEpic = (
  action$: ActionsObservable<LoginFetchActions>,
  state$: StateObservable<rootState>,
) =>
  action$.pipe(
    filter(isOfType(LoginActionTypes.LOGIN)),
    mergeMap(async (action: getLoginAction) => {
      try {
        const response = await Login(action.payload.data);
        const loginData = response.data;
        return getLoginSuccess({ loginData: loginData });
      } catch (error) {
        console.log('Api error response: ', error);
        return of(getLoginFailure({ error: error }));
      }
    }),
  );
export default getLoginEpic;