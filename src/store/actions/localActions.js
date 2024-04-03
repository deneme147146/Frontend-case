import {  } from "../initialValues/productItems"

export const LOCAL_PRODUCTS = "LOCAL_PRODUCTS"


export const localProduct = (product) => ({
    type: LOCAL_PRODUCTS,
    payload: product
    
})