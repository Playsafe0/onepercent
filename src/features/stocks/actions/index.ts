import { AddtoCartFetchActions } from "./addToCart";
import { LoginFetchActions } from "./login";
import { StockDetailFetchActions } from "./stockDetails";
import { StockListFetchActions } from "./stocklist";

export type stockAction =
    | StockListFetchActions
    | StockDetailFetchActions
    | AddtoCartFetchActions
    | LoginFetchActions;