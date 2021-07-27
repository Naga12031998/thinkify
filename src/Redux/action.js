import { FETCH_API } from "./actionTypes";

const fetchApi = (payload) => {
  return {
    type: FETCH_API,
    payload: payload,
  };
};

export default fetchApi;
