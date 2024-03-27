/* eslint-disable no-duplicate-case */
import { FETCH_PRODUCTS_FAILURE , FETCH_PRODUCTS_REQUEST , FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";
import { products } from "../initialValues/productItems";

const initialState = {
  products: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading:true,
        error:null
      };
      
      case FETCH_PRODUCTS_SUCCESS:  
        return {
          ...state,
          loading:false,
          products:action.payload
        };

        case FETCH_PRODUCTS_FAILURE:
          return {
            ...state,
            loading:false,
            error:action.payload
          };

    default:
      return state;

  }
}
