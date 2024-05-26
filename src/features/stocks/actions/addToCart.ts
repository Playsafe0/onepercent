import { createAction, ActionType } from 'typesafe-actions';

export enum AddtoCartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS',
  ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE',
  RESET_ADD_TO_CART_DETAIL = 'RESET_ADD_TO_CART_DETAIL',
}

export interface IAddtoCartActionData {
data :any ;
deletetheItem:boolean ;
}

interface IAddtoCartSuccessActionData {
  cartList: any;
  deletetheItem:boolean ;
}

interface IAddtoCartFailureActionData {
    error :any ;
}
export const getAddtoCart = createAction(AddtoCartActionTypes.ADD_TO_CART)<IAddtoCartActionData>();
export const getAddtoCartSuccess = createAction(
  AddtoCartActionTypes.ADD_TO_CART_SUCCESS,
)<IAddtoCartSuccessActionData>();
export const getAddtoCartFailure = createAction(
  AddtoCartActionTypes.ADD_TO_CART_FAILURE,
)<IAddtoCartFailureActionData>();

export const resetAddtoCart = createAction(AddtoCartActionTypes.RESET_ADD_TO_CART_DETAIL)();
export type getAddtoCartAction = ActionType<typeof getAddtoCart>;
type getAddtoCartSuccessAction = ActionType<typeof getAddtoCartSuccess>;
type getAddtoCartFailureAction = ActionType<typeof getAddtoCartFailure>;
type resetAddtoCartAction = ActionType<typeof resetAddtoCart>;

export type AddtoCartFetchActions =
  | getAddtoCartAction
  | getAddtoCartSuccessAction
  | getAddtoCartFailureAction
  | resetAddtoCartAction;