import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import localReducer from "./reducers/localReducer";
import authReducer from "./reducers/authReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    local: localReducer,
    auth: authReducer,

})

export default rootReducer