export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_TO_CART = "DELETE_TO_CART"


export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
    
}

export function deleteToCart(product) {
    return {
        type: DELETE_TO_CART,
        payload: product
    }

}