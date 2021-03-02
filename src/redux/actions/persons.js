import * as type from 'redux/types';

export function getPersonsAction(userName) {
  return {
    type: type.GET_PERSONS_REQUESTED,
    payload: userName,
  };
}
