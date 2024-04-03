import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import localReducer from "./reducers/localReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    local: localReducer,

})

export default rootReducer