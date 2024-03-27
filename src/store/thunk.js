/* eslint-disable no-undef */
import { fetchProductsFailure, fetchProductsSuccess, fetchProductsRequest } from "./actions/productActions";
import ProductService from "../services/productService";




const productService = new ProductService()

export const fetchProducts = () => async (dispatch) =>{

    dispatch(fetchProductsRequest());

    try {
        const response = await productService.getProducts();
        dispatch(fetchProductsSuccess(response.data))
    } catch (error) {

        dispatch(fetchProductsFailure(error.message))
        
    }

}

export const fetchDetailProduct = (id) => async (dispatch) =>{

    dispatch(fetchProductsRequest());

    try {
        const response = await productService.getByProductId(id);
        dispatch(fetchProductsSuccess(response.data))

        
    } catch (error) {
        dispatch(fetchProductsFailure(error.message))
    }


}