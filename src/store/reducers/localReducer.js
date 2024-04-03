
import { LOCAL_PRODUCTS } from "../actions/localActions"

const initialState = {
    localProduct : JSON.parse(localStorage.getItem("cart")) || [],
}

export default function localReducer(state = initialState, action) {

    // eslint-disable-next-line default-case
    switch (action.type){
        case LOCAL_PRODUCTS:
          console.log("LOCAL", state.localProduct)
            const cartItems = state.localProduct.slice(); // Create a copy of the cartItems array
            const existingItemIndex = cartItems.findIndex(
              (item) => item.product.id === action.payload.id
            );
      
            if (existingItemIndex !== -1) {
              cartItems[existingItemIndex].quantity += 1;
            } else {
              cartItems.push({ product: action.payload, quantity: 1 });
            }
      
            localStorage.setItem("cart", JSON.stringify(cartItems)); // Update local storage
            
            return { ...state, cartItems };
      
          default:
            return state;
        }
    }


