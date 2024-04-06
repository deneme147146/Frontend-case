
import { LOCAL_PRODUCTS , LOCAL_PRODUCTS_DELETE} from "../actions/localActions"

const initialState = {
    localProduct : JSON.parse(localStorage.getItem("cart")) || [],
}

export default function localReducer(state = initialState, action) {
  let cartItems;
    // eslint-disable-next-line default-case
    switch (action.type){
        case LOCAL_PRODUCTS:
          console.log("LOCAL", state.localProduct)
             cartItems = state.localProduct.slice(); // Create a copy of the cartItems array
            const  existingItemIndex = cartItems.findIndex(
              (item) => item.product.id === action.payload.id
            );
      
            if (existingItemIndex !== -1) {
              cartItems[existingItemIndex].quantity += 1;
              console.log("+ basınca ",cartItems.quantity)
            } else {
              cartItems.push({ product: action.payload, quantity: 1 });
            }
      
            localStorage.setItem("cart", JSON.stringify(cartItems)); // Update local storage
            
            return { ...state, cartItems };
            
        case LOCAL_PRODUCTS_DELETE:
          cartItems = state.localProduct.slice();
          const existingItemIndexDelete = cartItems.findIndex(
            (item) => item.product.id === action.payload.id
          );

          
  if (existingItemIndexDelete !== -1) {
    // Decrease the quantity if the product is in the cart
    if (cartItems[existingItemIndexDelete].quantity <= 1) { // Değişiklik burada
      cartItems.splice(existingItemIndexDelete, 1); // Remove the item from cart if quantity is 0 or less
    } else {
      cartItems[existingItemIndexDelete].quantity -= 1; // Decrease the quantity by 1
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
          return { ...state, localProduct:cartItems };
        
        default:
            return state;

       
        }
    }


