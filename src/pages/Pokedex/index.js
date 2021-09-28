import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../config/state';
import { useHistory, useParams } from 'react-router-dom';

import './pokedex.scss';
import logo from '../../assets/img/logox.png';
import Loading from '../../pages/Loading';
import Alert from '../../components/Alert';

const Pokedex = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { current: currentPokemon, pokemon } = useSelector(state => state);
  const { isLoading, data: species } = useSelector(state => state.species);

  const { getPokemon, getSpecies, setCurrent } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getPokemon(currentPokemon);
    getSpecies(currentPokemon);
  }, [currentPokemon]);

  const handlePrev = () => {
    if (currentPokemon !== 1) {
      setCurrent(currentPokemon - 1);
    }
  };

  const handleNext = () => {
    setCurrent(currentPokemon + 1);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className={`container ${species.color?.name}`}>
        {pokemon.status === 'error' && <Alert />}
        <div className='header'>
          <div className='name'>
            <h5>#{currentPokemon}</h5>
            <h2>{pokemon.name}</h2>
          </div>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
        </div>

        <div className='hero'>
          <div className='type'>
            <h6>Type</h6>
            {pokemon.types?.map((type, index) => (
              <h3 key={index} className={species.color?.name}>
                {type.type.name}
              </h3>
            ))}
          </div>
          <div className='pokemon'>
            <div className='name'>
              <h1>{pokemon.name}</h1>
              <h1 className='bordered'>{pokemon.name}</h1>
              <h1>{pokemon.name}</h1>
              <h1 className='bordered'>{pokemon.name}</h1>
            </div>
            <div className='img'>
              <img
                src={pokemon.sprites?.other.dream_world.front_default}
                alt=''
                onClick={() => history.push(`/detail/${currentPokemon}`)}
              />
            </div>
          </div>
          <div className='bio'>
            <h6>Flavor</h6>
            <p>
              {species.flavor_text_entries
                ? species.flavor_text_entries[6].flavor_text
                : ''}
            </p>
          </div>
        </div>

        <div className='pokedex'>
          <h6>Pokedex</h6>
          <h3 className={species.color?.name}>
            {species.pokedex_numbers
              ? species.pokedex_numbers[1]?.pokedex.name
              : ''}
          </h3>
        </div>

        <div className='navigasi'>
          <button onClick={handlePrev} className={species.color?.name}>
            Prev
          </button>
          <span>#{currentPokemon}</span>
          <button onClick={handleNext} className={species.color?.name}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pokedex;
