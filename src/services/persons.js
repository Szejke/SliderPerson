import axios from 'axios';

const url = 'https://api.github.com/';

export function getPersonApi(userName) {
  return axios
    .get(`${url}users/${userName}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
