import AddToCartReducer from './addToCart';
import LoginReducer from './login';
import StockDetailReducer from './stockDetails';
import StockListReducer from './stocklist' ;

const StockReducers = {
    stockList : StockListReducer,
    stockDetail: StockDetailReducer,
    cartList :AddToCartReducer ,
    loginData :LoginReducer,
};
export default StockReducers ;
