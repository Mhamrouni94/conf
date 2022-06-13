import axios from "axios";
import {
  CREATE_PROJET,
  CREATE_PROJET_FAIL,
  CREATE_PROJET_SECCESS,
  GET_PROJET,
  GET_PROJET_FAIL,
  GET_PROJET_SECCESS,
} from "../ActionTypes/ActionTypes";

export const create = (projet, token) => async (dispatch) => {
  dispatch({
    type: CREATE_PROJET,
  });
  try {
    let res = await axios.post("/projet/create", projet, {
      headers: { authorization: token },
    });
    dispatch({
      type: CREATE_PROJET_SECCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PROJET_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProjet = (token) => async (dispatch) => {
  dispatch({
    type: GET_PROJET,
  });
  try {
    let res = await axios.get("/projet/get", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: GET_PROJET_SECCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJET_FAIL,
      payload: error.response.data,
    });
  }
};
