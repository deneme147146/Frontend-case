
import { LOCAL_PRODUCTS , LOCAL_PRODUCTS_DELETE} from "../actions/localActions"

const initialState = {
    localProduct : JSON.parse(localStorage.getItem("cart")) || [],
}

export default function localReducer(state = initialState, action) {
  let cartItems;
  let existingItemIndex 
    // eslint-disable-next-line default-case
    switch (action.type){
        case LOCAL_PRODUCTS:
          console.log("LOCAL", state.localProduct)
             cartItems = state.localProduct.slice(); // Create a copy of the cartItems array
              existingItemIndex = cartItems.findIndex(
              (item) => item.product.id === action.payload.id
            );
      
            if (existingItemIndex !== -1) {
              cartItems[existingItemIndex].quantity += 1;
            } else {
              cartItems.push({ product: action.payload, quantity: 1 });
            }
      
            localStorage.setItem("cart", JSON.stringify(cartItems)); // Update local storage
            
            return { ...state, cartItems };
            

        
        case LOCAL_PRODUCTS_DELETE: 
        // if (!state.localProduct) {
        //   return state; // If localProduct is undefined, return current state
        // }
         cartItems = state.localProduct.slice()
          existingItemIndex = cartItems.findIndex(
            (item) => item.product.id === action.payload.id
        );

        if(existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity -=1;

            if (cartItems[existingItemIndex].quantity <=0) {
                cartItems.splice(existingItemIndex, 1)
            }
        }

        localStorage.setItem("cart", JSON.stringify(cartItems))

        return { ...state, cartItems };

        default:
            return state;

       
        }
    }


