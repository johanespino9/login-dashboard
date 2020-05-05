import axios from 'axios';
// import { updateDB, getFavs } from '../firebase';
// constants
const initialData = {
  fetching: false,
  array: [],
  current: {},
  favorites: [],
};

const URL = 'https://rickandmortyapi.com/api/character';

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

// reducer
export default function reducer(state = initialData, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, array: action.payload, fetching: false };
    case GET_CHARACTERS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}
// actions (thunks)

export const getCharactersAction = () => dispatch => {
  dispatch({
    type: GET_CHARACTERS,
  });
  return axios
    .get(URL)
    .then(res => {
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CHARACTERS_ERROR,
        payload: error.message,
      });
    });
};
