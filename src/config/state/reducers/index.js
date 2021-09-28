import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import speciesReducer from './speciesReducer';
import currentReducer from './currentReducer';

const reducers = combineReducers({
  pokemon: pokemonReducer,
  species: speciesReducer,
  current: currentReducer,
});

export default reducers;
