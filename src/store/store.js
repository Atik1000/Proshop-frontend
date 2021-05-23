
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import {productListReducer,productDetailsReducer} from "./reducers/productReducer";
import thunk from 'redux-thunk'

const mainReducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;