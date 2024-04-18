
import { LOCAL_PRODUCTS , LOCAL_PRODUCTS_DELETE, localProducts} from "../actions/localActions"

const initialState = {
  
    localProduct : JSON.parse(localStorage.getItem("cart")) || [],
}

export default function localReducer(state = initialState, action) {
 

  
  let cartItems =state.localProduct.slice();
  let cartsOfUser;
  
    // eslint-disable-next-line default-case
    switch (action.type){
        case LOCAL_PRODUCTS:

        let userrr = JSON.parse(localStorage.getItem("user")).user.email // from localstorage
        
          console.log("LOCAL", state.localProduct)
           // Create a copy of the cartItems array
          cartsOfUser = cartItems.filter(cart => cart.user === userrr);
            const  existingItemIndex = cartsOfUser.findIndex(
              (item) => item.product.id === action.payload.id
              
            );
            
      
            if (existingItemIndex !== -1) {
              let index = cartItems.findIndex(
                (item) => item.product.id === cartsOfUser[existingItemIndex].product.id && item.user === userrr
              );
              cartItems[index].quantity += 1;
            } else {
              cartItems.push({user:action.user, product: action.payload, quantity: 1 });
              return { ...state, localProduct:cartItems };
              
              console.log("deneme")
            }
      
            localStorage.setItem("cart", JSON.stringify(cartItems)); // Update local storage
            
            return { ...state, cartItems };
            
        case LOCAL_PRODUCTS_DELETE:
         let  userrrr = JSON.parse(localStorage.getItem("user")).user.email; 
          
          
        cartsOfUser = cartItems.filter(cart => cart.user === userrrr);
        const  existingItemIndexDelete = cartsOfUser.findIndex(
          (item) => item.product.id === action.payload.id
          
        );

          
  if (existingItemIndexDelete !== -1) {
    


    let index = cartItems.findIndex(
      (item) => item.product.id === cartsOfUser[existingItemIndexDelete].product.id && item.user === userrrr
    );
    // Decrease the quantity if the product is in the cart
    if (cartItems[index].quantity <= 1) { // Değişiklik burada
      cartItems.splice(index, 1); 
  
      return { ...state, localProduct:cartItems };
      
    } else {
      cartItems[index].quantity -= 1; // Decrease the quantity by 1
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
          return { ...state, cartItems };
        
        default:
            return state;

       
        }
    }


