import { combineEpics } from "redux-observable";
import StockEpics from "../features/stocks/epics";

export const rootEpic =  combineEpics(
    ...StockEpics
);
