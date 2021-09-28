import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPokemon from '../../pages/DetailPokemon';
import Pokedex from '../../pages/Pokedex';
import NotFound from '../../pages/NotFound';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Pokedex />
          </Route>
          <Route path='/detail/:id'>
            <DetailPokemon />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
