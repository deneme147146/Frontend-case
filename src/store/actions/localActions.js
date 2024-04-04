export const LOCAL_PRODUCTS = "LOCAL_PRODUCTS"
export const LOCAL_PRODUCTS_DELETE = "LOCAL_PRODUCTS_DELETE"



export const localProducts = (product) => ({
    type: LOCAL_PRODUCTS,
    payload: product
    
})


export const localProductsDelete = (product) => ({
    type: LOCAL_PRODUCTS_DELETE,
    payload: product
    
})