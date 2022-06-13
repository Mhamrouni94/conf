import {
  CREATE_PROJET,
  CREATE_PROJET_FAIL,
  CREATE_PROJET_SECCESS,
} from "../ActionTypes/ActionTypes";

const initialState = {
  projet: [],
  loading: false,
  error: null,
};

const ProjReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PROJET:
      return { ...state, loading: true };
    case CREATE_PROJET_SECCESS:
      return { ...state, loading: false, project: payload, error: null };
    case CREATE_PROJET_FAIL:
      return { ...state, loading: false, project: null, error: payload };
    default:
      return state;
  }
};
export default ProjReducer