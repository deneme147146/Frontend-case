import { addLocalStorage } from "../../helper/LocalStorageHelper";
import { ADD_TO_CART, DELETE_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";



const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  //cartItems: savedCartItems,
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  // eslint-disable-next-line default-case
  switch (type) {
    case ADD_TO_CART:
    
      console.log(state.cartItems)

      let product = state.cartItems.find((c) => c.product.id === payload.id);
      console.log(product)
      if (product) {
        product.quantity++;

        //localstorage
       // 
        console.log("DÖN",state.cartItms)
        return {
          ...state,
          
        };
      } else {
        let updatedCartItems = [...state.cartItems, { quantity: 1, product: payload }];
        //addLocalStorage(updatedCartItems)
        
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
      
        };

      }
 
    case DELETE_TO_CART:
      let updatedCartItems = state.cartItems
        .map((item) => {
          if (item.product.id === payload.id) {
            if (item.quantity > 1) {
              item.quantity--;
              return item;
            } else {
              // Silme işlemi için filtreleme yapılmalı
              return null; // veya undefined
            }
          }
          return item;
        })
        .filter((item) => item !== null); // veya undefined

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
      break;
  }
}
