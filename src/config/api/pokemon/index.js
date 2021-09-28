import sendAPI from '../send';

const getPokemon = count => {
  const data = {
    url: `/pokemon/${count}`,
    method: 'GET',
  };

  return sendAPI(data);
};

const getSpecies = count => {
  const data = {
    url: `/pokemon-species/${count}`,
    method: 'GET',
  };

  return sendAPI(data);
};

const POKEMON_API = {
  getPokemon,
  getSpecies,
};

export default POKEMON_API;
