/* eslint-disable no-duplicate-case */
import { FETCH_PRODUCTS_FAILURE , FETCH_PRODUCTS_REQUEST , FETCH_PRODUCTS_SUCCESS , 
  SORT_BY_OLD_TO_NEW , SORT_BY_NEW_TO_OLD , SORT_BY_HIGH_TO_LOW , SORT_BY_LOW_TO_HIGH} from "../actions/productActions";
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

          case SORT_BY_LOW_TO_HIGH:
            const sortedProductsLowToHigh = [...state.products].sort((a, b) => a.price - b.price);
            return {
              ...state,
              products: sortedProductsLowToHigh,
            };

            case SORT_BY_HIGH_TO_LOW:
              const sortedProductsHighToLow = [...state.products].sort((a, b) => b.price - a.price);
              return {
                ...state,
                products: sortedProductsHighToLow,
              };  

              case SORT_BY_OLD_TO_NEW:
            const sortedProductsOldToNew = [...state.products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return {
              ...state,
              products: sortedProductsOldToNew,
            };  

          case SORT_BY_NEW_TO_OLD:
            const sortedProductsNewToHigh = [...state.products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            return {
              ...state,
              products: sortedProductsNewToHigh,
            };  

    default:
      return state;

  }
}
