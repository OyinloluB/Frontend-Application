import productActionTypes from "./product.types";

const initialState = {
  product: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_CHARACTER_START:
      return {
        ...state,
        loading: true,
      };
    case productActionTypes.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        product: [...action.payload.results],
        error: null,
      };
    case productActionTypes.FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
