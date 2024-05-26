import { Reducer } from 'redux';
import { LoginFetchActions, LoginActionTypes } from '../actions/login';

export interface ILOGINState {
    loginData: any;
    isLoading: boolean;
    isSuccess: boolean;
    error?: any,
}
const initialCartState: ILOGINState = {
    loginData: [],
    isLoading: false,
    isSuccess: false,
    error: {},
};

const LoginReducer: Reducer<ILOGINState, LoginFetchActions> = (
    state = initialCartState,
    action: LoginFetchActions,
): ILOGINState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            };
        case LoginActionTypes.LOGIN_SUCCESS:

            return {
                ...state,
                loginData: action.payload.loginData,
                isLoading: false,
                isSuccess: true,
            };
        case LoginActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                error: action.payload.error,
            };
        case LoginActionTypes.RESET_LOGIN_DETAIL:
            return initialCartState;
        default:
            return state;
    }
};
export default LoginReducer;