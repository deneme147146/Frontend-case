import { ADD_TO_CART , DELETE_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, {type,payload}){
    // eslint-disable-next-line default-case
    switch(type){
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id ===payload.id)
            if (product) {
                product.quantity ++;
                return{
                    ...state
                }
                
            } else {

                return{
                    ...state,
                    cartItems: [...state.cartItems,{quantity:1, product:payload}]
                }
                
            }
        case DELETE_TO_CART:   
            let updateCartItems = state.cartItems.map(item=>{
                if(item.product.id === payload.id){
                    if(item.quantity>1){
                        item.quantity--;
                        return item;
                    }
                    else{
                        return{
                            ...state,
                            cartItems: state.cartItems.filter(item => item.product.id !== payload.id)
                    }
                    }
                }
            }) 


        default:
            return state
            break;
    }
}