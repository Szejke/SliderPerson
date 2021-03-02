import * as type from 'redux/types';

const initialState = {
  persons: [],
  loading: false,
  error: null,
};

export default function reducersPerson(state = initialState, action) {
  switch (action.type) {
    case type.GET_PERSONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PERSONS_SUCCESS:
      return {
        loading: false,
        persons: [...state.persons, action.payload],
      };
    case type.GET_PERSONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
