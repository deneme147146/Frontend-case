import {  } from "../initialValues/productItems"

export const LOCAL_PRODUCTS = "LOCAL_PRODUCTS"


export const localProducts = (product) => ({
    type: LOCAL_PRODUCTS,
    payload: product
    
})