import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/Abount'


function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/homeCV" component={Home}/>
        <Route exact path="/aboutCV" component={About}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
