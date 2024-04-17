export const LOCAL_PRODUCTS = "LOCAL_PRODUCTS"
export const LOCAL_PRODUCTS_DELETE = "LOCAL_PRODUCTS_DELETE"



export const localProducts = (email,product) => ({
    type: LOCAL_PRODUCTS,
    user: email,
    payload: product
    
})


export const localProductsDelete = (email,product) => ({
    type: LOCAL_PRODUCTS_DELETE,
    user: email,
    payload: product
    
})