import { ADD_PRODUCT, DELETE_PRODUCT, CHANGE_DATA } from "../actions/productActions";
import { products } from "../initialValues/productItems";

const initialState = {
  products: products,
};

export default function productReducer(state = initialState, { type, payload }) {
  // eslint-disable-next-line default-case
  switch (type) {
    case CHANGE_DATA:
      state.products = payload;
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
      break;
  }
}
