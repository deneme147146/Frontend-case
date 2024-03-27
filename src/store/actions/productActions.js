export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST"
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE"



export const fetchProductsRequest = () => ({
 
        type: FETCH_PRODUCTS_REQUEST
    
})

export const fetchProductsSuccess=(product)=> ({

        type: FETCH_PRODUCTS_SUCCESS,
        payload: product
})

export const fetchProductsFailure=(product)=> ({

        type: FETCH_PRODUCTS_FAILURE,
        payload: product  
})
