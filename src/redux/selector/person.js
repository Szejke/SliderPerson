import { createSelector } from 'reselect';

const getPersons = (state) => {
  return state.persons;
};

export const getPerson = createSelector([getPersons], (state) => {
  return state;
});
