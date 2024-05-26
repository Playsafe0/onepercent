import { createAction, ActionType } from 'typesafe-actions';

export enum LoginActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  RESET_LOGIN_DETAIL = 'RESET_LOGIN_DETAIL',
}
export interface ILoginActionData {
data :any ;
}

interface ILoginSuccessActionData {
 loginData :any ;
}
interface ILoginFailureActionData {
    error :any ;
}

export const getLogin = createAction(LoginActionTypes.LOGIN)<ILoginActionData>();
export const getLoginSuccess = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
)<ILoginSuccessActionData>();
export const getLoginFailure = createAction(
  LoginActionTypes.LOGIN_FAILURE,
)<ILoginFailureActionData>();
export const resetLogin = createAction(LoginActionTypes.RESET_LOGIN_DETAIL)();

export type getLoginAction = ActionType<typeof getLogin>;
type getLoginSuccessAction = ActionType<typeof getLoginSuccess>;
type getLoginFailureAction = ActionType<typeof getLoginFailure>;
type resetLoginAction = ActionType<typeof resetLogin>;

export type LoginFetchActions =
  | getLoginAction
  | getLoginSuccessAction
  | getLoginFailureAction
  | resetLoginAction;