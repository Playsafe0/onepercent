import getAddToCartEpic from "./addToCart";
import getLoginEpic from "./login";
import getStockDetailEpic from "./stockDetail";
import getStockListEpic from "./stockList";

const StockEpics = [
    getStockListEpic,
    getStockDetailEpic,
    getAddToCartEpic,
    getLoginEpic
];

export default StockEpics ;