import { Reducer } from 'redux';
import { AddtoCartFetchActions, AddtoCartActionTypes } from '../actions/addToCart';

export interface IAddTOCartState {
    cartList: any;
    isLoading: boolean;
    isSuccess: boolean;
    error?: any,
}
const initialCartState: IAddTOCartState = {
    cartList: [],
    isLoading: false,
    isSuccess: false,
    error: {},
};

const AddToCartReducer: Reducer<IAddTOCartState, AddtoCartFetchActions> = (
    state = initialCartState,
    action: AddtoCartFetchActions,
): IAddTOCartState => {
    switch (action.type) {
        case AddtoCartActionTypes.ADD_TO_CART:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            };
        case AddtoCartActionTypes.ADD_TO_CART_SUCCESS:
            let cartList = [];
            if (action.payload.deletetheItem) {
                if (!!state.cartList.length) {
                    const tempArray = [...state.cartList];
                    tempArray.pop();
                    cartList = tempArray;
                } else {
                    cartList = []
                }
            }
            else {
                !!state.cartList.length ? cartList = state.cartList.concat(action.payload.cartList) : cartList = [action.payload.cartList]
            }
            return {
                ...state,
                cartList: cartList,
                isLoading: false,
                isSuccess: true,
            };
        case AddtoCartActionTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                error: action.payload.error,
            };
        case AddtoCartActionTypes.RESET_ADD_TO_CART_DETAIL:
            return initialCartState;
        default:
            return state;
    }
};
export default AddToCartReducer;