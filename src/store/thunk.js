/* eslint-disable no-undef */
import { fetchProductsFailure, fetchProductsSuccess, fetchProductsRequest, originProducts } from "./actions/productActions";
import ProductService from "../services/productService";
import { brandsProducts } from "./initialValues/productItems";




const productService = new ProductService()

export const fetchProducts = () => async (dispatch) =>{

    dispatch(fetchProductsRequest());

    try {
        const response = await productService.getProducts();
        dispatch(originProducts(response.data))
       // console.log("BRAND", response.data.data.brand);
        
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