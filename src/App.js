import React from 'react';
import './App.css';
import store from './reducers/index';
import {Provider} from 'react-redux';
import CharacterComponent from './components/character/CharacterComponent';
import CharacterListComponent from './components/character-list/CharacterListComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/"} component={CharacterListComponent}/>
            <Route exact path={"/characters/:id"} component={CharacterComponent}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
