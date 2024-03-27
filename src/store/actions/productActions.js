export const ADD_PRODUCT = "ADD_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CHANGE_DATA = "CHANGE_DATA"


export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        payload: product
    }
    
}

export function deleteProduct(product) {
    return {
        type: DELETE_PRODUCT,
        payload: product
    }

}

export function changeData(product){
    return {
        type: CHANGE_DATA,
        payload: product
    }
    
}
