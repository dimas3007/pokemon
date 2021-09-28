import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../config/state';
import { useHistory, useParams } from 'react-router-dom';

import './detailPokemon.scss';
import logo from '../../assets/img/logox.png';
import Loading from '../../pages/Loading';
import Alert from '../../components/Alert';

const DetailPokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const pokemon = useSelector(state => state.pokemon);
  const { isLoading, data: species } = useSelector(state => state.species);

  const { getPokemon, getSpecies, setCurrent } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getPokemon(id);
    getSpecies(id);
  }, [id]);

  const handleBack = () => {
    setCurrent(Number(id));
    history.push(`/`);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className={`container ${species.color?.name}`}>
        {pokemon.status === 'error' && <Alert />}

        <h3 className={`back ${species.color?.name}`} onClick={handleBack}>
          {'< Back'}
        </h3>
        <div className='header'>
          <div className='name'>
            <h5>#{id}</h5>
            <h2>{pokemon.name}</h2>
          </div>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
        </div>

        <div className='detail'>
          <div className='desc'>
            <img
              src={pokemon.sprites?.other.dream_world.front_default}
              alt=''
            />
            <div className='type'>
              {pokemon.types?.map((type, index) => (
                <h3 key={index} className={species.color?.name}>
                  {type.type.name}
                </h3>
              ))}
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

          <div className='info'>
            <div className='stat'>
              <h3 className={`title ${species.color?.name}`}>Stats</h3>
              {pokemon.stats?.map((stat, index) => (
                <div className='form' key={index}>
                  <div className='label'>
                    <h5>{stat.stat.name}</h5>
                  </div>
                  <h6>{stat.base_stat}</h6>
                  <div className='bar-wrap'>
                    <div className='bar'></div>
                    <div
                      className='bar-top'
                      style={{ width: stat.base_stat + '%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className='moves'>
              <h3 className={`title ${species.color?.name}`}>Moves</h3>
              <div className='move'>
                {pokemon.moves?.slice(0, 10).map((move, index) => (
                  <h3 className={species.color?.name} key={index}>
                    {move.move.name.replace('-', ' ')}
                  </h3>
                ))}
              </div>
            </div>

            <div className='moves'>
              <h3 className={`title ${species.color?.name}`}>Egg Groups</h3>
              <div className='move'>
                {species.egg_groups?.map((egg, index) => (
                  <h3 className={species.color?.name} key={index}>
                    {egg.name.replace('-', ' ')}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemon;
