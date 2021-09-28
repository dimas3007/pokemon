import API from '../../api/pokemon';

export const getPokemon = count => {
  return async dispatch => {
    try {
      const response = await API.getPokemon(count);
      dispatch({
        type: 'getPokemon',
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: 'getPokemon',
        payload: error,
      });
    }
  };
};

export const getSpecies = count => {
  return async dispatch => {
    try {
      const response = await API.getSpecies(count);
      dispatch({
        type: 'getSpecies',
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: 'getPokemon',
        payload: error,
      });
    }
  };
};

export const setCurrent = count => {
  return dispatch => {
    dispatch({
      type: 'setCurrent',
      payload: count,
    });
  };
};
