import { combineReducers } from "redux";
import StockReducers from "../features/stocks/reducers";

export const rootReducer = combineReducers({
...StockReducers
});