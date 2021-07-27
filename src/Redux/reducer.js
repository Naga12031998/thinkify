import { FETCH_API } from "./actionTypes";

const initialState = {
  authorNames: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_API: {
      return {
        ...state,
        authorNames: payload,
      };
    }
    default: {
      return { state };
    }
  }
};

export { reducer };
