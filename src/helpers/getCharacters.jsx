import axios from 'axios';

export const getCharacters = async (state, page) => {
  const url = `https://swapi.dev/api/people/?page=${page}`;

  const data = await axios.get(url);

  state(data.data.results);
};

export const getCharacter = async (state, input) => {
  const url = `https://swapi.dev/api/people/?search=${input}`;
  const data = await axios.get(url);

  state(data.data.results);
};
