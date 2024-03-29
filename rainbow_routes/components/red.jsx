import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import rootReducer from '../../pokedex/frontend/reducers/root_reducer';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        <NavLink exact to="/red">Red Only</NavLink>
        <NavLink to="/red/orange">Add Orange</NavLink>
        <NavLink to="/red/yellow">Add Yellow</NavLink>

        <Route path="/red/orange" component={Orange} />
        <Route path="/red/yellow" component={Yellow} />
      </div>
    );
  }
};

export default Red;
